**Local Storage** is a simple key-value storage mechanism provided by web browsers, allowing data to persist across sessions and page reloads [^1].

It is commonly used for storing user preferences, simple application state, and small amounts of data that need to persist on the client side.

## Common pitfalls

- **Synchronous API:** All operations are synchronous, which can block the main thread and impact performance if used with large data.
- **Size Limits:** Browsers typically limit local storage to about 5-10MB per origin, and exceeding this quota will throw errors.
- **String-Only Storage:** All values are stored as strings, requiring manual serialisation and deserialisation for objects or arrays.
- **No Expiration:** Data persists until explicitly removed; there is no built-in expiration mechanism.
- **Security:** Data is accessible via JavaScript, making it vulnerable to XSS attacks if not handled carefully.
- **Lack of Event Handling:** Changes in local storage from other tabs/windows can only be detected via the `storage` event, which is not always reliable.

## Examples

```js
// Store data
localStorage.setItem('username', 'Alice');

// Retrieve data
const user = localStorage.getItem('username'); // 'Alice'

// Remove data
localStorage.removeItem('username');

// Store an object (serialization required)
const settings = { theme: 'dark', fontSize: 16 };
localStorage.setItem('settings', JSON.stringify(settings));

// Retrieve and parse an object
const savedSettings = JSON.parse(localStorage.getItem('settings'));
```

[^1]: [MDN Web Docs: Web Storage API](https://developer.mozilla.org/docs/Web/API/Web_Storage_API)