**Container queries** is an alternative to media queries that applies styles conditionally based on [^1]:

- The container's size.
- Styles applied to the container.
- The container's scroll-state or that of its scrolling ancestor.

## Usage

Provide `container-type` to the container and use with `@container` when styling a child.

Check [the docs](https://developer.mozilla.org/en-US/docs/Web/CSS/container-type) for all `container-type` options and other details [^2].
## Examples

### Inline-size container

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

```css
.post {
  container-type: inline-size;
}

/* Default heading styles for the card title */
.card h2 {
  font-size: 1em;
}

/* If the container is larger than 700px */
@container (min-width: 700px) {
  .card h2 {
    font-size: 2em;
  }
}
```

### Named container

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}

@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```


[^1]: [CSS container queries - CSS: Cascading Style Sheets \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)

[^2]: [container-type - CSS: Cascading Style Sheets \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/container-type)
