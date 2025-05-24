`<pre />` renders text exactly as it's written in the HTML file [^1].

>[!WARNING]
>Whitespace inside this element is displayed as written, with one exception. If one or more leading newline characters are included immediately following the opening `<pre>` tag, the _first_ newline character is stripped.

> [!WARNING]
> `<pre>` elements' text content is parsed as HTML, so if you want to ensure that your text content stays as plain text, some syntax characters, such as `<`, may need to be escaped using their respective [character references](https://developer.mozilla.org/en-US/docs/Glossary/Character_reference).
## Examples

```html
<pre>
             S
             A
            LUT
             M
            O N
            D  E
            DONT
           E SUIS
           LA LAN
          G U E  É
         L O Q U E N
        TE      QUESA
       B  O  U  C  H  E
      O        P A R I S
     T I R E   ET   TIRERA
    T O U             JOURS
   AUX                  A  L
 LEM                      ANDS   - Apollinaire
</pre>
```

<pre>
             S
             A
            LUT
             M
            O N
            D  E
            DONT
           E SUIS
           LA LAN
          G U E  É
         L O Q U E N
        TE      QUESA
       B  O  U  C  H  E
      O        P A R I S
     T I R E   ET   TIRERA
    T O U             JOURS
   AUX                  A  L
 LEM                      ANDS   - Apollinaire
</pre>

[^1]: [The Preformatted Text element - HTML: HyperText Markup Language \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/pre)
