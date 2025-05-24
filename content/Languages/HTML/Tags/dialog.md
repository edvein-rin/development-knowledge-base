A native way to create modals, alerts, subwindows, etc [^1].

It can be opened with a `.show()` method for non-modal dialog boxes and a `.showModal()` for modals.
It can be closed with a `.close()` method or by pressing `ESC`.

It has an `open` attribute for managing open/closed state.

> [!WARNING]
> While the `open` property is technically not read-only and can be set directly, doing so is strongly discouraged by [the HTML specification](https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-dialog-closedby), as it can break normal dialog interactions in unexpected ways [^2].

Read the docs as there is much more to it.
## Examples

### Controlled modal

```html
<dialog open>
	<h2>This is a native dialog!</h2>
	<p>No JS required (almost :)</p>
	<button autofocus>Close</button>
</dialog>
<button>Open</button>
```

```js
const dialog = document.querySelector("dialog");
const openButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

openButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
```
### Alert (open by default, can't be reopened)

```html
<dialog open>
	<p>Alert!</p>
	<form method="dialog">
		<button autofocus>Close</button>
	</form>
</dialog>
```
## Styling

The backdrop of the dialog can be styles using the [`::backdrop`](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop) pseudo-element.

```css
dialog::backdrop {
  background-color: rgba(0,0,0,0.6);
}
```


[^1]: [The Dialog element - HTML: HyperText Markup Language \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
[^2]: [HTMLDialogElement: open property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/open)
