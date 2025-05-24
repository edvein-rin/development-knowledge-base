`@property` allows developers to explicitly define a [[Custom properties (variables)|custom variable]], allowing for **property type checking** and constraining, **setting default values**, and defining whether a custom property can inherit values or not [^1].

Property type checking can be useful for animations where usual [[Custom properties (variables)|CSS variables]] are treated as strings.

## Examples

```css
@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}
```

[^1]: [@property - CSS: Cascading Style Sheets \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@property)
