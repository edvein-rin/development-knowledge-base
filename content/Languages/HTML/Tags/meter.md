`<meter />` is used for creating simple metrics [^1].

Styling is limited, but browser support is good.

> [!WARNING]
> If you want to create a progress bar use [[progress]] tag instead.
### Example

```html
<label for="fuel">Fuel level:</label>
<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">
  at 50/100
</meter>
```

<label for="fuel">Fuel level:</label>
<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">
  at 50/100
</meter>


[^1]: [The HTML Meter element - HTML: HyperText Markup Language \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meter)
