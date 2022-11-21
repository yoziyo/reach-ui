(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./src/markdown/api/LocationProvider.md":function(n,s,a){"use strict";a.r(s),a.d(s,"title",function(){return p});var t=a("./node_modules/react/index.js"),o=a.n(t);const p="LocationProvider";s.default=function(){return o.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:'<h1>LocationProvider</h1>\n<p>Sets up a listener to location changes. The primary API’s that need the location automatically set this up for you. This is mostly useful for testing, and if we ever decide to get into React Native, it’ll be useful there too.</p>\n<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  createMemorySource<span class="token punctuation">,</span>\n  createHistory<span class="token punctuation">,</span>\n  LocationProvider\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reach-ui-fork/router"</span>\n\n<span class="token keyword">let</span> history <span class="token operator">=</span> <span class="token function">createHistory</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>\n\n<span class="token comment">// for some types of tests you want a memory source</span>\n<span class="token keyword">let</span> source <span class="token operator">=</span> <span class="token function">createMemorySource</span><span class="token punctuation">(</span><span class="token string">"/starting/url"</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> history <span class="token operator">=</span> <span class="token function">createHistory</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>\n\n<span class="token keyword">let</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LocationProvider</span> <span class="token attr-name">history</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>history<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      Alright<span class="token punctuation">,</span> we\'ve established some location\n      context\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LocationProvider</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n</code></pre>\n<h2>history: object (optional)</h2>\n<p>The history to listen to. Defaults to the browser history or a memory history if a DOM is not found.</p>\n<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> createHistory<span class="token punctuation">,</span> LocationProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@reach-ui-fork/router\'</span>\n<span class="token keyword">let</span> history <span class="token operator">=</span> <span class="token function">createHistory</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LocationProvider</span> <span class="token attr-name">history</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>history<span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>\n</code></pre>\n<h2>children: element</h2>\n<p>You can pass elements as children to wrap an app in location context.</p>\n<pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LocationProvider</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>This is fine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LocationProvider</span><span class="token punctuation">></span></span>\n</code></pre>\n<h2>children: func</h2>\n<p>If you pass a child render function <code>LocationProvider</code> will pass you the context it creates: <code>location</code> and <code>navigate</code>. If you want access to these values somewhere arbitrary in your app, use <a href="Location">Location</a> instead.</p>\n<pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LocationProvider</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">{</span>context <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>location<span class="token punctuation">)</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>navigate<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LocationProvider</span><span class="token punctuation">></span></span>\n</code></pre>\n'}})}}}]);