**Fiber** is the core algorithm and architecture behind React’s rendering engine, introduced in [[React]] 16 [^1][^2]. 

**Fiber** breaks down the process of rendering and updating components into small units of work. This enables React to:
- **Concurrent rendering:** React can work on multiple tasks at once, improving performance and user experience.
- **Interruptible rendering:** React can stop work on one task to handle something more urgent, then resume later.
- **Better scheduling:** React can decide which updates are most important and handle them first.

For example, React can prioritise important updates (like user input) over less urgent ones (like background data fetching). It also gives support for advanced features like `Suspense`.

[^1]: [React Official Documentation – Reconciliation](https://react.dev/reference/react/Component#reconciliation)
[^2]: [React Blog – Inside Fiber: in-depth overview](https://react.dev/blog/2017/09/26/react-v16.0.html)
