**Custom properties** (sometimes referred to as **CSS variables**) provide an ability to create variables in CSS[^1].

## Defining

### Using a prefix of two dashes (`--`)

```css
:root {
  --background-color: white;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: black;
  }
}

body {
  background-color: var(--background-color);
}
```

### Using a `@property` at-rule

Check [[@property]] for more details.

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```
## Referencing

Variables can be referenced using `var(...)` function.

```css
body {
  background-color: var(--background-color);
}
```

## Fallback

Fallback can be provided in case of no variable provided:

```css
body {
  background-color: var(--background-color, white);
}
```

Or even several fallbacks:

```css
body {
  background-color: var(--background-color, --bg-color, white);
}
```


[^1]: [Using CSS custom properties (variables) - CSS: Cascading Style Sheets \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
