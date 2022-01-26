import{d as a}from"./app.5176ced8.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=a(`<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1><p>CSS3 \u5206\u6210\u4E86\u591A\u4E2A\u6A21\u5757, \u5404\u6A21\u5757\u53EF\u4EE5\u72EC\u7ACB\u63A8\u8FDB, \u6240\u4EE5\u5B66\u4E60 CSS \u4E5F\u5E94\u8BE5\u662F\u6309\u7167\u6A21\u5757\u53BB\u5B66.</p><h2 id="\u57FA\u672C\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u77E5\u8BC6" aria-hidden="true">#</a> \u57FA\u672C\u77E5\u8BC6</h2><ul><li><p>\u6837\u5F0F\u7684\u51E0\u79CD\u5F15\u5165\u65B9\u5F0F: link \u6807\u7B7E\u5F15\u5165\u5916\u90E8\u6837\u5F0F\u6587\u4EF6, style \u6807\u7B7E\u4F5C\u4E3A\u5D4C\u5165\u6837\u5F0F\u8868, @import \u6307\u4EE4\u53EF\u4EE5\u5728 link \u548C style \u4E2D\u4F7F\u7528\u6765\u5F15\u5165\u5916\u90E8\u6837\u5F0F\u8868(\u8BE5\u6307\u4EE4\u5FC5\u987B\u653E\u5728\u5F00\u5934\u624D\u80FD\u751F\u6548), \u5143\u7D20\u7684\u884C\u5185\u6837\u5F0F</p></li><li><p>\u5A92\u4F53\u67E5\u8BE2: @media (max-width: 960px) {}, \u53EF\u4EE5\u7528and\u8FDE\u63A5\u591A\u4E2A\u67E5\u8BE2</p></li><li><p>\u7279\u6027\u67E5\u8BE2: @supports (color: black) {}, \u7528\u4E8E\u5B9E\u73B0\u57FA\u672C\u7684\u6E10\u8FD1\u589E\u5F3A\u529F\u80FD, \u53EF\u4EE5\u4F7F\u7528not, and, or\u903B\u8F91\u8FD0\u7B97\u7B26\u8FDE\u63A5\u591A\u4E2A\u67E5\u8BE2</p></li></ul><h2 id="\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C40" aria-hidden="true">#</a> \u5E03\u5C40</h2><p>\u9996\u5148 css \u4E16\u754C\u4E2D\uFF0C\u5B58\u5728 5 \u79CD\u5E03\u5C40\u65B9\u5F0F\uFF0C\u5206\u522B\u4E3A\u6587\u6863\u6D41\uFF0C\u5B9A\u4F4D\uFF0Cfloat\uFF0Cflex\uFF0Cgrid\uFF0C\u4E0B\u9762\u5C31\u6765\u9010\u4E2A\u603B\u7ED3\u3002</p><h3 id="\u6587\u6863\u6D41" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u6D41" aria-hidden="true">#</a> \u6587\u6863\u6D41</h3><h3 id="\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4F4D" aria-hidden="true">#</a> \u5B9A\u4F4D</h3><h3 id="float" tabindex="-1"><a class="header-anchor" href="#float" aria-hidden="true">#</a> float</h3><h3 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h3><p>\u9996\u5148\uFF0Cflex \u5E03\u5C40\u7684\u5173\u952E\u70B9\u5728\u4E24\u6761\u8F74\u4E0A\uFF0C\u5206\u522B\u4E3A\u4E3B\u8F74\u548C\u4EA4\u53C9\u8F74\uFF0C\u7531\u6B64\u4EA7\u751F\u7684\u5C5E\u6027\u6709 6 \u4E2A\uFF0C\u5206\u522B\u4E3A\uFF1A \u7236\u7EA7\uFF1A</p><ul><li>justify-content\uFF0C\u63A7\u5236\u5B50\u7EA7\u5143\u7D20\u5728\u4E3B\u8F74\u4E0A\u7684\u6392\u5E03</li><li>align-items\uFF0C\u63A7\u5236\u5B50\u7EA7\u5143\u7D20\u5728\u4EA4\u53C9\u8F74\u4E0A\u7684\u6392\u5E03</li><li>flex-direction\uFF0C\u63A7\u5236 flex \u7684\u65B9\u5411</li><li>flex-wrap: \u63A7\u5236\u662F\u5426\u6362\u884C</li><li>flex-flow: \u6DF7\u5408\u5C5E\u6027\uFF0Cflex-direction \u548C flex-wrap</li><li>align-content: \u6362\u884C\u540E\uFF0C\u591A\u6761\u4E3B\u8F74\u5728\u4EA4\u53C9\u8F74\u4E0A\u7684\u8868\u73B0</li></ul><p>\u5B50\u7EA7\uFF1A</p><ul><li>align-self: \u63A7\u5236\u81EA\u5DF1\u5728\u4EA4\u53C9\u8F74\u4E0A\u7684\u8868\u73B0</li><li>flex-basis: \u5143\u7D20\u7684\u5BBD\u5EA6</li><li>flex-grow: \u5728\u4E3B\u8F74\u4E0A\u586B\u5145\u7684\u901F\u5EA6</li><li>flex-shrink\uFF1A\u5728\u4E3B\u8F74\u4E0A\u538B\u7F29\u7684\u901F\u5EA6</li><li>flex\uFF1A\u6DF7\u5408\u5C5E\u6027\uFF0Cflex-basis\u3001flex-grow\u3001flex-shrink</li><li>order: \u6539\u53D8\u5143\u7D20\u7684\u987A\u5E8F</li></ul><blockquote><p>\u53C2\u8003\u8D44\u6599\uFF1A</p><p>[https://juejin.im/post/58e3a5a0a0bb9f0069fc16bb](\u4E00\u52B3\u6C38\u9038\u7684\u641E\u5B9A flex \u5E03\u5C40)</p></blockquote><h3 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> grid</h3><h2 id="\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u8DF5" aria-hidden="true">#</a> \u5B9E\u8DF5</h2><ol><li>\u4F7F\u7528\u5DE5\u5177\u7C7B\u6765\u5B9A\u4E49\u5143\u7D20\u7684\u6837\u5F0F\uFF0C\u800C\u4E0D\u662F\u7ED9\u5143\u7D20\u4E00\u4E2A\u8BED\u4E49\u5316\u7684 class \u540D\uFF0C\u8FD9\u6837\u505A\u6709\u5229\u4E8E\u63D0\u9AD8\u4EE3\u7801\u590D\u7528\u7387\uFF0C\u4E5F\u53EF\u4EE5\u514D\u9664\u6389\u4E00\u4E9B\u8D77\u540D\u7684\u70E6\u607C\u3002</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>--
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
++
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>w-2 h-4 blue-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,19);function t(l,i){return e}var c=n(s,[["render",t]]);export{c as default};
