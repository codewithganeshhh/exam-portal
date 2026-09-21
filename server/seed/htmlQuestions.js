export const htmlQuestions = [
  {
    questionNumber: 1,
    questionText: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlink and Text Management Language",
      "Home Tool Markup Language"
    ],
    correctOption: 0,
    explanation: "HTML stands for Hyper Text Markup Language, which is the standard markup language used to create web pages."
  },
  {
    questionNumber: 2,
    questionText: "Which HTML tag is used to define the largest heading on a web page?",
    options: ["<heading>", "<h6>", "<head>", "<h1>"],
    correctOption: 3,
    explanation: "<h1> defines the most important and largest heading, while <h6> defines the smallest."
  },
  {
    questionNumber: 3,
    questionText: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctOption: 1,
    explanation: "The anchor tag <a> is used to define hyperlinks with the 'href' attribute specifying the target URL."
  },
  {
    questionNumber: 4,
    questionText: "Which attribute is required on an <img> tag to provide alternate text for accessibility and SEO?",
    options: ["title", "src", "alt", "description"],
    correctOption: 2,
    explanation: "The 'alt' attribute provides alternative text when an image fails to load and is read by screen readers for accessibility."
  },
  {
    questionNumber: 5,
    questionText: "How do you open a link in a new browser tab or window?",
    options: [
      "<a href='url' new>",
      "<a href='url' target='_blank'>",
      "<a href='url' target='_newtab'>",
      "<a href='url' window='new'>"
    ],
    correctOption: 1,
    explanation: "Setting target='_blank' tells the browser to open the linked document in a new tab or window."
  },
  {
    questionNumber: 6,
    questionText: "Which tag is used to insert a line break in HTML without starting a new paragraph?",
    options: ["<lb>", "<break>", "<br>", "<hr>"],
    correctOption: 2,
    explanation: "<br> produces a single line break in text (it is a self-closing/void element)."
  },
  {
    questionNumber: 7,
    questionText: "Which HTML element is used to create an ordered (numbered) list?",
    options: ["<ul>", "<ol>", "<list>", "<li>"],
    correctOption: 1,
    explanation: "<ol> defines an ordered (numbered) list, whereas <ul> defines an unordered (bulleted) list."
  },
  {
    questionNumber: 8,
    questionText: "Which element is used to define an individual item inside an ordered or unordered list?",
    options: ["<item>", "<list-item>", "<li>", "<it>"],
    correctOption: 2,
    explanation: "<li> stands for list item and is placed inside <ol> or <ul>."
  },
  {
    questionNumber: 9,
    questionText: "Which input type is used to hide user input (such as secret credentials) with dots or asterisks?",
    options: ["type='secret'", "type='hidden'", "type='password'", "type='secure'"],
    correctOption: 2,
    explanation: "<input type='password'> masks entered characters to protect sensitive information."
  },
  {
    questionNumber: 10,
    questionText: "What is the purpose of the <!DOCTYPE html> declaration at the very top of an HTML document?",
    options: [
      "To link external CSS stylesheets",
      "To inform the web browser that the document is written in modern HTML5 standards",
      "To declare the author of the web page",
      "To encrypt the HTML code"
    ],
    correctOption: 1,
    explanation: "<!DOCTYPE html> instructs the browser to render the page in standard HTML5 mode rather than quirks mode."
  },
  {
    questionNumber: 11,
    questionText: "Which HTML element is a generic block-level container commonly used for grouping elements and styling?",
    options: ["<span>", "<div>", "<p>", "<section>"],
    correctOption: 1,
    explanation: "<div> is a standard block-level container that takes up the full width available by default."
  },
  {
    questionNumber: 12,
    questionText: "Which HTML element is an inline container used to style or mark up a part of a text without creating a new line?",
    options: ["<div>", "<p>", "<span>", "<container>"],
    correctOption: 2,
    explanation: "<span> is an inline container that wraps small text segments without forcing a line break."
  },
  {
    questionNumber: 13,
    questionText: "Which tag is used to display a paragraph of text?",
    options: ["<para>", "<p>", "<text>", "<pg>"],
    correctOption: 1,
    explanation: "The <p> tag defines a paragraph of text and automatically adds margin before and after."
  },
  {
    questionNumber: 14,
    questionText: "Which HTML attribute is used to provide placeholder hint text inside an input field before the user types?",
    options: ["hint", "placeholder", "value", "default"],
    correctOption: 1,
    explanation: "placeholder displays temporary grey hint text in an <input> or <textarea>."
  },
  {
    questionNumber: 15,
    questionText: "Which input type allows the user to select one single option from a predefined group of choices?",
    options: ["type='checkbox'", "type='radio'", "type='select'", "type='button'"],
    correctOption: 1,
    explanation: "Radio buttons (<input type='radio'>) sharing the same 'name' allow only one choice to be selected at a time."
  },
  {
    questionNumber: 16,
    questionText: "Which input type allows the user to select multiple options simultaneously?",
    options: ["type='radio'", "type='checkbox'", "type='multi'", "type='options'"],
    correctOption: 1,
    explanation: "Checkbox (<input type='checkbox'>) allows independent selection of multiple options."
  },
  {
    questionNumber: 17,
    questionText: "Which tag is used to create a multi-line text input field in a form?",
    options: ["<input type='multiline'>", "<textbox>", "<textarea>", "<text>"],
    correctOption: 2,
    explanation: "<textarea> creates an expandable multi-line text editing control."
  },
  {
    questionNumber: 18,
    questionText: "Which HTML tag is used to define a dropdown select list?",
    options: ["<dropdown>", "<list>", "<select>", "<picker>"],
    correctOption: 2,
    explanation: "<select> is used in combination with <option> tags to build dropdown menus."
  },
  {
    questionNumber: 19,
    questionText: "Which attribute makes an input field mandatory so that a form cannot be submitted without filling it?",
    options: ["validate", "required", "mandatory", "important"],
    correctOption: 1,
    explanation: "The boolean 'required' attribute prevents form submission if the input field is empty."
  },
  {
    questionNumber: 20,
    questionText: "What is the correct tag to embed an image in an HTML page?",
    options: ["<image src='pic.jpg'>", "<img href='pic.jpg'>", "<img src='pic.jpg'>", "<pic source='pic.jpg'>"],
    correctOption: 2,
    explanation: "<img> with the 'src' attribute points to the file path of the image to display."
  },
  {
    questionNumber: 21,
    questionText: "Which HTML5 semantic element is used to contain major navigation links on a website?",
    options: ["<navigation>", "<links>", "<nav>", "<menu>"],
    correctOption: 2,
    explanation: "<nav> is the semantic element specifically designated for major site navigation links."
  },
  {
    questionNumber: 22,
    questionText: "Which HTML5 semantic tag defines introductory content or a set of navigational aids for a document or section?",
    options: ["<top>", "<header>", "<heading>", "<intro>"],
    correctOption: 1,
    explanation: "<header> typically contains a heading, logo, author info, or navigation."
  },
  {
    questionNumber: 23,
    questionText: "Which HTML5 semantic tag defines the footer for a document, typically containing copyright notices and contact details?",
    options: ["<bottom>", "<end>", "<footer>", "<foot>"],
    correctOption: 2,
    explanation: "<footer> represents the footer of a document or section."
  },
  {
    questionNumber: 24,
    questionText: "Which HTML5 element represents standalone, independent content that could be distributed on its own (like a blog post or news card)?",
    options: ["<section>", "<article>", "<div>", "<aside>"],
    correctOption: 1,
    explanation: "<article> represents a self-contained composition (such as a news article, blog post, or forum reply)."
  },
  {
    questionNumber: 25,
    questionText: "Which HTML5 tag is used for sidebar content that is related to the main content (like author bio, related links, or ads)?",
    options: ["<sidebar>", "<aside>", "<subcontent>", "<right>"],
    correctOption: 1,
    explanation: "<aside> represents content indirectly related to the main document flow (often displayed as a sidebar)."
  },
  {
    questionNumber: 26,
    questionText: "Which tag is used to define a table row in HTML?",
    options: ["<td>", "<th>", "<tr>", "<row>"],
    correctOption: 2,
    explanation: "<tr> defines a table row (Table Row)."
  },
  {
    questionNumber: 27,
    questionText: "What is the difference between <td> and <th> inside an HTML table?",
    options: [
      "<th> is for standard cells; <td> is for headers",
      "<th> is for header cells (bold and centered by default); <td> is for standard data cells",
      "<td> can only contain numbers; <th> can only contain text",
      "They are completely identical"
    ],
    correctOption: 1,
    explanation: "<th> defines table header cells with bold styling, while <td> defines standard table data cells."
  },
  {
    questionNumber: 28,
    questionText: "Which attribute specifies where to send the form data when a user clicks the submit button?",
    options: ["method", "action", "target", "path"],
    correctOption: 1,
    explanation: "The 'action' attribute on a <form> defines the URL/endpoint to which the form data will be sent."
  },
  {
    questionNumber: 29,
    questionText: "Which HTTP method sends form data securely in the request body rather than appended to the URL query string?",
    options: ["GET", "POST", "FETCH", "SUBMIT"],
    correctOption: 1,
    explanation: "POST sends data in the HTTP request body, which is essential for sensitive data like passwords."
  },
  {
    questionNumber: 30,
    questionText: "What is the purpose of the <label> element's 'for' attribute in HTML forms?",
    options: [
      "To apply CSS styles",
      "To link the label with an <input> element's 'id', making the label text clickable to focus the input",
      "To define form validation loops",
      "To name the database table"
    ],
    correctOption: 1,
    explanation: "<label for='user-email'> binds to <input id='user-email'>, improving UX and screen-reader accessibility."
  },
  {
    questionNumber: 31,
    questionText: "Which HTML5 input type automatically validates that the entered text includes an '@' symbol and domain name?",
    options: ["type='text'", "type='mail'", "type='email'", "type='address'"],
    correctOption: 2,
    explanation: "<input type='email'> uses built-in browser validation to check for a valid email structure."
  },
  {
    questionNumber: 32,
    questionText: "Which input type restricts user entry to numbers and provides up/down spinner arrows in desktop browsers?",
    options: ["type='integer'", "type='digits'", "type='number'", "type='numeric'"],
    correctOption: 2,
    explanation: "<input type='number'> only accepts numbers and supports 'min', 'max', and 'step' attributes."
  },
  {
    questionNumber: 33,
    questionText: "Which tag is used to embed an external CSS stylesheet into an HTML page?",
    options: ["<style src='...'>", "<link rel='stylesheet' href='...'>", "<script href='...'>", "<css link='...'>"],
    correctOption: 1,
    explanation: "<link rel='stylesheet' href='style.css'> is placed inside <head> to link an external CSS file."
  },
  {
    questionNumber: 34,
    questionText: "Which tag is used to write or link JavaScript in an HTML document?",
    options: ["<javascript>", "<js>", "<script>", "<code language='js'>"],
    correctOption: 2,
    explanation: "<script> is used for both inline JavaScript and linking external scripts via src='script.js'."
  },
  {
    questionNumber: 35,
    questionText: "Which HTML tag is used to create a horizontal dividing rule (line) across a page?",
    options: ["<line>", "<divider>", "<hr>", "<border>"],
    correctOption: 2,
    explanation: "<hr> stands for Horizontal Rule and visually separates content."
  },
  {
    questionNumber: 36,
    questionText: "What is the difference between the 'id' and 'class' attributes on HTML elements?",
    options: [
      "'class' must be unique per page; 'id' can be reused",
      "'id' should be unique to a single element per page; 'class' can be assigned to multiple elements",
      "'id' can only be used on <div> tags",
      "There is no difference in HTML"
    ],
    correctOption: 1,
    explanation: "An ID is unique and should identify only one element per document, whereas classes can be shared among many elements."
  },
  {
    questionNumber: 37,
    questionText: "Which HTML tag is used to embed a native video player without needing third-party plugins?",
    options: ["<media>", "<movie>", "<video>", "<player>"],
    correctOption: 2,
    explanation: "HTML5 introduced the native <video> element with support for controls, autoplay, and loop."
  },
  {
    questionNumber: 38,
    questionText: "What attribute must be added to a <video> or <audio> element so that playback controls (play, pause, volume) are shown to the user?",
    options: ["buttons", "player", "controls", "interface"],
    correctOption: 2,
    explanation: "The 'controls' attribute tells the browser to render the native playback control interface."
  },
  {
    questionNumber: 39,
    questionText: "Which HTML tag is used to display an interactive native expand/collapse accordion widget without JavaScript?",
    options: ["<accordion>", "<details> and <summary>", "<toggle>", "<collapse>"],
    correctOption: 1,
    explanation: "<details> creates a collapsible disclosure widget, and <summary> provides the clickable title."
  },
  {
    questionNumber: 40,
    questionText: "What does the 'readonly' attribute do when placed on a text input?",
    options: [
      "Hides the text input from the screen",
      "Allows the user to view and copy the value, but prevents editing it",
      "Deletes the input value after 5 seconds",
      "Disables form submission"
    ],
    correctOption: 1,
    explanation: "The 'readonly' boolean attribute makes an input field non-editable, but its value is still submitted with the form."
  },
  {
    questionNumber: 41,
    questionText: "What does the 'disabled' attribute do to a button or input element?",
    options: [
      "Makes the button blink with a red outline",
      "Prevents user interaction, grays out the element, and excludes its value from form submissions",
      "Hides the button from screen readers only",
      "Changes the button text to 'Off'"
    ],
    correctOption: 1,
    explanation: "'disabled' deactivates user interaction and prevents the field from being sent in form submissions."
  },
  {
    questionNumber: 42,
    questionText: "Which element is used to embed another HTML page inside the current document?",
    options: ["<embedpage>", "<frame>", "<iframe>", "<webview>"],
    correctOption: 2,
    explanation: "<iframe> (Inline Frame) embeds another HTML page within the current webpage."
  },
  {
    questionNumber: 43,
    questionText: "How are custom data attributes named in HTML5 so they can be read by JavaScript?",
    options: [
      "custom-* (e.g., custom-user='123')",
      "data-* (e.g., data-user-id='123')",
      "attr-* (e.g., attr-id='123')",
      "meta-* (e.g., meta-user='123')"
    ],
    correctOption: 1,
    explanation: "HTML5 custom data attributes always start with the 'data-' prefix (e.g., data-category='books')."
  },
  {
    questionNumber: 44,
    questionText: "Which tag is used to provide metadata about the HTML document (like character encoding or viewport settings)?",
    options: ["<info>", "<head>", "<meta>", "<data>"],
    correctOption: 2,
    explanation: "<meta> tags go inside <head> and specify charset, keywords, description, viewport, and author information."
  },
  {
    questionNumber: 45,
    questionText: "Which tag specifies the title of the document that appears in the browser tab?",
    options: ["<heading>", "<meta title>", "<title>", "<tab>"],
    correctOption: 2,
    explanation: "The <title> tag inside <head> sets the browser tab title and default bookmark name."
  },
  {
    questionNumber: 46,
    questionText: "Which HTML tag is used to pre-format text so that whitespace and line breaks are preserved exactly as written in code?",
    options: ["<code>", "<pre>", "<format>", "<fixed>"],
    correctOption: 1,
    explanation: "<pre> renders text in a monospace font and preserves both spaces and line breaks."
  },
  {
    questionNumber: 47,
    questionText: "Which tag is used to represent computer code snippets inside HTML text?",
    options: ["<script>", "<kbd>", "<code>", "<syntax>"],
    correctOption: 2,
    explanation: "The <code> element is used to semantically define fragments of computer code."
  },
  {
    questionNumber: 48,
    questionText: "Which attribute is used to provide an input field with autocomplete suggestions from a <datalist>?",
    options: ["options", "list", "autocomplete", "suggestions"],
    correctOption: 1,
    explanation: "The 'list' attribute on an <input> binds it to the 'id' of a <datalist> element."
  },
  {
    questionNumber: 49,
    questionText: "What does the HTML5 'autofocus' attribute do on an input element?",
    options: [
      "Automatically zooms the web page",
      "Places keyboard focus on the input automatically as soon as the page loads",
      "Enables webcam focus",
      "Clears other form fields"
    ],
    correctOption: 1,
    explanation: "'autofocus' places the cursor in that input field automatically when the page finishes loading."
  },
  {
    questionNumber: 50,
    questionText: "Which HTML element represents the central, dominant content of the document body that is unique to that page?",
    options: ["<section>", "<body>", "<main>", "<content>"],
    correctOption: 2,
    explanation: "<main> encapsulates the central, primary content of the body, excluding repeated headers, footers, and nav bars."
  }
];
