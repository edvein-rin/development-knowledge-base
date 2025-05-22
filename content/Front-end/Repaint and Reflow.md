**Reflow** happens when a browser recalculates the position and geometry of certain parts of a web page, such as after an update on an interactive site [^1].

Examples that trigger a reflow include: adding or removing content, explicitly or implicitly changing the width, height, font set, font size, etc.

---

**Repaint** happens when the browser redraws the web page to show the resulting visual updates [^2].

Examples of this are outline, visibility, background, or colour. Repaint is ‘expensive’ (in terms of performance) because the browser has to check the visibility of all other nodes in the DOM tree.

---

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

[^3]


[^1]: [Reflow - MDN Web Docs Glossary: Definitions of Web-related terms \| MDN](https://developer.mozilla.org/en-US/docs/Glossary/Reflow)
[^2]: [Repaint - MDN Web Docs Glossary: Definitions of Web-related terms \| MDN](https://developer.mozilla.org/en-US/docs/Glossary/Repaint)
[^3]: [Understanding Reflow and Repaint in the browser - DEV Community](https://dev.to/gopal1996/understanding-reflow-and-repaint-in-the-browser-1jbg)