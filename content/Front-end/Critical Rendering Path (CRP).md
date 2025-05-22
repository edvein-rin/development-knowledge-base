The Critical Rendering Path is the sequence of steps the browser goes through to convert the HTML, CSS, and JavaScript into pixels on the screen [^1].

#TODO

> [!NOTE]- In Ukrainian
> Перш за все, давайте розберемося, що відбувається, коли користувач вводить в пошукову строку браузера назву веб-сайту. Натиснувши Enter ми робимо http-запит. Браузер перевіряє наявність домена в своєму кеші. Якщо домен ніде не закешований, браузер відправляє запит до мережевого DNS-сервера. Якщо сайт доступний — ми отримуємо відповідь [^2].
> 
> Двигун рендерингу браузера починає отримувати вміст запитуваного сайту. Як правило, контент надходить шматками по 8 Кб. Головним завданням HTML-парсера є розбір розмітки в спеціальне дерево.
> 
> Отримане на виході дерево ( «parse tree») — це дерево DOM-елементів та вузлів атрибутів. Це модель об’єктного уявлення HTML-документа і інтерфейс для взаємодії HTML-елементів з “зовнішнім світом” (наприклад, JavaScript-кодом). Коренем дерева є об’єкт “Document”.
> 
> Після цього браузер починає довантажувати зовнішні ресурси, пов’язані зі сторінкою (стилі, зображення, скрипти і так далі).
> 
> Тобто спочатку html. Тоді css і наприкінці скрипти (тому scripts завжди прописуються внизу сторінки).
> 
> Після завершення парсинга DOM, браузер конструює CSS модель. Як тільки ці моделі (DOM i CSSOM) сформовані — браузер будує дерево рендера (render tree), в якому обчислює стилі для кожного видимого елемента сторінки. Після формування дерева відбувається компонування (**layout**), яка визначає положення і розміри елементів цього дерева. Як тільки етап завершений — сторінка рендерится. Або “відмальовується” (**paint**) на екрані.

## Optimising for CRP

#TODO Write about Critical Rendering Path optimisations.


[^1]: [Critical rendering path - Web performance \| MDN](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path)
[^2]: [Шлях від Middle до Senior Frontend developer. Part 3: Performance | Medium](https://medium.com/@jstify.community/%D1%88%D0%BB%D1%8F%D1%85-%D0%B2%D1%96%D0%B4-middle-%D0%B4%D0%BE-senior-frontend-developer-part-3-performance-48c1713e2e29#e666)