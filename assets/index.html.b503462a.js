import{d as n}from"./app.5176ced8.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1><blockquote><p>\u53C2\u8003\u8D44\u6599\uFF1A</p><p>\u7EA2\u5B9D\u4E66</p><p>\u6DF1\u5165\u7406\u89E3 ES6</p></blockquote><h2 id="\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> \u57FA\u672C\u6982\u5FF5</h2><ul><li>\u6570\u636E\u7C7B\u578B <ul><li>\u57FA\u672C\u6570\u636E\u7C7B\u578B: undefined null number string boolean</li><li>\u590D\u6742\u6570\u636E\u7C7B\u578B: object</li></ul></li><li>\u64CD\u4F5C\u7B26: \u7C7B\u578B\u8F6C\u6362\u7684\u57FA\u672C\u987A\u5E8F\uFF1Anumber string boolean object.valueOf() object.toString() <ul><li>\u4E00\u5143\u64CD\u4F5C\u7B26: a++ a-- ++a --a +a(\u76F8\u5F53\u4E8E\u7528 Number \u8FDB\u884C\u7C7B\u578B\u8F6C\u6362) -a</li><li>\u4F4D\u64CD\u4F5C\u7B26: ~a(\u6C42\u53CD\u7801\uFF0C\u7B49\u4E8E-a-1), a &amp; b, a | b, a ^ b, &lt;&lt; a, &gt;&gt;a, &gt;&gt;&gt;a</li><li>\u4E58\u6027\u64CD\u4F5C\u7B26: *, /, %</li><li>\u52A0\u6027\u64CD\u4F5C\u7B26: +, -</li><li>\u5173\u7CFB\u64CD\u4F5C\u7B26: &gt;, &gt;=, &lt;, &lt;=</li><li>\u76F8\u7B49\u64CD\u4F5C\u7B26: ==, != (\u5148\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\u518D\u6BD4\u8F83), ===, !== (\u76F4\u63A5\u6BD4\u8F83)</li><li>\u6761\u4EF6\u64CD\u4F5C\u7B26\uFF1Aa ? b : c</li><li>\u8D4B\u503C\u64CD\u4F5C\u7B26\uFF1A= += *= ...</li><li>\u9017\u53F7\u64CD\u4F5C\u7B26\uFF1A,</li><li>instanceof: \u53EA\u8981\u662F\u539F\u578B\u94FE\u4E2D\u51FA\u73B0\u8FC7\u7684\u6784\u9020\u51FD\u6570, \u5C31\u4F1A\u8FD4\u56DE true</li></ul></li><li>\u6D41\u63A7\u5236\u8BED\u53E5 <ul><li>if else</li><li>switch</li><li>while</li><li>do while</li><li>for</li><li>for in</li><li>label break continue</li><li>with: \u6539\u53D8\u4F5C\u7528\u57DF\u81F3\u4E00\u4E2A\u7279\u5B9A\u7684\u5BF9\u8C61\u4E2D</li></ul></li><li>\u51FD\u6570 <ul><li>arguments</li><li>\u4E0D\u80FD\u91CD\u8F7D\uFF0C\u56E0\u4E3A\u6CA1\u6709\u51FD\u6570\u7B7E\u540D\uFF0C\u4F46 TypeScript \u4E2D\u5B9E\u73B0\u4E86\uFF01</li></ul></li><li>\u6267\u884C\u73AF\u5883\u548C\u4F5C\u7528\u57DF\u94FE <ul><li>\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709\u81EA\u5DF1\u7684\u6267\u884C\u73AF\u5883\uFF0C\u6BCF\u4E2A\u6267\u884C\u73AF\u5883\u90FD\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684\u53D8\u91CF\u5BF9\u8C61\uFF0C\u5F53\u4E00\u4E2A\u51FD\u6570\u6267\u884C\u65F6\uFF0C\u8BE5\u51FD\u6570\u7684\u6267\u884C\u73AF\u5883\u4F1A\u88AB\u63A8\u5165\u4E00\u4E2A\u73AF\u5883\u6808\u4E2D\uFF0C\u67D0\u4E2A\u53D8\u91CF\u9700\u8981\u4F7F\u7528\u65F6\uFF0C\u4F1A\u4ECE\u6808\u9876\u7684\u53D8\u91CF\u5BF9\u8C61\u5F00\u59CB\u641C\u7D22\uFF0C\u627E\u4E0D\u5230\u5C31\u7EE7\u7EED\u5F80\u4E0B\u627E\uFF0C\u76F4\u5230\u5168\u5C40\u73AF\u5883\uFF0C\u8FD9\u6761\u641C\u7D22\u7684\u8DEF\u5F84\u5C31\u88AB\u79F0\u4E3A\u4F5C\u7528\u57DF\u94FE\u3002</li><li>catch \u548C with \u53EF\u4EE5\u5EF6\u957F\u4F5C\u7528\u57DF\u94FE\uFF0C\u4F46\u6CE8\u610F\uFF0C\u5B83\u4EEC\u53EA\u662F\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u53D8\u91CF\u5BF9\u8C61\uFF08\u4F7F\u7528\u4E00\u4E2A\u7ED9\u5B9A\u7684\u5BF9\u8C61\uFF09\u7528\u4E8E\u641C\u7D22\u3002</li><li>\u5783\u573E\u56DE\u6536\uFF1A\u6709\u4E24\u79CD\u7B97\u6CD5\uFF0C\u5206\u522B\u4E3A\u6807\u8BB0\u6E05\u9664\u548C\u5F15\u7528\u8BA1\u6570\uFF0C\u6807\u8BB0\u6E05\u9664\u5C31\u662F\u5728\u53D8\u91CF\u8131\u79BB\u4F5C\u7528\u57DF\u540E\u88AB\u6807\u8BB0\uFF0C\u7136\u540E\u7B49\u5F85\u56DE\u6536\uFF0C\u5F15\u7528\u8BA1\u6570\u5C31\u662F\u88AB\u8D4B\u503C\u7684\u65F6\u5019\u5F15\u7528\u52A0\u4E00\uFF0C\u5047\u5982\u4E3A\u96F6\uFF0C\u5C31\u4F1A\u88AB\u6E05\u9664\u3002\u540E\u8005\u5DF2\u7ECF\u57FA\u672C\u4E0D\u88AB\u4F7F\u7528\uFF0CIE9 \u4ECD\u7136\u4F1A\u5B58\u5728\u5FAA\u73AF\u5F15\u7528\u7684\u95EE\u9898\u3002</li></ul></li></ul><h2 id="\u5F15\u7528\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a> \u5F15\u7528\u7C7B\u578B</h2><h3 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h3><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> Array</h3><h4 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h4><ol><li>\u68C0\u6D4B\u7C7B\u578B\uFF1Ainstanceof \u5047\u5982\u6709\u591A\u4E2A\u5168\u5C40\u73AF\u5883\u5C31\u65E0\u6CD5\u51C6\u786E\u5224\u65AD\uFF0CArray.isArray() \u597D\u7528</li><li>\u8F6C\u6362\u65B9\u6CD5\uFF1AvalueOf, toString, toLocaleString</li><li>\u6808\u548C\u961F\u5217\uFF1Apush, pop, unshift, shift</li><li>\u91CD\u6392\u5E8F\uFF1Areverse, sort \u4E0D\u7ED9\u6BD4\u8F83\u51FD\u6570\u4F1A\u5C06\u6BD4\u8F83\u7684\u503C\u8F6C\u6362\u6210 string \u518D\u6BD4\u8F83</li><li>\u64CD\u4F5C\uFF1Aconcat, slice, splice</li><li>\u4F4D\u7F6E\uFF1AindexOf, lastIndexOf</li><li>\u8FED\u4EE3\uFF1AforEach, map, filter, every, some</li><li>\u5F52\u5E76\uFF1Areduce, reduceRight</li></ol><h3 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> Date</h3><h4 id="\u65B9\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5-1" aria-hidden="true">#</a> \u65B9\u6CD5</h4><ol><li>new Date() \u5185\u90E8\u4F1A\u6839\u636E\u53C2\u6570\u7684\u4E0D\u540C\uFF0C\u8C03\u7528 Date.parse \u548C Date.UTC \u5C06\u53C2\u6570\u8F6C\u6362\u4E3A\u6BEB\u79D2\u6570\uFF0C\u4E0D\u4F20\u53C2\u6570\u7684\u8BDD\u5C31\u50CF\u8C03\u7528\u4E86 Date.now</li><li>\u8F6C\u6362\uFF1AtoDateString ...</li><li>\u64CD\u4F5C\uFF1AgetTime, setTime ...</li></ol><h3 id="regexp" tabindex="-1"><a class="header-anchor" href="#regexp" aria-hidden="true">#</a> RegExp</h3><h4 id="\u65B9\u6CD5-2" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5-2" aria-hidden="true">#</a> \u65B9\u6CD5</h4><ol><li>\u5B9E\u4F8B\u65B9\u6CD5\uFF1Aexec \u548C test\uFF0C\u5176\u4E2D exec \u5728\u5168\u5C40\u6A21\u5F0F\u4E0B\u6BCF\u6267\u884C\u4E00\u6B21\uFF0C\u5C31\u4F1A\u5339\u914D\u4E00\u6B21\uFF0C\u76F4\u5230\u5B57\u7B26\u4E32\u672B\u5C3E</li><li>\u9759\u6001\u65B9\u6CD5\uFF1Ainput, leftContext, rightContext, lastMatch, lastParen, multiline, \u4EE5\u53CA\u7528\u4E8E\u5B58\u50A8\u6355\u83B7\u7684$1 - $9</li></ol><h3 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h3><h4 id="\u65B9\u6CD5-3" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5-3" aria-hidden="true">#</a> \u65B9\u6CD5</h4><ol><li>call\uFF0Capply\uFF0Cbind: \u6269\u5145\u4F5C\u7528\u57DF</li><li>caller: \u8C03\u7528\u8BE5\u51FD\u6570\u7684\u5916\u90E8\u51FD\u6570\uFF0C\u5047\u5982\u662F\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u8C03\u7528\uFF0C\u5219\u4E3A null</li><li>toString, toLocaleString, valueOf: \u5B57\u7B26\u4E32\u5F62\u5F0F\u8FD4\u56DE\u51FD\u6570\u7684\u5B9A\u4E49</li></ol><h4 id="\u5185\u90E8\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5185\u90E8\u53D8\u91CF" aria-hidden="true">#</a> \u5185\u90E8\u53D8\u91CF</h4><ol><li>arguments\uFF1Acallee \u8BE5\u51FD\u6570\u5F15\u7528\u7684\u6307\u9488\uFF0C\u53EF\u4EE5\u7528\u6765\u4E0E\u51FD\u6570\u540D\u89E3\u8026</li><li>this\uFF1A\u53EF\u7531 call,apply,bind \u6307\u5B9A</li></ol><h3 id="\u57FA\u672C\u5305\u88C5\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u5305\u88C5\u7C7B\u578B" aria-hidden="true">#</a> \u57FA\u672C\u5305\u88C5\u7C7B\u578B</h3><ul><li>new Object()\u4F1A\u6839\u636E\u4F20\u5165\u53C2\u6570\u7684\u7C7B\u578B\u8C03\u7528\u4E0D\u540C\u7684\u5305\u88C5\u7C7B\u578B</li><li>\u8BBF\u95EE\u57FA\u672C\u7C7B\u578B\u503C\u7684\u65F6\u5019\uFF0C\u4F1A\u8C03\u7528\u5305\u88C5\u51FD\u6570\u751F\u6210\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u64CD\u4F5C\u5B8C\u6210\u540E\u8BE5\u5BF9\u8C61\u4F1A\u88AB\u7ACB\u5373\u9500\u6BC1\u3002</li></ul><ol><li>Boolean</li><li>Number</li><li>String: \u7528\u4E8E\u8F6C\u6362\u7684\u65B9\u6CD5\u975E\u5E38\u591A\uFF0C\u4EE4\u4EBA\u53D1\u6307\uFF01</li></ol><h3 id="global-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#global-\u5BF9\u8C61" aria-hidden="true">#</a> Global \u5BF9\u8C61</h3><ul><li>\u5185\u7F6E\u7684\u9876\u7EA7\u5BF9\u8C61\uFF0C\u6D4F\u89C8\u5668\u901A\u8FC7 window \u5BF9\u8C61\u653E\u7F6E\u6240\u6709\u7684 global \u5BF9\u8C61\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u5305\u62EC\u4E00\u4E9B\u7279\u6B8A\u503C\u5982 undefined,null,NaN,Infinity,\u4EE5\u53CA\u5F88\u591A\u6784\u9020\u51FD\u6570</li></ul><h3 id="math-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#math-\u5BF9\u8C61" aria-hidden="true">#</a> Math \u5BF9\u8C61</h3><h2 id="\u9762\u5411\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u9762\u5411\u5BF9\u8C61" aria-hidden="true">#</a> \u9762\u5411\u5BF9\u8C61</h2><h3 id="\u7406\u89E3\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u7406\u89E3\u5BF9\u8C61" aria-hidden="true">#</a> \u7406\u89E3\u5BF9\u8C61</h3><ol><li>\u5C5E\u6027\u7C7B\u578B\u3002\u5206\u4E3A\u6570\u636E\u5C5E\u6027\u548C\u8BBF\u95EE\u5668\u5C5E\u6027\uFF0C\u6570\u636E\u5C5E\u6027\u7684\u7279\u6027\u4E3A configurable\uFF0Cenumerable\uFF0Cwritable\uFF0Cvalue\uFF0C\u8BBF\u95EE\u5668\u5C5E\u6027\u7684\u7279\u6027\u4E3A configurable\uFF0Cenumerable\uFF0Cget\uFF0Cset\u3002</li><li>\u5B9A\u4E49\u5C5E\u6027\u3002\u53EF\u4EE5\u4F7F\u7528\u5B57\u9762\u91CF\u5B9A\u4E49\u6570\u636E\u5C5E\u6027\uFF08\u8BBF\u95EE\u5668\u5C5E\u6027\u4E0D\u884C\uFF09\uFF0C\u90A3\u4E48\u7279\u6027\u7684\u503C\u90FD\u4E3A true\uFF1B\u53EF\u4EE5\u7528 Object.defineProperty \u548C Object.defineProperties \u5B9A\u4E49\uFF0C\u6CA1\u6709\u660E\u786E\u5199\u7684\u5C5E\u6027\u7279\u6027\u90FD\u4E3A false \u6216\u8005 undefined\u3002</li><li>\u8BFB\u53D6\u5C5E\u6027\u3002\u4F7F\u7528 Object.getOwnPropertyDescriptor \u83B7\u53D6\u5C5E\u6027\u7684\u7279\u6027\u3002</li></ol><h3 id="\u521B\u5EFA\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5BF9\u8C61" aria-hidden="true">#</a> \u521B\u5EFA\u5BF9\u8C61</h3><ol><li>\u5DE5\u5382\u6A21\u5F0F</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  o<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  o<span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  o<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="2"><li>\u6784\u9020\u51FD\u6570\u6A21\u5F0F</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3"><li>\u539F\u578B\u6A21\u5F0F</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;bao&#39;</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u4E00\u4E2A\u51FD\u6570\u88AB\u521B\u5EFA\u540E,\u4F1A\u81EA\u52A8\u6DFB\u52A0\u4E0A prototype \u5C5E\u6027,\u6307\u5411\u4E00\u4E2A\u539F\u578B\u5BF9\u8C61,\u800C prototype \u4E5F\u9ED8\u8BA4\u62E5\u6709\u4E00\u4E2A constructor \u5C5E\u6027,\u6307\u5411\u8FD9\u4E2A\u51FD\u6570.</li><li>\u5224\u65AD\u539F\u578B\u7684\u65B9\u6CD5: Object.prototype.isPrototypeOf, Object.getPrototypeOf</li><li>\u5B9E\u4F8B\u5C5E\u6027\u548C\u539F\u578B\u5C5E\u6027: in \u53EF\u4EE5\u5224\u65AD\u4E24\u79CD\u5C5E\u6027, for in \u53EF\u4EE5\u679A\u4E3E\u53EF\u679A\u4E3E\u7684\u4E24\u79CD\u5C5E\u6027, Object.keys()\u83B7\u53D6\u53EF\u679A\u4E3E\u7684\u5B9E\u4F8B\u5C5E\u6027, Object.getOwnPropertyNames()\u83B7\u53D6\u6240\u6709\u5B9E\u4F8B\u5C5E\u6027</li><li>\u7F3A\u70B9: \u5047\u5982\u67D0\u4E2A\u5C5E\u6027\u662F\u5F15\u7528\u7C7B\u578B, \u90A3\u4E48\u4E00\u65E6\u88AB\u4FEE\u6539\u4F1A\u5F71\u54CD\u6240\u6709\u5B9E\u4F8B\u5BF9\u8C61</li></ul><ol start="4"><li>\u7EC4\u5408\u6784\u9020\u51FD\u6570\u6A21\u5F0F\u548C\u539F\u578B\u6A21\u5F0F</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u6700\u5E38\u7528\u7684\u6A21\u5F0F</li></ul><ol start="5"><li>\u52A8\u6001\u539F\u578B\u6A21\u5F0F</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span><span class="token punctuation">.</span>say <span class="token operator">==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u4E0A\u4E00\u79CD\u6A21\u5F0F\u7684\u6539\u8FDB, \u53EF\u80FD\u662F\u4E3A\u4E86\u770B\u8D77\u6765\u66F4\u805A\u5408\u4E00\u70B9</li></ul><ol start="6"><li>\u5BC4\u751F\u6784\u9020\u51FD\u6570\u6A21\u5F0F</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  o<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  o<span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token keyword">return</span> o<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u770B\u8D77\u6765\u50CF\u6784\u9020\u51FD\u6570\u6A21\u5F0F, \u597D\u5904\u662F\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E9B\u7EE7\u627F\u7684\u529F\u80FD</li><li>\u7F3A\u70B9\u662F\u65E0\u6CD5\u4F7F\u7528 instanceof \u5224\u65AD\u5BF9\u8C61\u7C7B\u578B</li></ul><ol start="7"><li>\u7A33\u59A5\u6784\u9020\u51FD\u6570\u6A21\u5F0F</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> _name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">const</span> _age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  o<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> o<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u597D\u5904\u662F\u5916\u754C\u65E0\u6CD5\u8BBF\u95EE\u79C1\u6709\u53D8\u91CF, \u5F88\u5B89\u5168</li></ul><h3 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h3><p>\u4E00\u822C OO \u8BED\u8A00\u90FD\u4F1A\u652F\u6301\u4E24\u79CD\u7EE7\u627F, \u5206\u522B\u662F\u63A5\u53E3\u7EE7\u627F\u548C\u5B9E\u73B0\u7EE7\u627F, \u63A5\u53E3\u7EE7\u627F\u7EE7\u627F\u65B9\u6CD5\u7B7E\u540D, \u7C7B\u4F3C\u4E8E TS \u4E2D\u7EE7\u627F\u4E00\u4E2A\u62BD\u8C61\u7C7B, \u5B9E\u73B0\u7EE7\u627F\u7EE7\u627F\u5B9E\u9645\u7684\u65B9\u6CD5, \u5C31\u662F\u666E\u901A\u7684\u7EE7\u627F.</p><ol><li>\u539F\u578B\u94FE</li></ol><ul><li>\u5B9A\u4E49: \u539F\u578B\u94FE\u5C31\u662F\u539F\u578B\u548C\u5B9E\u4F8B\u7684\u94FE\u6761, \u5B50\u7C7B\u578B\u5B9E\u4F8B\u6307\u5411\u7684\u539F\u578B, \u540C\u65F6\u53C8\u662F\u7236\u7C7B\u578B\u7684\u4E00\u4E2A\u5B9E\u4F8B, \u7136\u540E\u5C42\u5C42\u9012\u8FDB, \u76F4\u5230 Object \u7684\u539F\u578B\u5BF9\u8C61</li><li>\u7F3A\u70B9: \u539F\u578B\u5305\u542B\u5F15\u7528\u7C7B\u578B\u503C\u7684\u65F6\u5019, \u4F1A\u9020\u6210\u6C61\u67D3; \u65E0\u6CD5\u4F20\u9012\u53C2\u6570</li></ul><ol start="2"><li>\u501F\u7528\u6784\u9020\u51FD\u6570(\u7ECF\u5178\u7EE7\u627F)</li></ol><ul><li>\u4F18\u70B9: \u53EF\u4EE5\u4F20\u9012\u53C2\u6570</li><li>\u7F3A\u70B9: \u51FD\u6570\u4E0D\u80FD\u590D\u7528</li></ul><ol start="3"><li>\u7EC4\u5408\u7EE7\u627F</li></ol><ul><li>\u5B9A\u4E49: \u4F7F\u7528\u6784\u9020\u51FD\u6570\u7EE7\u627F\u5C5E\u6027, \u4F7F\u7528\u539F\u578B\u94FE\u7EE7\u627F\u65B9\u6CD5, \u6700\u5E38\u7528</li><li>\u4F18\u70B9: \u51FD\u6570\u53EF\u4EE5\u590D\u7528</li><li>\u7F3A\u70B9: \u4E24\u6B21\u8C03\u7528\u7236\u7C7B\u578B\u6784\u9020\u51FD\u6570</li></ul><ol start="4"><li>\u539F\u578B\u5F0F\u7EE7\u627F</li></ol><ul><li>ES5 \u540E\u53EF\u4EE5\u4F7F\u7528 Object.create()\u6765\u5B9E\u73B0</li></ul><ol start="5"><li>\u5BC4\u751F\u5F0F\u7EE7\u627F</li></ol><ul><li>\u91C7\u7528\u5DE5\u5382\u6A21\u5F0F, \u5728\u539F\u578B\u5F0F\u7EE7\u627F\u7684\u57FA\u7840\u4E0A\u589E\u52A0\u4E00\u4E9B\u65B9\u6CD5\u7684\u5B9A\u4E49</li></ul><ol start="6"><li>\u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F</li></ol><ul><li>\u5C06\u7EC4\u5408\u7EE7\u627F\u4E2D\u65B9\u6CD5\u7684\u7EE7\u627F, \u7531\u539F\u578B\u94FE\u7EE7\u627F\u6362\u6210\u5BC4\u751F\u5F0F\u7EE7\u627F, \u662F\u6700\u7406\u60F3\u7684\u7EE7\u627F\u65B9\u5F0F</li><li>\u4F18\u70B9: \u62DC\u6258\u4E86\u7EC4\u5408\u7EE7\u627F\u8C03\u7528\u4E24\u6B21\u7236\u7C7B\u578B\u6784\u9020\u51FD\u6570\u7684\u7F3A\u70B9</li></ul><h2 id="\u51FD\u6570\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u51FD\u6570\u8868\u8FBE\u5F0F</h2><ul><li>\u5B9A\u4E49\u51FD\u6570\u7684\u4E24\u79CD\u65B9\u5F0F: \u51FD\u6570\u58F0\u660E, \u51FD\u6570\u8868\u8FBE\u5F0F. \u51FD\u6570\u58F0\u660E\u5B58\u5728\u51FD\u6570\u58F0\u660E\u63D0\u5347\u7684\u7279\u5F81.</li></ul><h3 id="\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52" aria-hidden="true">#</a> \u9012\u5F52</h3><h3 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h3><ul><li>\u5B9A\u4E49: \u95ED\u5305\u662F\u6307\u6709\u6743\u8BBF\u95EE\u53E6\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u53D8\u91CF\u7684\u51FD\u6570. \u5E38\u7528\u7684\u521B\u5EFA\u65B9\u6CD5\u662F\u5728\u4E00\u4E2A\u51FD\u6570\u5185\u90E8\u521B\u5EFA\u53E6\u4E00\u4E2A\u51FD\u6570.</li></ul><h3 id="\u6A21\u4EFF\u5757\u7EA7\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u6A21\u4EFF\u5757\u7EA7\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u6A21\u4EFF\u5757\u7EA7\u4F5C\u7528\u57DF</h3><h3 id="\u79C1\u6709\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u79C1\u6709\u53D8\u91CF" aria-hidden="true">#</a> \u79C1\u6709\u53D8\u91CF</h3><ol><li><p>\u9759\u6001\u79C1\u6709\u53D8\u91CF</p></li><li><p>\u6A21\u5757\u6A21\u5F0F</p></li><li><p>\u589E\u5F3A\u7684\u6A21\u5757\u6A21\u5F0F</p></li></ol><h2 id="window-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#window-\u5BF9\u8C61" aria-hidden="true">#</a> window \u5BF9\u8C61</h2><ul><li>window \u662F\u6D4F\u89C8\u5668\u7684\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61, \u5E76\u4E14\u5177\u6709\u53CC\u91CD\u89D2\u8272, \u5B83\u65E2\u662F\u901A\u8FC7 js \u8BBF\u95EE\u6D4F\u89C8\u5668\u7684\u63A5\u53E3, \u4E5F\u662F ECMAScript \u89C4\u8303\u4E2D Global \u5168\u5C40\u5BF9\u8C61\u7684\u5B9E\u73B0</li></ul><h3 id="\u5168\u5C40\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u5168\u5C40\u4F5C\u7528\u57DF</h3><ul><li>\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u867D\u7136\u53EF\u4EE5\u901A\u8FC7 window.xxx \u6765\u8BBF\u95EE, \u4F46\u65E0\u6CD5\u88AB delete \u64CD\u4F5C\u7B26\u5220\u9664, \u56E0\u4E3A\u8FD9\u4E2A\u53D8\u91CF\u4F5C\u4E3A window \u7684\u5C5E\u6027, \u5176\u5185\u90E8\u5C5E\u6027 configurable \u4E3A false</li></ul><h3 id="\u5B9A\u65F6\u5668-\u95F4\u6B47\u8C03\u7528\u548C\u8D85\u65F6\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u5668-\u95F4\u6B47\u8C03\u7528\u548C\u8D85\u65F6\u8C03\u7528" aria-hidden="true">#</a> \u5B9A\u65F6\u5668(\u95F4\u6B47\u8C03\u7528\u548C\u8D85\u65F6\u8C03\u7528)</h3><ul><li><p>setInterval \u548C setTimeout</p></li><li><p>\u63A8\u8350\u4F7F\u7528 setTimeout \u6765\u6A21\u62DF setInterval</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mySetInterval</span><span class="token punctuation">(</span><span class="token parameter">handler<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> _state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">timer</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">_handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _state<span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>_handler<span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  _state<span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>_handler<span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> _state<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">mySetInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u7528\u4E8E\u6E05\u9664\u5B9A\u65F6\u5668</span>
interval<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="\u7CFB\u7EDF\u5BF9\u8BDD\u6846" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u5BF9\u8BDD\u6846" aria-hidden="true">#</a> \u7CFB\u7EDF\u5BF9\u8BDD\u6846</h3><ul><li>alert, confirm, prompt</li></ul><h3 id="location\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#location\u5BF9\u8C61" aria-hidden="true">#</a> location\u5BF9\u8C61</h3><h3 id="navigator\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#navigator\u5BF9\u8C61" aria-hidden="true">#</a> navigator\u5BF9\u8C61</h3><h2 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h2><p>\u603B\u4F53\u7684\u7EE7\u627F\u5173\u7CFB\u662FNode -&gt; HTMLElement -&gt; HTMLInputElement, Node -&gt; Document -&gt; HTMLDocument</p><h2 id="\u5BA2\u6237\u7AEF\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u5B58\u50A8" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF\u5B58\u50A8</h2><p>cookie\u548C\u57DF\u540D\u662F\u7ED1\u5B9A\u7684(\u5B50\u57DF\u540D\u6709\u6548), \u4E0D\u540C\u6D4F\u89C8\u5668\u4E0B\u5355\u4E2A\u57DF\u540D\u7684\u6700\u5927cookie\u4E2A\u6570\u4E0D\u540C, \u6BCF\u4E2A\u6765\u6E90\u7684cookie\u957F\u5EA6\u9650\u5236\u4E3A4KB(\u5E94\u8BE5\u662F\u5305\u542B\u6240\u6709\u5C5E\u6027\u7684)</p><p>localstorage\u548C\u57DF\u540D, \u534F\u8BAE, \u7AEF\u53E3\u7ED1\u5B9A(\u5B50\u57DF\u540D\u65E0\u6548), \u6BCF\u4E2A\u6765\u6E90\u7684\u5927\u5C0F\u9650\u5236\u4E3A5MB(\u5176\u5B9E\u5404\u4E2A\u6D4F\u89C8\u5668\u90FD\u4E0D\u540C)</p><p>indexedDB\u53EA\u80FD\u7531\u540C\u6E90\u9875\u9762\u64CD\u4F5C(\u76F8\u540C\u534F\u8BAE, \u57DF\u540D, \u7AEF\u53E3), \u5927\u5C0F\u9650\u5236\u4E0D\u5B9A</p><h2 id="\u6700\u4F73\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u6700\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a> \u6700\u4F73\u5B9E\u8DF5</h2><p>\u53D8\u91CF\u521D\u59CB\u5316\u4E3A\u4E00\u4E2A\u7279\u5B9A\u7684\u6570\u636E\u7C7B\u578B</p><p>\u53D8\u91CF\u547D\u540D\u4E3A\u540D\u8BCD, \u51FD\u6570\u4EE5\u52A8\u8BCD\u5F00\u5934, \u8FD4\u56DE\u5E03\u5C14\u503C\u7684\u51FD\u6570\u4EE5is\u5F00\u5934</p><p>\u5224\u65AD\u6570\u636E\u7C7B\u578B, \u57FA\u672C\u6570\u636E\u7C7B\u578B\u7528typeof, \u590D\u6742\u6570\u636E\u7C7B\u578B\u7528instanceof, \u4E0D\u8981\u76F4\u63A5\u6BD4\u8F83</p><p>\u591A\u4F7F\u7528\u539F\u751F\u65B9\u6CD5, switch, \u4F4D\u8FD0\u7B97, \u901F\u5EA6\u6BD4\u8F83\u5FEB</p><h3 id="dom\u64CD\u4F5C\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#dom\u64CD\u4F5C\u4F18\u5316" aria-hidden="true">#</a> DOM\u64CD\u4F5C\u4F18\u5316</h3><p>\u6700\u5C0F\u5316\u73B0\u573A\u66F4\u65B0, \u4F7F\u7528document.createDocumentFragment()\u521B\u5EFA\u6587\u6863\u7247\u6BB5, \u6216\u8005\u4F7F\u7528innerHTML\u6765\u66F4\u65B0DOM</p><p>\u4F7F\u7528\u4E8B\u4EF6\u4EE3\u7406</p><p>\u51CF\u5C11\u5BF9\u6587\u6863\u7684\u67E5\u8BE2, \u5C24\u5176\u662F\u5BF9HTMLCollection\u7684\u8BBF\u95EE</p><h3 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h3><p>webpack</p><h2 id="\u539F\u578B\u94FE" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u94FE" aria-hidden="true">#</a> \u539F\u578B\u94FE</h2><ol><li>https://juejin.cn/post/6901494216074100750</li></ol><h2 id="\u9519\u8BEF\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u76D1\u63A7" aria-hidden="true">#</a> \u9519\u8BEF\u76D1\u63A7</h2><ol><li>\u5168\u5C40\u9519\u8BEF\u76D1\u63A7</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,104);function t(p,l){return e}var i=a(s,[["render",t]]);export{i as default};