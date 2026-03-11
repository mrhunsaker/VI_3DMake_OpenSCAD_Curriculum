--[[
admonitions.lua — Pandoc Lua filter
Converts GitHub/mdbook-style block-quote admonitions:

    > [!NOTE]
    > Body text here.

into LaTeX tcolorbox environments (notebox, tipbox, importantbox,
warningbox, cautionbox) defined in template.tex.

For non-LaTeX output formats the block-quote is left unchanged so that
the EPUB/HTML pipelines can handle it with their own CSS.
--]]

local fmt = FORMAT  -- e.g. "latex", "epub", "html"

-- Map admonition keyword → LaTeX environment name
local env_map = {
  NOTE      = "noteenv",
  TIP       = "tipenv",
  IMPORTANT = "importantenv",
  WARNING   = "warningenv",
  CAUTION   = "cautionenv",
}

-- Returns the admonition keyword if the BlockQuote opens with [!KEYWORD],
-- otherwise returns nil.
local function get_admonition_type(blocks)
  if #blocks == 0 then return nil end
  local first = blocks[1]
  -- The marker may appear as a Para whose first Inline is Str "[!NOTE]"
  -- or as a plain Str inside a Plain block.
  if first.t ~= "Para" and first.t ~= "Plain" then return nil end
  if #first.content == 0 then return nil end
  local head = first.content[1]
  if head.t ~= "Str" then return nil end
  local keyword = head.text:match("^%[!(%u+)%]$")
  return keyword
end

-- Strip the first block (the [!KEYWORD] line) from the block list.
-- If after stripping the first Para/Plain is now empty, remove it entirely.
local function strip_marker_block(blocks)
  local rest = {}
  for i, b in ipairs(blocks) do
    if i == 1 then
      -- Remove just the marker inline; keep any remaining inlines on the line
      local remaining = {}
      for j, inl in ipairs(b.content) do
        if j > 1 then remaining[#remaining+1] = inl end
      end
      -- Trim leading Space after the marker
      if #remaining > 0 and remaining[1].t == "Space" then
        table.remove(remaining, 1)
      end
      if #remaining > 0 then
        rest[#rest+1] = pandoc.Para(remaining)
      end
    else
      rest[#rest+1] = b
    end
  end
  return rest
end

function BlockQuote(el)
  -- Only transform for LaTeX output
  if not (fmt == "latex" or fmt == "pdf") then
    return nil  -- leave unchanged
  end

  local keyword = get_admonition_type(el.content)
  if not keyword then return nil end

  local env = env_map[keyword]
  if not env then return nil end

  local body_blocks = strip_marker_block(el.content)

  -- Render the inner blocks to a LaTeX string
  local inner = pandoc.write(pandoc.Pandoc(body_blocks), "latex")

  local latex = string.format(
    "\\begin{%s}\n%s\\end{%s}\n",
    env, inner, env
  )

  return pandoc.RawBlock("latex", latex)
end
