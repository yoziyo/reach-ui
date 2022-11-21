(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./src/markdown/api/isRedirect.md":function(n,s,a){"use strict";a.r(s),a.d(s,"title",function(){return p});var t=a("./node_modules/react/index.js"),e=a.n(t);const p="isRedirect(error)";s.default=function(){return e.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:'<h1>isRedirect(error)</h1>\n<p>Returns true if the error is a redirect request. Useful for server rendering and rethrowing errors in <code>componentDidCatch</code>.</p>\n<h2>componentDidCatch</h2>\n<p>If you’re using <code>componentDidCatch</code> in your app you <em>must</em> check if the error is a redirect, and if it is, rethrow it, otherwise the app will not redirect. Even better, you should check if the error is the kind you want to catch and rethrow if not.</p>\n<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> isRedirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@yoziyo/router"</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Decent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">componentDidCatch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isRedirect</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> error\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token comment">// do whatever you were going to do</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>Maybe one day we’ll get pattern matching and a two-pass try/catch but those are just dreams in Sebastian Markbåge’s head.</p>\n<h2>Server Rendering</h2>\n<p>If your app redirects while server rendering it will throw an error. Use <code>isRedirect</code> to decide how to handle the error. If it’s a redirect, then redirect on your server, otherwise do what you normally do with errors.</p>\n<pre><code class="language-jsx"><span class="token keyword">let</span> markup\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n  markup <span class="token operator">=</span> <span class="token function">renderToString</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ServerLocation</span> <span class="token attr-name">url</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>req<span class="token punctuation">.</span>url<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ServerLocation</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isRedirect</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>uri<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ..</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>Please see the <a href="../server-rendering">Server Rendering</a> doc for the full server rendering story.</p>\n'}})}}}]);