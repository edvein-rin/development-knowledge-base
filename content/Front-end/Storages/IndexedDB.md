**IndexedDB** is a low-level API for client-side storage of significant amounts of structured data, including files and blobs, in the browser [^1].

It is commonly used for offline applications, caching, and storing large datasets.

## Common pitfalls

- **Complex API:** IndexedDB has a verbose and asynchronous API, which can make it difficult to use compared to simpler storage options.
- **Versioning Issues:** Schema changes require version upgrades, which can lead to data migration problems if not handled carefully.
- **Browser Compatibility:** While widely supported, there are subtle differences and bugs across browsers that may affect behavior.
- **Quota Limits:** Browsers impose storage limits that vary by vendor and user settings, potentially causing write failures.
- **Transaction Scope:** Transactions are short-lived and auto-close if not used promptly, which can lead to unexpected errors.
- **Error Handling:** Insufficient error handling can result in silent failures, especially with asynchronous operations.

## Examples

```js
const request = indexedDB.open('MyDatabase', 1);

request.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction('users', 'readwrite');
  const store = transaction.objectStore('users');
  store.add({ id: 1, name: 'Alice' });
};

request.onerror = function(event) {
  console.error('Database error:', event.target.error);
};
```

[^1]: [MDN Web Docs: IndexedDB](https://developer.mozilla.org/docs/Web/API/IndexedDB_API)