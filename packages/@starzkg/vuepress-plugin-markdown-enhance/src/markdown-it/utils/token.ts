import type { default as Token } from 'markdown-it/lib/token.js'

export const setTokenAttr = (
  token: Token,
  name: string,
  value: string
): void => {
  const index = token.attrIndex(name)
  const attr: [string, string] = [name, value]

  if (index < 0) token.attrPush(attr)
  else token.attrs![index] = attr
}

export const getParentTokenIndex = (tokens: Token[], index: number): number => {
  const targetLevel = tokens[index].level - 1

  for (let i = index - 1; i >= 0; i--)
    if (tokens[i].level === targetLevel) return i

  return -1
}

export const isInlineToken = (token?: Token): boolean =>
  token?.type === 'inline'

export const isParagraphToken = (token?: Token): boolean =>
  token?.type === 'paragraph_open'

export const isListItemToken = (token?: Token): boolean =>
  token?.type === 'list_item_open'
