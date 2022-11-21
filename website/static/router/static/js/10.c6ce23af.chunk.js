(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/markdown/pages/typescript.md":function(n,s,a){"use strict";a.r(s),a.d(s,"title",function(){return o});var t=a("./node_modules/react/index.js"),p=a.n(t);const o="TypeScript";s.default=function(){return p.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:'<h1>TypeScript</h1>\n<p>Reach Router may be used with <a href="https://www.typescriptlang.org/">TypeScript</a>.</p>\n<h2>Install Typings</h2>\n<pre><code class="language-sh"><span class="token function">npm</span> <span class="token function">install</span> @types/reach__router --save-dev\n<span class="token comment"># or</span>\nyarn add @types/reach__router --dev\n</code></pre>\n<h2>Rendering</h2>\n<p>To set props like <code>path</code> and <code>default</code> on routes, use the <code>RouteComponentProps</code> interface.</p>\n<pre><code class="language-tsx"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">"react"</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-dom"</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Router<span class="token punctuation">,</span> RouteComponentProps<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@yoziyo/router"</span>\n\n<span class="token keyword">let</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">:</span> RouteComponentProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token keyword">let</span> <span class="token function-variable function">Dash</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">:</span> RouteComponentProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Dash<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Router</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Home</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dash</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dashboard<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Router</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n</code></pre>\n<h2>Parse Data From the URL</h2>\n<p>To access data parsed from the URL, create a new interface that extends <code>RouteComponentProps</code>, and add each of the URL’s dynamic segments as a new prop. These props should be optional and typed as <code>string</code>.</p>\n<pre><code class="language-tsx"><span class="token comment">// at url "/invoice/23"</span>\n\n<span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Router</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Home</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Invoice</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>invoice/:invoiceId<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Router</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">InvoiceProps</span> <span class="token keyword">extends</span> <span class="token class-name">RouteComponentProps</span>\n<span class="token punctuation">{</span>\n\tinvoiceId<span class="token operator">?</span><span class="token punctuation">:</span> string<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Invoice</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">:</span> InvoiceProps<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Invoice <span class="token punctuation">{</span>props<span class="token punctuation">.</span>invoiceId<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n</code></pre>\n'}})}}}]);