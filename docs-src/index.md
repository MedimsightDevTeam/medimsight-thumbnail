---
layout: page.11ty.cjs
title: <medimsight-thumbnail> ⌲ Home
---

# &lt;medimsight-thumbnail>

`<medimsight-thumbnail>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<medimsight-thumbnail>` is just an HTML element. You can it anywhere you can use HTML!

```html
<medimsight-thumbnail></medimsight-thumbnail>
```

  </div>
  <div>

<medimsight-thumbnail></medimsight-thumbnail>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<medimsight-thumbnail>` can be configured with attributed in plain HTML.

```html
<medimsight-thumbnail name="HTML"></medimsight-thumbnail>
```

  </div>
  <div>

<medimsight-thumbnail name="HTML"></medimsight-thumbnail>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<medimsight-thumbnail>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;medimsight-thumbnail&gt;</h2>
  <medimsight-thumbnail .name=${name}></medimsight-thumbnail>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;medimsight-thumbnail&gt;</h2>
<medimsight-thumbnail name="lit-html"></medimsight-thumbnail>

  </div>
</section>
