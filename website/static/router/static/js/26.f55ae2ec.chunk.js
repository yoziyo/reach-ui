(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./src/markdown/api/createMemorySource.md":function(n,s,a){"use strict";a.r(s),a.d(s,"title",function(){return o});var e=a("./node_modules/react/index.js"),t=a.n(e);const o="createMemorySource(initialPath)";s.default=function(){return t.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:'<h1>createMemorySource(initialPath)</h1>\n<p>Creates a source for <a href="createHistory"><code>createHistory</code></a> that manages a history stack in memory. Mostly for testing.</p>\n<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  createMemorySource<span class="token punctuation">,</span>\n  createHistory\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reach-ui-fork/router"</span>\n\n<span class="token comment">// for some types of tests you want a memory source</span>\n<span class="token keyword">let</span> source <span class="token operator">=</span> <span class="token function">createMemorySource</span><span class="token punctuation">(</span><span class="token string">"/starting/url"</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> history <span class="token operator">=</span> <span class="token function">createHistory</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>\n</code></pre>\n<h2>initialPath: string</h2>\n<p>The initial path of the history.</p>\n'}})}}}]);