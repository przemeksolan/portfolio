// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'How to Create and Use Bash Scripts',
		slug: 'bash',
		html: `
			<p>Bash scripting is an extremely useful and powerful part of system administration and development. It might seem extremely scary the first time you do it, but hopefully this guide will help ease the fear.</p>
<p>Bash is a Unix shell, which is a command line interface (CLI) for interacting with an operating system (OS). <strong>Any command that you can run from the command line can be used in a bash script.</strong> Scripts are used to run a series of commands.</p>
<p>Bash is available by default on Linux and macOS operating systems.</p>
<p>This is not meant to be an extensive guide to bash scripting, but just a straightforward guide to getting started with making your first script, and learning some basic bash syntax.</p>
			`
	},

	{
		title: 'Getting Started with Vue - An Overview and Walkthrough Tutorial',
		slug: 'getting-started-with-vue',
		html: `
			<p>We're in a golden era of JavaScript libraries and frameworks. More and more companies are building out full, dynamic web apps in addition to - or in lieu of - traditional desktop applications. This means things are constantly changing and frameworks are going in and out of vogue, but the core concepts of what we're trying to accomplish remain similar.</p>
<p>Previously, I wrote a <a href="/getting-started-with-react">Getting Started with React</a> guide that helped out a lot of beginner and intermediate developers. <a href="https://github.com/vuejs/vue">Vue.js</a> is going toe-to-toe with React for popularity among JavaScript developers, so I'd like to offer the same straightforward and concise introduction for those who'd like to learn Vue as well. Let's get started!</p>
<h4 id="prerequisites"><a href="#prerequisites" aria-label="prerequisites permalink" class="anchor"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prerequisites</h4>
<ul>
<li>Knowledge of <a href="https://internetingishard.com/">HTML &amp; CSS</a></li>
<li>Knowledge of basic <a href="/javascript-day-one/">JavaScript</a></li>
<li>Familiarity of <a href="/es6-syntax-and-feature-overview/">ES6+ features and syntax</a></li>
<li><a href="/how-to-install-and-use-node-js-and-npm-mac-and-windows/">Node.js and npm</a> (or yarn) installed globally</li>
<li>Familiarity with <a href="https://code.tutsplus.com/tutorials/code-your-first-api-with-nodejs-and-express-understanding-rest-apis--cms-31697">REST APIs</a> would be helpful, but we'll go over it.</li>
</ul>
<h4 id="goals"><a href="#goals" aria-label="goals permalink" class="anchor"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Goals</h4>
<p>We're going to create a small application with Vue. The app will be a simple employee database and we'll learn:</p>
<ul>
<li>How to <strong>set up</strong> Vue</li>
<li>The <strong>anatomy</strong> of a Vue file</li>
<li>How to work with <strong>data, methods, conditional statements, and events</strong> in Vue</li>
<li>How to <strong>create, update, view, and delete</strong> users (employees) from the system</li>
<li>How to <strong>make API calls</strong> for each of the above actions</li>
<li>How to use <strong>tables, forms</strong>, and form <strong>validation</strong></li>
<li>How to host a Vue build on GitHub pages</li>
</ul>
<p>I've created a live demo and put the source up on GitHub.</p>
<ul>
		`
	},

	{
		title: 'Getting Started with React - An Overview and Walkthrough Tutorial',
		slug: 'getting-started-with-react',
		html: `
			<p>I've been hearing about React since I first started learning JavaScript, but I'll admit I took one look at it and it scared me. I saw what looked like a bunch of HTML mixed with JavaScript and thought, <em>isn't this what we've been trying to avoid? What's the big deal with React?</em></p>
<p>Instead, I focused on just learning vanilla JavaScript and working with jQuery in a professional setting. After a few frustrated, failed attempts to get started with React, I finally started to get it, and I began to see why I might want to use React instead of vanilla JS or jQuery.</p>
<p>I tried to condense everything I've learned into a nice introduction to share with you, so here it is.</p>
<h4 id="prerequisites"><a href="#prerequisites" aria-label="prerequisites permalink" class="anchor"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prerequisites</h4>
<p>There are a few things you should know in advance before you start playing around with React. If you've never used JavaScript or the DOM at all before, for example, I would get more familiar with those before trying to tackle React.</p>
<p>Here are what I consider to be React prerequisites.</p>
<ul>
<li>Basic familiarity with <a href="https://internetingishard.com/">HTML &amp; CSS</a>.</li>
<li>Basic knowledge of <a href="https://www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript">JavaScript</a> and programming.</li>
<li>Basic understanding of <a href="/introduction-to-the-dom/">the DOM</a>.</li>
<li>Familiarity with <a href="/es6-syntax-and-feature-overview/">ES6 syntax and features</a>.</li>
<li><a href="/how-to-install-and-use-node-js-and-npm-mac-and-windows/">Node.js and npm</a> installed globally.</li>
</ul>
<h4 id="goals"><a href="#goals" aria-label="goals permalink" class="anchor"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Goals</h4>
<ul>
<li>Learn about essential React concepts and related terms, such as Babel, Webpack, JSX, components, props, state, and lifecycle.</li>
<li>Build a very simple React app that demonstrates the above concepts.</li>
</ul>
<p>Here's the source and a live demo of the end result.</p>
<ul>
<li><a href="https://github.com/taniarascia/react-tutorial">View Source on GitHub</a></li>
<li><a href="https://taniarascia.github.io/react-tutorial/">View Demo</a></li>
</ul>
			`
	},

	{
		title: 'ES6 Syntax and Feature Overview',
		slug: 'es6-syntax-and-feature-overview',
		html: `
			<p>ECMAScript 2015, also known as ES6, introduced many changes to JavaScript. Here is an overview of some of the most common features and syntactical differences, with comparisons to ES5 where applicable.</p>
<ul>
<li><a href="https://github.com/taniarascia/es6">View on GitHub</a></li>
</ul>
<blockquote>
<p><strong>Note:</strong> A commonly accepted practice is to use <code class="language-text">const</code> except in cases of loops and reassignment. However, in this resource I'll be using <code class="language-text">let</code> in place of <code class="language-text">var</code> for all ES6 examples.</p>
</blockquote>
<h2 id="legend"><a href="#legend" aria-label="legend permalink" class="anchor"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Legend</h2>
<p>I'm not a fan of <code class="language-text">foo</code> <code class="language-text">bar</code> <code class="language-text">baz</code>. Here is a key of most identifier names used throughout this reference.</p>
<ul>
<li>Variable: <code class="language-text">x</code></li>
<li>Object: <code class="language-text">obj</code></li>
<li>Array: <code class="language-text">arr</code></li>
<li>Function: <code class="language-text">func</code></li>
<li>Parameter, method: <code class="language-text">a</code>, <code class="language-text">b</code>, <code class="language-text">c</code></li>
<li>String: <code class="language-text">str</code></li>
</ul>
<h2 id="table-of-contents"><a href="#table-of-contents" aria-label="table of contents permalink" class="anchor"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Table of contents</h2>
<ul>
<li>Variable declaration</li>
<li>Constant declaration</li>
<li>Arrow function syntax</li>
<li>Template literals</li>
<li>Implicit returns</li>
<li>Key/property shorthand</li>
<li>Method definition shorthand</li>
<li>Destructuring (object matching)</li>
<li>Array iteration (looping)</li>
<li>Default parameters</li>
<li>Spread syntax</li>
<li>Classes/constructor functions</li>
<li>Inheritance</li>
<li>Modules - export/import</li>
<li>Promises/callbacks</li>
</ul>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
