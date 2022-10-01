---
title: 属性支持
icon: code
category:
  - Markdown
tag:
  - Markdown
  - 属性
---
# 属性支持
让你的 VuePress 站点中的 Markdown 文件支持属性支持。

你可以使用特殊标记为 Markdown 元素添加属性。

<!-- more -->

## 语法
你可以使用语法 `{attrs}` 来为 Markdown 元素添加属性。

比如，如果你想要一个 id 为 say-hello-world，文字为 Hello World 的二级标题，你可以使用:

```md
## Hello World {#say-hello-world}
```

如果你想要一个有 full-width Class 的图片，你可以使用:

```md
![img](link/to/image.png) {.full-width}
```

同时，其他属性也收到支持:

```md
一个包含文字的段落。 {#p .a .b align=center customize-attr="content with spaces"}
```

会被渲染为:

```html
<p id="p" class="a b" align="center" customize-attr="content with spaces">
  一个包含文字的段落。
</p>
```

## 示例

**输入**

```md
包含 `行内代码`{.inline-code} 和 ![favicon](/favicon.ico){.image} 的文字，也支持 _强调_{.emphasis} 和 **加粗**{.bold}。

| 表格 |
| ---- |
| 内容 |

{.table}

- list item{.list-item}

  - nested list item
    {.nested}

{.list}

一行换行的文字  
{.break}

--- {.horizontal}

块级元素 {.block}
```

**输出**

包含 `行内代码`{.inline-code} 和 ![favicon](/favicon.ico){.image} 的文字，也支持 _强调_{.emphasis} 和 **加粗**{.bold}。

| 表格 |
| ---- |
| 内容 |

{.table}

- 列表内容{.list-item}

  - 嵌套列表内容
    {.nested}

{.list}

一行换行的文字  
{.break}

--- {.horizontal}

块级元素 {.block}

## 高级

你可以向 `plugins.markdown.attrs` 传递选项以自定义插件行为。

```ts
interface AttrsOptions {
  /**
   * left delimiter
   *
   * 左分隔符
   *
   * @default '{'
   */
  leftDelimiter?: string

  /**
   * right delimiter
   *
   * 右分隔符
   *
   * @default '}'
   */
  rightDelimiter?: string

  /**
   * allowed attributes
   *
   * @description An empty list means allowing all attribute
   *
   * 允许的属性
   *
   * @description 设置空数组意味着允许所有属性
   *
   * @default []
   */
  allowedAttributes?: (string | RegExp)[]
}
```
## 参考 
- [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs)
