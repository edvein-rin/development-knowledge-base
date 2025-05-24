**`@starting-style`** is used to define styling when an element is first time displayed [^1].

Useful for making animations smoother on first render.

> [!INFO] When to use?
> 
> It is important to understand that an element will transition from its `@starting-style` styles when it is **first rendered in the DOM**, or when **it transitions from [`display: none`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) to a visible value**. When it transitions back from its initial visible state, **it will no longer use the `@starting-style` styles as it is now visible in the DOM**. Instead, it will transition back to whatever styles exist for that element's default state.
> 
> In effect, there are three style states to manage in these situations — starting-style state, transitioned state, and default state. It is possible for the "to" and "from" transitions to be different in such cases. You can see a proof of this in our [Demonstration of when starting styles are used](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) example, below.
## Examples

```css
popover {
  opacity: 1;
  transform: scaleX(1);

  @starting-style {
	  opacity: 0;
	  transform: scaleX(0);
  }
}
```

[^1]: [@starting-style - CSS: Cascading Style Sheets \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style)
