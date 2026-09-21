export const cssQuestions = [
  {
    questionNumber: 1,
    questionText: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style System",
      "Colorful Sheet Styles"
    ],
    correctOption: 1,
    explanation: "CSS stands for Cascading Style Sheets, used to format and design the visual presentation of HTML documents."
  },
  {
    questionNumber: 2,
    questionText: "Which symbol is used to select an element by its 'class' in a CSS stylesheet?",
    options: ["# (hash)", ". (dot)", "@ (at symbol)", "$ (dollar sign)"],
    correctOption: 1,
    explanation: "Classes are selected using a period/dot prefix (e.g. .btn or .card)."
  },
  {
    questionNumber: 3,
    questionText: "Which symbol is used to select an element by its unique 'id' in CSS?",
    options: [". (dot)", ": (colon)", "# (hash)", "* (asterisk)"],
    correctOption: 2,
    explanation: "IDs are selected using the hash symbol prefix (e.g. #header or #navbar)."
  },
  {
    questionNumber: 4,
    questionText: "Which CSS property is used to change the background color of an element?",
    options: ["color", "bgcolor", "background-color", "surface-color"],
    correctOption: 2,
    explanation: "'background-color' sets the background color of an HTML element."
  },
  {
    questionNumber: 5,
    questionText: "Which CSS property is used to change the color of text inside an element?",
    options: ["font-color", "text-color", "color", "text-style"],
    correctOption: 2,
    explanation: "The 'color' property sets the foreground color of text."
  },
  {
    questionNumber: 6,
    questionText: "Which property is used to adjust the size of text in CSS?",
    options: ["text-size", "font-size", "size", "font-style"],
    correctOption: 1,
    explanation: "'font-size' sets the size of the font (e.g. font-size: 16px; or font-size: 1.2rem;)."
  },
  {
    questionNumber: 7,
    questionText: "What are the four components of the standard CSS Box Model, from the inside out?",
    options: [
      "Content, Margin, Border, Padding",
      "Content, Padding, Border, Margin",
      "Border, Padding, Content, Margin",
      "Padding, Content, Border, Margin"
    ],
    correctOption: 1,
    explanation: "From inside to outside: Content is innermost, surrounded by Padding, then Border, and lastly Margin."
  },
  {
    questionNumber: 8,
    questionText: "What is the primary difference between 'margin' and 'padding' in CSS?",
    options: [
      "Margin is inside the border; Padding is outside the border",
      "Padding creates space inside the element's border; Margin creates empty space outside the element's border",
      "Margin only works on images; Padding only works on text",
      "They are identical properties"
    ],
    correctOption: 1,
    explanation: "Padding is the space between the content and the border; Margin is the external spacing between this element and other elements."
  },
  {
    questionNumber: 9,
    questionText: "What does 'box-sizing: border-box' do?",
    options: [
      "Adds a decorative shadow around the box",
      "Includes padding and border within the element's total declared width and height, preventing layout breakage",
      "Forces elements into a circular shape",
      "Removes all margins from the element"
    ],
    correctOption: 1,
    explanation: "With 'border-box', an element with width: 200px remains 200px wide even if padding or borders are added."
  },
  {
    questionNumber: 10,
    questionText: "Which property is used to round the corners of an element's border (e.g., to create pill or circular shapes)?",
    options: ["corner-round", "border-radius", "border-curve", "corner-radius"],
    correctOption: 1,
    explanation: "'border-radius' curves the corners of an element's outer border edge."
  },
  {
    questionNumber: 11,
    questionText: "Which CSS property controls the alignment of text horizontally inside its container?",
    options: ["vertical-align", "text-align", "align-content", "text-position"],
    correctOption: 1,
    explanation: "'text-align' aligns inline content horizontally (values: left, center, right, justify)."
  },
  {
    questionNumber: 12,
    questionText: "What is the difference between 'display: none' and 'visibility: hidden'?",
    options: [
      "display: none hides the element but preserves its space; visibility: hidden removes it completely",
      "display: none completely removes the element from document layout flow; visibility: hidden makes it invisible but preserves its original space",
      "display: none only works on mobile devices",
      "visibility: hidden changes the text color to white"
    ],
    correctOption: 1,
    explanation: "display: none collapses the element taking up 0 space; visibility: hidden keeps the box geometry in layout."
  },
  {
    questionNumber: 13,
    questionText: "Which CSS pseudo-class styles an element when the user moves their mouse cursor over it?",
    options: [":focus", ":active", ":hover", ":visited"],
    correctOption: 2,
    explanation: ":hover applies styles when the user hovers over an interactive element."
  },
  {
    questionNumber: 14,
    questionText: "Which pseudo-class styles an element (like an input or button) when it currently has keyboard or click focus?",
    options: [":active", ":focus", ":target", ":checked"],
    correctOption: 1,
    explanation: ":focus triggers when an element receives keyboard focus or is clicked into."
  },
  {
    questionNumber: 15,
    questionText: "How do you center an element with display: flex along the main (horizontal) axis?",
    options: [
      "align-items: center",
      "justify-content: center",
      "align-content: center",
      "text-align: center"
    ],
    correctOption: 1,
    explanation: "In standard row flexbox, 'justify-content: center' centers items along the main horizontal axis."
  },
  {
    questionNumber: 16,
    questionText: "How do you center flex items along the cross (vertical) axis in a row-direction Flexbox container?",
    options: [
      "justify-content: center",
      "align-items: center",
      "vertical-align: middle",
      "flex-center: both"
    ],
    correctOption: 1,
    explanation: "'align-items: center' aligns flex child items along the cross axis."
  },
  {
    questionNumber: 17,
    questionText: "Which property in Flexbox specifies whether items should stay on a single line or wrap onto multiple lines?",
    options: ["flex-flow", "flex-wrap", "wrap-mode", "flex-line"],
    correctOption: 1,
    explanation: "Setting 'flex-wrap: wrap' allows flex items to wrap onto multiple lines when container space runs out."
  },
  {
    questionNumber: 18,
    questionText: "Which CSS property defines the space/gutters between child items in Flexbox or Grid without using margins?",
    options: ["spacing", "margin-between", "gap", "gutter"],
    correctOption: 2,
    explanation: "The 'gap' property sets the space between rows and columns in flex and grid containers."
  },
  {
    questionNumber: 19,
    questionText: "What does 'position: fixed' do to an element?",
    options: [
      "Positions the element relative to its parent container",
      "Positions the element relative to the browser viewport, keeping it visible in the same spot even during page scrolling",
      "Pins the element to the bottom of the database",
      "Prevents the element from being clicked"
    ],
    correctOption: 1,
    explanation: "'position: fixed' removes the element from normal flow and locks it to fixed viewport coordinates."
  },
  {
    questionNumber: 20,
    questionText: "What is required for an element with 'position: absolute' to position itself relative to a specific parent element?",
    options: [
      "The parent element must have display: flex",
      "The parent element must have its position set to relative, absolute, or fixed (non-static)",
      "The parent must have an ID attribute",
      "The parent must have overflow: hidden"
    ],
    correctOption: 1,
    explanation: "An absolutely positioned element positions itself relative to the nearest ancestor with a non-static position."
  },
  {
    questionNumber: 21,
    questionText: "Which CSS property controls the stacking order of overlapping elements on the Z-axis?",
    options: ["layer-order", "depth", "z-index", "elevation"],
    correctOption: 2,
    explanation: "'z-index' determines which element appears on top when elements overlap (higher number = closer to viewer)."
  },
  {
    questionNumber: 22,
    questionText: "Which CSS unit is relative to the font-size of the root <html> element?",
    options: ["em", "rem", "%", "px"],
    correctOption: 1,
    explanation: "'rem' stands for Root EM and scales relative to the <html> root element's font size."
  },
  {
    questionNumber: 23,
    questionText: "What does the 'em' unit scale relative to?",
    options: [
      "The entire screen width",
      "The font-size of its immediate parent element (or the element itself for margins/padding)",
      "100 physical millimeters",
      "Device screen resolution"
    ],
    correctOption: 1,
    explanation: "'em' is relative to the font-size of the element or its parent, allowing cascading proportional sizing."
  },
  {
    questionNumber: 24,
    questionText: "What do the viewport units '100vw' and '100vh' represent?",
    options: [
      "100 virtual words and 100 virtual headers",
      "100% of the viewport width and 100% of the viewport height",
      "100 vectors wide and 100 vectors high",
      "100 pixels minimum"
    ],
    correctOption: 1,
    explanation: "vw = viewport width (1vw = 1% of viewport width) and vh = viewport height (1vh = 1% of viewport height)."
  },
  {
    questionNumber: 25,
    questionText: "Which CSS property changes the mouse cursor to a pointing hand when hovering over a clickable button or link?",
    options: ["cursor: hand", "cursor: pointer", "mouse: click", "pointer: on"],
    correctOption: 1,
    explanation: "'cursor: pointer' displays the standard hand icon indicating a clickable element."
  },
  {
    questionNumber: 26,
    questionText: "Which CSS property is used to add drop shadows behind card containers or buttons?",
    options: ["drop-shadow", "box-shadow", "shadow-effect", "element-shadow"],
    correctOption: 1,
    explanation: "'box-shadow' accepts offset-x, offset-y, blur-radius, spread-radius, and color (e.g. box-shadow: 0 4px 10px rgba(0,0,0,0.2))."
  },
  {
    questionNumber: 27,
    questionText: "Which property is used to remove the default underline from hyperlinks (<a> tags)?",
    options: ["underline: none", "font-decoration: none", "text-decoration: none", "link-style: none"],
    correctOption: 2,
    explanation: "'text-decoration: none' removes underlines and strike-throughs from text."
  },
  {
    questionNumber: 28,
    questionText: "How do you make text bold in CSS?",
    options: ["font-style: bold", "font-weight: bold", "text-weight: 700", "bold: true"],
    correctOption: 1,
    explanation: "'font-weight: bold' (or numeric values like 600, 700) sets the boldness of font characters."
  },
  {
    questionNumber: 29,
    questionText: "How do you make an image or element completely circular in CSS?",
    options: [
      "border-radius: 50%",
      "shape: circle",
      "border-style: round",
      "clip: circle"
    ],
    correctOption: 0,
    explanation: "Setting 'border-radius: 50%' on an element with equal width and height produces a perfect circle."
  },
  {
    questionNumber: 30,
    questionText: "What does 'opacity: 0.5' do to an element?",
    options: [
      "Shrinks the element size by half",
      "Makes the element 50% semi-transparent",
      "Darkens the color by half",
      "Slows down animation by half"
    ],
    correctOption: 1,
    explanation: "The 'opacity' property defines transparency from 0 (completely invisible) to 1 (fully opaque)."
  },
  {
    questionNumber: 31,
    questionText: "Which CSS rule is used to apply different styles based on screen size (for mobile responsiveness)?",
    options: ["@screen", "@media", "@responsive", "@device"],
    correctOption: 1,
    explanation: "@media queries (e.g. @media (max-width: 768px)) allow styles to change dynamically for tablets and phones."
  },
  {
    questionNumber: 32,
    questionText: "What is the purpose of the CSS declaration 'transition: all 0.3s ease'?",
    options: [
      "Reloads the page every 0.3 seconds",
      "Smoothly animates changes to CSS properties over 0.3 seconds instead of jumping abruptly",
      "Delays page rendering",
      "Transitions users to another URL"
    ],
    correctOption: 1,
    explanation: "Transitions allow property changes in CSS values to occur smoothly over a specified duration."
  },
  {
    questionNumber: 33,
    questionText: "Which CSS transform function rotates an element clockwise?",
    options: ["transform: spin(45deg)", "transform: rotate(45deg)", "transform: turn(45deg)", "transform: angle(45deg)"],
    correctOption: 1,
    explanation: "rotate() turns an element around a fixed point by a given angle (e.g. 45deg or 0.5turn)."
  },
  {
    questionNumber: 34,
    questionText: "Which CSS transform function moves an element horizontally and vertically without disrupting document flow?",
    options: ["transform: move(10px, 20px)", "transform: shift(10px, 20px)", "transform: translate(10px, 20px)", "transform: offset(10px, 20px)"],
    correctOption: 2,
    explanation: "'translate(x, y)' offsets the visual position of an element along X and Y axes."
  },
  {
    questionNumber: 35,
    questionText: "How do you declare and use a CSS Custom Property (Variable)?",
    options: [
      "Declare: $main-color: red; Use: color: $main-color;",
      "Declare: --main-color: red; Use: color: var(--main-color);",
      "Declare: @main-color: red; Use: color: @main-color;",
      "Declare: set(main-color, red); Use: get(main-color);"
    ],
    correctOption: 1,
    explanation: "Native CSS variables are defined with two hyphens (--name: value) and read using var(--name)."
  },
  {
    questionNumber: 36,
    questionText: "What happens when an element has 'overflow: hidden'?",
    options: [
      "The entire element is hidden from view",
      "Any content that exceeds the element's width or height is clipped and kept invisible without showing scrollbars",
      "The browser crashes",
      "Text wraps to the next line"
    ],
    correctOption: 1,
    explanation: "'overflow: hidden' clips any child content that spills outside the boundaries of the container."
  },
  {
    questionNumber: 37,
    questionText: "What does 'overflow: auto' do on a container when content exceeds its bounds?",
    options: [
      "Deletes the extra content",
      "Automatically adds scrollbars only when the content actually overflows",
      "Scales the content down to fit inside",
      "Increases the browser window size"
    ],
    correctOption: 1,
    explanation: "overflow: auto displays scrollbars only when content overflows the box."
  },
  {
    questionNumber: 38,
    questionText: "How do you set a background image to cover the entire container without distorting its aspect ratio?",
    options: [
      "background-size: stretch",
      "background-size: cover",
      "background-size: 100% 100%",
      "background-fit: fill"
    ],
    correctOption: 1,
    explanation: "'background-size: cover' scales the image to ensure the entire container is covered, clipping edges if necessary."
  },
  {
    questionNumber: 39,
    questionText: "Which CSS Grid property creates 3 equal-width columns in a grid container?",
    options: [
      "grid-template-columns: 1fr 1fr 1fr",
      "grid-columns: 3 equal",
      "display-columns: 33.3%",
      "grid-layout: 3-column"
    ],
    correctOption: 0,
    explanation: "'grid-template-columns: 1fr 1fr 1fr' (or repeat(3, 1fr)) creates three fractional unit columns of identical width."
  },
  {
    questionNumber: 40,
    questionText: "What is the difference between inline and block-level elements in CSS?",
    options: [
      "Block elements start on a new line and take full width; inline elements flow inside line text and only take needed width",
      "Inline elements can have custom width and height; block elements cannot",
      "Block elements only exist in HTML4",
      "There is no difference"
    ],
    correctOption: 0,
    explanation: "Block elements (<div>, <p>) take up full width on a new line; inline elements (<span>, <a>) flow within text lines."
  },
  {
    questionNumber: 41,
    questionText: "What does 'display: inline-block' allow that pure 'display: inline' does not?",
    options: [
      "Allows setting custom width, height, and vertical margins/padding while remaining in-line with surrounding text",
      "Allows flex layout inside tables",
      "Forces elements onto new lines",
      "Removes borders completely"
    ],
    correctOption: 0,
    explanation: "'inline-block' flows with text like an inline element but respects width, height, and vertical margins."
  },
  {
    questionNumber: 42,
    questionText: "Which pseudo-element is used to insert cosmetic content right before an element's content?",
    options: ["::first", "::before", "::prefix", "::start"],
    correctOption: 1,
    explanation: "::before inserts a generated pseudo-element as the first child of the selected element."
  },
  {
    questionNumber: 43,
    questionText: "What CSS property must be present for '::before' or '::after' pseudo-elements to render anything on screen?",
    options: ["display: block", "content: ''", "position: absolute", "visibility: visible"],
    correctOption: 1,
    explanation: "The 'content' property (even if empty, content: '') is required for pseudo-elements to be created."
  },
  {
    questionNumber: 44,
    questionText: "What does the ':first-child' pseudo-class select?",
    options: [
      "The first element in the entire body",
      "An element that is the very first child of its parent container",
      "All children with class='first'",
      "The first word in a paragraph"
    ],
    correctOption: 1,
    explanation: ":first-child targets an element that is the first child of its parent."
  },
  {
    questionNumber: 45,
    questionText: "Which CSS property specifies the space between characters in a line of text?",
    options: ["word-spacing", "letter-spacing", "character-gap", "kerning"],
    correctOption: 1,
    explanation: "'letter-spacing' adjusts the spacing between character glyphs."
  },
  {
    questionNumber: 46,
    questionText: "Which CSS property controls the vertical spacing between lines of text in a paragraph?",
    options: ["line-height", "text-spacing", "line-gap", "paragraph-spacing"],
    correctOption: 0,
    explanation: "'line-height' sets the distance between lines of text (e.g. line-height: 1.5)."
  },
  {
    questionNumber: 47,
    questionText: "What is the priority order of CSS rules if there is a conflict (from highest to lowest priority)?",
    options: [
      "External stylesheet > Internal <style> > Inline style attribute",
      "Inline style attribute > ID selector > Class selector > Tag (element) selector",
      "Tag selector > Class selector > ID selector",
      "Alphabetical order of selector names"
    ],
    correctOption: 1,
    explanation: "Inline styles have the highest specificity, followed by ID selectors, then classes/pseudo-classes, and lastly element tags."
  },
  {
    questionNumber: 48,
    questionText: "What does 'text-transform: uppercase' do?",
    options: [
      "Increases the font size by 20%",
      "Converts all text characters to capital letters without modifying the underlying HTML content",
      "Makes text bold",
      "Underlines text with double lines"
    ],
    correctOption: 1,
    explanation: "'text-transform: uppercase' renders text in all capital letters visually."
  },
  {
    questionNumber: 49,
    questionText: "How do you horizontally center a block-level container with a fixed width inside its parent?",
    options: [
      "margin: 0 auto;",
      "align: center;",
      "padding: 0 auto;",
      "float: center;"
    ],
    correctOption: 0,
    explanation: "Setting 'margin: 0 auto' (with a defined width or max-width) splits remaining horizontal margin equally, centering the block."
  },
  {
    questionNumber: 50,
    questionText: "What does '!important' do when appended to a CSS property declaration?",
    options: [
      "Makes the CSS rule mandatory, overriding normal cascade and specificity rules",
      "Marks the property for deletion by the linter",
      "Speeds up browser rendering",
      "Generates an alert popup"
    ],
    correctOption: 0,
    explanation: "!important forces the declaration to take precedence over standard selectors regardless of their specificity."
  }
];
