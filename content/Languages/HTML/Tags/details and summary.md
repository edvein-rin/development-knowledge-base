A native way for creating accordions or a nested navigation [^1].

It has an `open` attribute for managing a default state.

>[!WARNING]
>You need to remove `open` to make it hidden instead of setting it to `false`.

There is a `toggle` event to handle state changes.
## Examples

## Closed by default

```html
<details>
  <summary>Click to expand</summary>
  <p>This content can be expanded and collapsed without any JavaScript!</p>
</details>
```

<details>
  <summary>Click to expand</summary>
  <p>This content can be expanded and collapsed without any JavaScript!</p>
</details>

## Open by default

```html
<details open>
  <summary>Click to expand</summary>
  <p>This content can be expanded and collapsed without any JavaScript!</p>
</details>
```

<details open>
  <summary>Click to expand</summary>
  <p>This content can be expanded and collapsed without any JavaScript!</p>
</details>

### Nested

```html
<details>
  <summary>Programming Languages</summary>
  <details>
    <summary>Frontend</summary>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </details>
  <details>
    <summary>Backend</summary>
    <ul>
      <li>Python</li>
      <li>Java</li>
      <li>Ruby</li>
    </ul>
  </details>
</details>
```

<details>
  <summary>Programming Languages</summary>
  <details>
    <summary>Frontend</summary>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </details>
  <details>
    <summary>Backend</summary>
    <ul>
      <li>Python</li>
      <li>Java</li>
      <li>Ruby</li>
    </ul>
  </details>
</details>


[^1]: [The Details disclosure element - HTML: HyperText Markup Language \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details)
