(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./src/markdown/api/redirectTo.md":function(n,s,a){"use strict";a.r(s),a.d(s,"title",function(){return p});var t=a("./node_modules/react/index.js"),e=a.n(t);const p="redirectTo(uri)";s.default=function(){return e.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:'<h1>redirectTo(uri)</h1>\n<p>React 16+ only. For React &lt; 16 use <a href="navigate"><code>navigate</code></a> or <a href="Redirect">Redirect</a>.</p>\n<p>Imperatively redirects to a new location by throwing a redirect request.</p>\n<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> redirectTo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reach-ui-fork/router"</span>\n\n<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">fetchUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>user <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>optedIntoNewUI<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token string">"/the/new/digs"</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2>uri: string</h2>\n<p>The uri to redirect to. Must be absolute, it does not support relative paths.</p>\n<pre><code class="language-jsx"><span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token string">"/somewhere/else"</span><span class="token punctuation">)</span>\n</code></pre>\n'}})}}}]);