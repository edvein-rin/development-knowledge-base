**Cookies** are small pieces of data stored by the browser to maintain stateful information between HTTP requests [^1].

They are commonly used for session management, personalisation, and tracking.
## Common pitfalls

- **Incorrect Path or Domain:** Setting cookies with the wrong path or domain can prevent them from being sent with requests.
- **Secure and SameSite Flags:** Not setting the $Secure$ or $SameSite$ attributes properly can lead to security vulnerabilities or unexpected behavior, especially in cross-site scenarios.
- **Size Limits:** Browsers typically limit the size of each cookie (about 4KB) and the total number of cookies per domain.
- **HTTPOnly Flag:** Failing to set the `HttpOnly` flag can expose cookies to JavaScript, increasing the risk of XSS attacks.
- **Expiration Issues:** Not specifying an expiration or max-age can result in cookies being deleted when the browser closes.

[^1]: [MDN Web Docs: HTTP Cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies)