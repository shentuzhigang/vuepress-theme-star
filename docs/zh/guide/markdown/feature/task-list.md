---
title: 任务列表
icon: check
---

# 任务列表

Let the Markdown file in your VuePress site support task list.

<!-- more -->

## Configuration

```js {7}
module.exports = {
  plugins: [
    [
      "markdown-enhance",
      {
        // Enable Task List
        tasklist: true,
      },
    ],
  ],
};
```

## Syntax

- Use `- [ ] some text` to render a unchecked task item.
- Use `- [x] some text` to render a checked task item. (Capital `X` is also supported)

## Demo

- [ ] Plan A
- [x] Plan B

```md
- [ ] Plan A
- [x] Plan B
```
