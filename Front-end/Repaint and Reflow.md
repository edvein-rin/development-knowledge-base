**Reflow** happens when a browser recalculates the position and geometry of certain parts of a web page, such as after an update on an interactive site.

Examples that trigger a reflow include: adding or removing content, explicitly or implicitly changing the width, height, font set, font size, etc.

---

**Repaint** happens when the browser redraws the web page to show the resulting visual updates.

Examples of this are outline, visibility, background, or colour. Repaint is ‘expensive’ (in terms of performance) because the browser has to check the visibility of all other nodes in the DOM tree.

> [!NOTE]- In Ukrainian
> 
>**Repaint** (перемальовування) відбувається, коли вносяться зміни до оболонки елемента, які змінюються видимо, але не впливають на його компонування.
>
>Прикладами цього є `outline`, `visibility`, `background` або `color`. Repaint є “дорогим” (з точки зору продуктивності), оскільки браузер повинен перевірити видимість усіх інших вузлів у дереві DOM.
>
>---
>
>**Reflow** (перекомпонування) ще важливіше для продуктивності, оскільки воно передбачає зміни, які впливають на макет частини сторінки (або всієї сторінки).
>
>Приклади, які спричиняють перекомпонування, включають: додавання або видалення вмісту, явну чи неявну зміну ширини, висоти, набору шрифтів, розміру шрифту тощо.

## Sources

```cardlink
url: https://developer.mozilla.org/en-US/docs/Glossary/Repaint
title: "Repaint - MDN Web Docs Glossary: Definitions of Web-related terms | MDN"
description: "Repaint happens when a browser redraws a web page to show the visual updates resulting from a UI change, such as after an update on an interactive site. This usually follows reflowing, which is when the browser recalculates the position and geometry of certain parts of a web page."
host: developer.mozilla.org
image: https://developer.mozilla.org/mdn-social-share.d893525a4fb5fb1f67a2.png
```
```cardlink
url: https://developer.mozilla.org/en-US/docs/Glossary/Reflow
title: "Reflow - MDN Web Docs Glossary: Definitions of Web-related terms | MDN"
description: "Reflow happens when a browser recalculates the position and geometry of certain parts of a webpage, such as after an update on an interactive site. This tends to be followed by repainting, which is when the browser redraws the webpage to show the resulting visual updates."
host: developer.mozilla.org
image: https://developer.mozilla.org/mdn-social-share.d893525a4fb5fb1f67a2.png
```

```cardlink
url: https://dev.to/gopal1996/understanding-reflow-and-repaint-in-the-browser-1jbg
title: "Understanding Reflow and Repaint in the browser"
description: "Recently I came to know about Reflow and Repaint. How it's affecting web performance. I am writing th..."
host: dev.to
favicon: https://media2.dev.to/dynamic/image/width=32,height=,fit=scale-down,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8j7kvp660rqzt99zui8e.png
image: https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F0vnd7u5yfcuasq9wy3pp.png
```
