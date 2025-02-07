---
title: Markmap
icon: opportunity
---
# Markmap
让你的 VuePress 站点中的 Markdown 文件支持 [Markmap 文档](https://markmap.js.org/docs/markmap)。

使用 [Markmap 文档](https://markmap.js.org/docs/markmap) 提供相应功能。

<!-- more -->

## 文档

相关详情，详见 [Markmap 文档](https://markmap.js.org/docs/markmap).

## 示例

```markmap Markmap Demo
---
markmap:
  colorFreezeLevel: 2
  extraJs:
    - katex/dist/contrib/mhchem.min.js
---

# markmap

## Links

- <https://markmap.js.org/>
- [GitHub](https://github.com/gera2ld/markmap)

## Related Projects

- [coc-markmap](https://github.com/gera2ld/coc-markmap)
- [gatsby-remark-markmap](https://github.com/gera2ld/gatsby-remark-markmap)

## Features

- links
- **strong** ~~del~~ *italic* ==highlight==
- multiline
  text
- `inline code`
-
    ```js
    console.log('code block');
    ```
- Katex
  - $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$
  - [More Katex Examples](#?d=gist:af76a4c245b302206b16aec503dbe07b:katex.md)
- Now we can wrap very very very very long text based on `maxWidth` option
```
::: details Code

````md
```markmap Markmap Demo
---
markmap:
  colorFreezeLevel: 2
  extraJs:
    - katex/dist/contrib/mhchem.min.js
---

# markmap

## Links

- <https://markmap.js.org/>
- [GitHub](https://github.com/gera2ld/markmap)

## Related Projects

- [coc-markmap](https://github.com/gera2ld/coc-markmap)
- [gatsby-remark-markmap](https://github.com/gera2ld/gatsby-remark-markmap)

## Features

- links
- **strong** ~~del~~ *italic* ==highlight==
- multiline
  text
- `inline code`
-
    ```js
    console.log('code block');
    ```
- Katex
  - $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$
  - [More Katex Examples](#?d=gist:af76a4c245b302206b16aec503dbe07b:katex.md)
- Now we can wrap very very very very long text based on `maxWidth` option
```
````

:::

