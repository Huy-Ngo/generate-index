# Page index generator

Have you ever read an instruction page, or GitHub read me that's sooooo long,
and there is no way to navigate between parts easily?

Maybe you'd like something like Wikipedia's table of contents,
which makes it easier to navigate. However, the table of contents is fixed.
When you want to see it again you'd have to scroll back to top.

Seeing such struggle, I've decided to write this script to help you navigate
more easily.

Disclaimer: This only works with pages whose sections are `<h1>`, `<h2>`, `<h3>`,
`<a>`, `<div>`, `<span>`, and each of those must have ids. There can be some
irrelevant sections since the index catch so many type of elements.

# How to use this

Just paste gen-index.js into the browser console when the page is ready. Note that
it is impossible to create the index again when the index is already there, so for
websites that uses client-side routing, you'd have to refresh the page for the index
to reload.

A more convenient way to do it is to save it in a snipped (console --> Source --> Snippet)
and run it when you need.

There is a Chrome extension in development, though I'm not sure when I will distribute it
on Chrome web store soon, since I haven't created an account yet. Supposedly the extension
would work on other chromium-based extensions such as Opera or MS Edge as well.
