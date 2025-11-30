export const quizQuestions = [
  // HTML - Beginner
  {
    question: "What does HTML stand for?",
    answer: "B",
    options: [
      "A - Hyper Tool Multi Language",
      "B - Hyper Text Markup Language",
      "C - High Tech Modern Link",
      "D - Home Tool Management Links"
    ],
    category: "html"
  },
  {
    question: "Which tag is used for the largest heading?",
    answer: "D",
    options: [
      "A - <heading>",
      "B - <h6>",
      "C - <head>",
      "D - <h1>"
    ],
    category: "html"
  },
  {
    question: "How do you create a hyperlink in HTML?",
    answer: "A",
    options: [
      "A - <a href='url'>Link</a>",
      "B - <link url='url'>Link</link>",
      "C - <hyperlink>Link</hyperlink>",
      "D - <url>Link</url>"
    ],
    category: "html"
  },
  {
    question: "What is the purpose of the <img> tag?",
    answer: "C",
    options: [
      "A - Add a video",
      "B - Add a link",
      "C - Add an image",
      "D - Add a heading"
    ],
    category: "html"
  },
  {
    question: "How do you add a comment in HTML?",
    answer: "B",
    options: [
      "A - <!-- Comment -->",
      "B - <!-- This is a comment -->",
      "C - // Comment",
      "D - # Comment"
    ],
    category: "html"
  },

  // HTML - Intermediate
  {
    question: "What is the difference between <div> and <span>?",
    answer: "A",
    options: [
      "A - <div> is block-level, <span> is inline",
      "B - <div> is inline, <span> is block-level",
      "C - Both are inline elements",
      "D - Both are block elements"
    ],
    category: "html"
  },
  {
    question: "Explain the difference between <ol> and <ul> lists.",
    answer: "C",
    options: [
      "A - <ol> is unordered, <ul> is ordered",
      "B - <ol> is for images, <ul> is for text",
      "C - <ol> is ordered, <ul> is unordered",
      "D - No difference"
    ],
    category: "html"
  },
  {
    question: "How do you make a table in HTML? Name its essential tags.",
    answer: "D",
    options: [
      "A - <table>, <div>, <row>",
      "B - <table>, <tr>, <td>, <list>",
      "C - <table>, <th>, <li>",
      "D - <table>, <tr>, <td>, <th>"
    ],
    category: "html"
  },
  {
    question: "What is the purpose of the <form> tag and its common attributes?",
    answer: "B",
    options: [
      "A - To create tables and lists",
      "B - To collect user input; action, method",
      "C - To add images and links",
      "D - To style elements"
    ],
    category: "html"
  },
  {
    question: "Explain the difference between <section>, <article>, and <aside>.",
    answer: "C",
    options: [
      "A - All are the same",
      "B - Only <section> is semantic",
      "C - <section> groups content, <article> is independent, <aside> is sidebar",
      "D - <aside> is main content"
    ],
    category: "html"
  },

  // HTML - Advanced
  {
    question: "How does the <meta> tag affect SEO and page behavior?",
    answer: "D",
    options: [
      "A - Only changes font",
      "B - Only changes colors",
      "C - Only adds links",
      "D - Provides metadata like description, keywords, charset"
    ],
    category: "html"
  },
  {
    question: "Explain the difference between block-level and inline elements.",
    answer: "A",
    options: [
      "A - Block-level starts on new line; inline does not",
      "B - Inline starts on new line; block-level does not",
      "C - Both behave the same",
      "D - Only inline can contain other elements"
    ],
    category: "html"
  },
  {
    question: "What are semantic HTML elements and why are they important?",
    answer: "B",
    options: [
      "A - Elements without meaning",
      "B - Elements that describe content meaning; improve accessibility and SEO",
      "C - Elements that are invisible",
      "D - Only <div> and <span>"
    ],
    category: "html"
  },
  {
    question: "How do you embed multimedia (audio/video) in HTML and control its playback?",
    answer: "C",
    options: [
      "A - <audio src='file.mp3'/>",
      "B - <video src='file.mp4'/>",
      "C - <audio>/<video> with controls attribute",
      "D - <media src='file.mp4'/>"
    ],
    category: "html"
  },

  // CSS - Beginner
  {
    question: "What does CSS stand for?",
    answer: "B",
    options: [
      "A - Creative Style Sheets",
      "B - Cascading Style Sheets",
      "C - Computer Style Sheets",
      "D - Custom Style Syntax"
    ],
    category: "css"
  },
  {
    question: "How do you change the background color of an element?",
    answer: "C",
    options: [
      "A - color: red;",
      "B - bg-color: red;",
      "C - background-color: red;",
      "D - background: image-red;"
    ],
    category: "css"
  },
  {
    question: "What is the difference between id and class selectors?",
    answer: "A",
    options: [
      "A - #id is unique, .class can be shared",
      "B - .class is unique, #id can be shared",
      "C - No difference",
      "D - Only id can style text"
    ],
    category: "css"
  },
  {
    question: "How do you make text bold or italic using CSS?",
    answer: "B",
    options: [
      "A - font-style: bold; font-style: italic;",
      "B - font-weight: bold; font-style: italic;",
      "C - text-bold: true; text-italic: true;",
      "D - style:bold; style:italic;"
    ],
    category: "css"
  },
  {
    question: "What is the difference between inline, internal, and external CSS?",
    answer: "D",
    options: [
      "A - No difference",
      "B - Only inline can style multiple pages",
      "C - Only external is in HTML",
      "D - Inline inside element, internal in <style>, external in .css file"
    ],
    category: "css"
  },

  // CSS - Intermediate
  {
    question: "Explain the difference between relative, absolute, fixed, and sticky positioning.",
    answer: "B",
    options: [
      "A - All positions are the same",
      "B - Relative is relative to itself, absolute to parent, fixed to viewport, sticky scrolls then sticks",
      "C - Only fixed moves",
      "D - Sticky is default"
    ],
    category: "css"
  },
  {
    question: "What is the difference between em, rem, %, and px units?",
    answer: "C",
    options: [
      "A - No difference",
      "B - Only px is relative",
      "C - px fixed, em relative to parent, rem relative to root, % relative to container",
      "D - % is fixed"
    ],
    category: "css"
  },
  {
    question: "How do you center an element horizontally and vertically using CSS?",
    answer: "D",
    options: [
      "A - text-align: center;",
      "B - margin: auto;",
      "C - display:inline;",
      "D - Use flex or grid with justify-content and align-items center"
    ],
    category: "css"
  },
  {
    question: "Explain the difference between inline-block and block.",
    answer: "B",
    options: [
      "A - Inline-block behaves like block",
      "B - Block takes full width, inline-block respects content width",
      "C - Both same",
      "D - Only inline-block allows text"
    ],
    category: "css"
  },
  {
    question: "How do you create a CSS grid layout with 3 columns?",
    answer: "A",
    options: [
      "A - display: grid; grid-template-columns: repeat(3, 1fr);",
      "B - display: flex; columns: 3;",
      "C - display: block; grid: 3;",
      "D - display: table; columns: 3;"
    ],
    category: "css"
  },

  // CSS - Advanced
  {
    question: "Explain the difference between CSS transitions and animations.",
    answer: "C",
    options: [
      "A - No difference",
      "B - Animations are only hover",
      "C - Transitions occur on property change, animations can have keyframes",
      "D - Transitions are infinite"
    ],
    category: "css"
  },
  {
    question: "What is the difference between flex-grow, flex-shrink, and flex-basis in Flexbox?",
    answer: "A",
    options: [
      "A - grow expands, shrink reduces, basis sets initial size",
      "B - shrink expands, grow reduces",
      "C - Only flex-basis matters",
      "D - All are percentages"
    ],
    category: "css"
  },
  {
    question: "How does z-index work and when would you use it?",
    answer: "B",
    options: [
      "A - Changes font size",
      "B - Controls stack order of positioned elements",
      "C - Adds spacing",
      "D - Changes color"
    ],
    category: "css"
  },
  {
    question: "Explain pseudo-classes and pseudo-elements and give examples.",
    answer: "C",
    options: [
      "A - Only for JavaScript",
      "B - Only for HTML structure",
      "C - Pseudo-classes (:hover) style states, pseudo-elements (::before) style parts of element",
      "D - Only for images"
    ],
    category: "css"
  },

  // JS - Beginner
  {
    question: "What does JS stand for and what is it used for?",
    answer: "C",
    options: [
      "A - Java Styles; styling pages",
      "B - Just Script; math only",
      "C - JavaScript; dynamic web content",
      "D - Java Syntax; compiling"
    ],
    category: "js"
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answer: "B",
    options: [
      "A - int x;",
      "B - var x;",
      "C - variable x;",
      "D - let x = variable;"
    ],
    category: "js"
  },
  {
    question: "What are the different data types in JavaScript?",
    answer: "A",
    options: [
      "A - Number, String, Boolean, Object, Undefined, Null",
      "B - int, string, bool",
      "C - char, byte, float",
      "D - only string"
    ],
    category: "js"
  },
  {
    question: "How do you write a function in JS?",
    answer: "C",
    options: [
      "A - function = myFunc() {}",
      "B - func myFunc() {}",
      "C - function myFunc() {}",
      "D - def myFunc() {}"
    ],
    category: "js"
  },
  {
    question: "How do you add a comment in JS?",
    answer: "B",
    options: [
      "A - <!-- Comment -->",
      "B - // Comment",
      "C - # Comment",
      "D - /* Comment */"
    ],
    category: "js"
  },

  // JS - Intermediate
  {
    question: "What is the difference between == and ===?",
    answer: "C",
    options: [
      "A - No difference",
      "B - === converts types",
      "C - == compares value only, === compares value and type",
      "D - == compares type only"
    ],
    category: "js"
  },
  {
    question: "Explain how for and while loops work.",
    answer: "A",
    options: [
      "A - for loops have initialization, condition, increment; while loops run while condition true",
      "B - Both same",
      "C - while loops run once",
      "D - for loops run only if variable = 0"
    ],
    category: "js"
  },
  {
    question: "What is an array and how do you access its elements?",
    answer: "B",
    options: [
      "A - Object with keys",
      "B - List of items; access by index like arr[0]",
      "C - Only numbers",
      "D - Only strings"
    ],
    category: "js"
  },
  {
    question: "How do you handle events like onclick in JS?",
    answer: "D",
    options: [
      "A - Using CSS",
      "B - Using HTML only",
      "C - Using PHP",
      "D - Using addEventListener or inline attributes"
    ],
    category: "js"
  },
  {
    question: "What is the difference between var, let, and const?",
    answer: "C",
    options: [
      "A - No difference",
      "B - var block scoped, let global, const mutable",
      "C - var function scoped, let block scoped, const immutable",
      "D - const can be reassigned"
    ],
    category: "js"
  },

  // JS - Advanced
  {
    question: "Explain the difference between synchronous and asynchronous code.",
    answer: "A",
    options: [
      "A - Sync runs line by line, async runs in background and callback later",
      "B - Both same",
      "C - Async blocks code",
      "D - Sync uses promises only"
    ],
    category: "js"
  },
  {
    question: "What are closures in JavaScript? Give an example.",
    answer: "B",
    options: [
      "A - Function that deletes variables",
      "B - Function with access to outer scope variables even after outer function executed",
      "C - Only objects",
      "D - Only arrays"
    ],
    category: "js"
  },
  {
    question: "Explain the this keyword and how it behaves in different contexts.",
    answer: "C",
    options: [
      "A - Always refers to global object",
      "B - Always refers to the function itself",
      "C - Depends on how function is called (object, global, class)",
      "D - Only works in classes"
    ],
    category: "js"
  },
  {
    question: "What is the difference between call(), apply(), and bind()?",
    answer: "A",
    options: [
      "A - call() invokes immediately, apply() invokes with array, bind() returns new function",
      "B - All same",
      "C - bind() invokes immediately",
      "D - apply() returns new function"
    ],
    category: "js"
  }
];
