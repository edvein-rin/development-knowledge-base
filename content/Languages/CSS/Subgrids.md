When you add `display: grid` to a grid container, only the direct children become grid items, which can then be placed on the grid you created [^1]. The children of these items display in normal flow.

You can "nest" grids by making a grid item a grid container. These grids, however, are independent of the parent grid and of each other, meaning that they do not take their track sizing from the parent grid. This makes it difficult to line nested grid items up with the main grid.

If you set the value `subgrid` on `grid-template-columns`, `grid-template-rows` or both, instead of creating a new track listing, the nested grid uses the tracks defined on the parent.

## Examples

### Subgrid in both dimensions

```html
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}
```

![[Pasted image 20250524191200.png]]

[^1]: [Subgrid - CSS: Cascading Style Sheets \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid)
