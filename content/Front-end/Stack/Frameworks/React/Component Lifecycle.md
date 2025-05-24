**React component lifecycle** describes the sequence of events that occur from the creation to the removal of a component in the DOM [^1].

The lifecycle is divided into three main phases:
- mounting (when it's added to the screen),
- updating (when it receives new props or state, usually in response to an interaction),
- unmounting (when it’s removed from the screen).

![[ri980t17.png]]
### Lifecycle in Functional Components

In functional components, lifecycle management is handled using `useEffect` [^2]:

- **Mounting:** Code inside `useEffect` with an empty dependency array (`[]`) runs once after the component mounts.
- **Updating:** Code inside `useEffect` with specific dependencies runs when those dependencies change.
- **Unmounting:** Return a cleanup function from `useEffect` to handle unmounting logic.

**Example:**
```jsx
import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    // Mounting logic

    return () => {
      // Unmounting logic (cleanup)
    };
  }, []); // Empty array: runs once on mount and cleanup on unmount
}
```

[^1]: [Lifecycle of Reactive Effects – React](https://react.dev/learn/lifecycle-of-reactive-effects)
[^2]: [useEffect – React](https://react.dev/reference/react/useEffect)