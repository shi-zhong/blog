import{_ as n,o as s,c as a,a as e}from"./app-be7ae715.js";const t={},i=e(`<ol><li>动态规划 + 递归</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">longestChildrenList</span><span class="token punctuation">(</span>list<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token comment">// todo;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>贪心算法 + 二分查找</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 1. 目标数组 target，辅助数组 h，p</span>
<span class="token comment">// 2. 遍历target</span>
	<span class="token comment">// 当target[i] &gt; h[end], h.push(target[i]);</span>
	<span class="token comment">// 当target[i] &lt; h[end], 二分查找第一个大于target[i]的目标, 替换</span>
<span class="token comment">// 3. 每当替换或添加 h 时，将此次替换位置的前一项在他target中的索引加入p</span>
	<span class="token comment">// p 中实际上和target数组一一对应，保存了当前位置元素的前一个元素的索引</span>
	<span class="token comment">// 隐式建立了链表</span>
<span class="token comment">// 4. 贪心算法下得到的最长序列h有可能错误，需要使用路径p回溯。</span>
<span class="token comment">// 5. 重建数组，根据h最后一位全量复原</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[i];function l(o,p){return s(),a("div",null,c)}const r=n(t,[["render",l],["__file","最长递增子序列.html.vue"]]);export{r as default};
