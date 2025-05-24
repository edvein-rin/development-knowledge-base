`<time />` represents a specific period in time[^1].

It may include the `datetime` attribute to translate dates into machine-readable format, allowing for **better search engine results** or custom features such as reminders.
## Examples

### Formatted date

```html
<p>The article was published on <time datetime="2025-05-20">May 20, 2025</time>.</p>
```

<p>The article was published on <time datetime="2025-05-20">May 20, 2025</time>.</p>

### Relative time

```html
<p>Posted <time datetime="2025-05-18T14:30:00">2 days ago</time>.</p>
```

<p>Posted <time datetime="2025-05-18T14:30:00">2 days ago</time>.</p>

## Time only

```html
<p>
  The concert starts at <time datetime="20:00">20:00</time> and you'll be able
  to enjoy the band for at least <time datetime="PT2H30M">2h 30m</time>.
</p>
```

<p>
  The concert starts at <time datetime="20:00">20:00</time> and you'll be able
  to enjoy the band for at least <time datetime="PT2H30M">2h 30m</time>.
</p>

[^1]: [The (Date) Time element - HTML: HyperText Markup Language \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time)
