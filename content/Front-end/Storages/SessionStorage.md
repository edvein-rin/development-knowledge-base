**SessionStorage** is a web storage API that allows storing key-value pairs for the duration of a page session. Data is available only within the same tab or window and is cleared when the session ends (i.e., when the tab or window is closed) [^1].

It is commonly used for storing temporary data, such as form inputs or UI state, that should not persist beyond the current session.

## Common pitfalls

- **Session Scope:** Data is only accessible within the same tab or window; opening a new tab or window creates a new session.
- **Size Limits:** Browsers typically limit session storage to about 5MB per origin. Exceeding this quota will throw errors.
- **String-Only Storage:** All values are stored as strings, so objects and arrays must be manually serialized and deserialized.
- **No Expiration Control:** Data is cleared automatically when the session ends, with no way to persist it longer.
- **Synchronous API:** All operations are synchronous, which can block the main thread if used with large data.
- **Security:** Data is accessible via JavaScript, making it vulnerable to XSS attacks if not handled carefully.

## Examples

```js
// Store data
sessionStorage.setItem('token', 'abc123');

// Retrieve data
const token = sessionStorage.getItem('token'); // 'abc123'

// Remove data
sessionStorage.removeItem('token');

// Store an object (serialization required)
const tempData = { step: 2, value: 'foo' };
sessionStorage.setItem('wizard', JSON.stringify(tempData));

// Retrieve and parse an object
const wizardData = JSON.parse(sessionStorage.getItem('wizard'));
```

[^1]: [MDN Web Docs: Web Storage API](https://developer.mozilla.org/docs/Web/API/Web_Storage_API)