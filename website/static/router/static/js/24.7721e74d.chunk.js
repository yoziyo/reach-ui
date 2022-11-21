(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"./src/markdown/api/navigate.md":function(n,a,s){"use strict";s.r(a),s.d(a,"title",function(){return o});var t=s("./node_modules/react/index.js"),p=s.n(t);const o="navigate(to, { state={}, replace=false })";a.default=function(){return p.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:'<h1>navigate(to, { state={}, replace=false })</h1>\n<p>If you need to navigate programmatically (like after a form submits), import <code>navigate</code>.</p>\n<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> navigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reach-ui-fork/router"</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Invoices</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>NewInvoiceForm\n      onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">async</span> event <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> newInvoice <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createInvoice</span><span class="token punctuation">(</span>\n          event<span class="token punctuation">.</span>target\n        <span class="token punctuation">)</span>\n        <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`/invoices/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>newInvoice<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n</code></pre>\n<p>Or better, yet, use <code>props.navigate</code> passed to your route components and then you can navigate to relative paths:</p>\n<pre><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">Invoices</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> navigate <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NewInvoiceForm</span>\n      <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">async</span> event <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> newInvoice <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createInvoice</span><span class="token punctuation">(</span>\n          event<span class="token punctuation">.</span>target\n        <span class="token punctuation">)</span>\n        <span class="token comment">// can navigate to relative paths</span>\n        <span class="token function">navigate</span><span class="token punctuation">(</span>newInvoice<span class="token punctuation">.</span>id<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n</code></pre>\n<p>Navigate returns a promise so you can await it. It resolves after React is completely finished rendering the next screen, even with React Suspense.</p>\n<pre><code class="language-jsx"><span class="token keyword">class</span> <span class="token class-name">Invoices</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    creatingNewInvoice<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LoadingBar</span>\n          <span class="token attr-name">animate</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>creatingNewInvoice<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>NewInvoiceForm\n          onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">async</span> event <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n              creatingNewInvoice<span class="token punctuation">:</span> <span class="token boolean">true</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n            <span class="token keyword">const</span> newInvoice <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createInvoice</span><span class="token punctuation">(</span>\n              event<span class="token punctuation">.</span>target\n            <span class="token punctuation">)</span>\n            <span class="token keyword">await</span> <span class="token function">navigate</span><span class="token punctuation">(</span>\n              <span class="token template-string"><span class="token string">`/invoice/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>newInvoice<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n            <span class="token punctuation">)</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n              creatingNewInvoice<span class="token punctuation">:</span> <span class="token boolean">false</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InvoiceList</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2>to</h2>\n<p>The path to navigate to.</p>\n<pre><code class="language-jsx"><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">"/some/where"</span><span class="token punctuation">)</span>\n</code></pre>\n<p>If using <code>props.navigate</code> in a Route Component, this can be a relative path.</p>\n<pre><code class="language-jsx">props<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">"../"</span><span class="token punctuation">)</span>\n</code></pre>\n<p>You can pass a number to go to a previously visited route.</p>\n<pre><code class="language-jsx"><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>\n</code></pre>\n<h2>option - state</h2>\n<p>An object to store on location state. This is useful for state that doesn’t need to be in the URL but is associated with a route transition. Think of it like “post” data on a server.</p>\n<pre><code class="language-jsx"><span class="token keyword">const</span> <span class="token function-variable function">NewTodo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>TodoForm\n    onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">async</span> todo <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createNewTodo</span><span class="token punctuation">(</span>todo<span class="token punctuation">)</span>\n      <span class="token comment">// put some state on the location</span>\n      <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">"/todos"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> state<span class="token punctuation">:</span> <span class="token punctuation">{</span> newId<span class="token punctuation">:</span> id <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Todos</span> <span class="token operator">=</span> props <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>todo <span class="token operator">=></span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n          background<span class="token punctuation">:</span>\n            <span class="token comment">// read the location state</span>\n            todo<span class="token punctuation">.</span>id <span class="token operator">===</span> props<span class="token punctuation">.</span>location<span class="token punctuation">.</span>state<span class="token punctuation">.</span>newId\n              <span class="token operator">?</span> <span class="token string">"yellow"</span>\n              <span class="token punctuation">:</span> <span class="token string">""</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token operator">...</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n</code></pre>\n<h2>option - replace</h2>\n<p>Normally a call to navigate will push a new entry into the history stack so the user can click the back button to get back to the page. If you pass <code>replace: true</code> to <code>navigate</code> then the current entry in the history stack will be replaced with the new one.</p>\n<p>An example is when the user clicks a “purchase” button but needs to log in first, after they log in, you can replace the login screen with the checkout screen you wanted them to be at. Then when they click the back button they won’t see the login page again.</p>\n<pre><code class="language-jsx"><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">"/some/where"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> replace<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n'}})}}}]);