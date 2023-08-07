import{_ as d,o as p,c as r,d as n,p as h,f as k,b as a,r as l,e as s,w as e,a as c}from"./app-fdfbac5b.js";const g={},_=o=>(h("data-v-4a56d2c8"),o=o(),k(),o),b={class:"vvue"},f=_(()=>a("br",null,null,-1));function w(o,u){return p(),r("div",b,[f,n(" vue ")])}const x=d(g,[["render",w],["__scopeId","data-v-4a56d2c8"],["__file","Home.vue"]]),y=c(`<h3 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> 容器</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>  ::: tip :::
</code></pre></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>  ::: warning :::
</code></pre></div></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>  ::: danger :::
</code></pre></div></div><details class="custom-container details"><summary>细节</summary><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>  ::: details :::
</code></pre></div></details><h3 id="代码块高亮" tabindex="-1"><a class="header-anchor" href="#代码块高亮" aria-hidden="true">#</a> 代码块高亮</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// ts: no-line-numbers 取消数字</span>
<span class="token comment">// ts{3,8-10}</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;你好， VuePress&#39;</span><span class="token punctuation">,</span>
    
    theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        logo<span class="token operator">:</span> <span class="token string">&#39;https://vuejs.org/images/logo.png&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法" aria-hidden="true">#</a> 模板语法</h3><p><code>:no-v-pre</code> 指令挂在代码块的文件格式之后，用于取消markdown的编译，使得内部<code>{{ 模板语法}}</code>被当成vue解析</p><h3 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji</h3><p><code>:EMOJICODE:</code> VuePress 2 已经发布 🎉 ！</p><h3 id="生成目录" tabindex="-1"><a class="header-anchor" href="#生成目录" aria-hidden="true">#</a> 生成目录</h3><p><code>[[toc]]</code></p>`,13),C={class:"table-of-contents"},I=a("h3",{id:"组件",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#组件","aria-hidden":"true"},"#"),n(" 组件")],-1),N=c(`<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span>
  import V from &#39;@@/Home.vue&#39;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),V=a("div",{class:"language-bash","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"yarn"),n(),a("span",{class:"token function"},"install"),n(`
`)])])],-1),j=a("div",{class:"language-bash","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"npm"),n(),a("span",{class:"token function"},"install"),n(`
`)])])],-1),E=c(`<h3 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h3><p>使用 style 标签改写全局样式</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>
  h3 {
    color: blue;
  }
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),G={__name:"markdown.html",setup(o){return(u,B)=>{const t=l("router-link"),m=l("Badge"),i=l("CodeGroupItem"),v=l("CodeGroup");return p(),r("div",null,[y,a("nav",C,[a("ul",null,[a("li",null,[s(t,{to:"#容器"},{default:e(()=>[n("容器")]),_:1})]),a("li",null,[s(t,{to:"#代码块高亮"},{default:e(()=>[n("代码块高亮")]),_:1})]),a("li",null,[s(t,{to:"#模板语法"},{default:e(()=>[n("模板语法")]),_:1})]),a("li",null,[s(t,{to:"#emoji"},{default:e(()=>[n("Emoji")]),_:1})]),a("li",null,[s(t,{to:"#生成目录"},{default:e(()=>[n("生成目录")]),_:1})]),a("li",null,[s(t,{to:"#组件"},{default:e(()=>[n("组件")]),_:1})]),a("li",null,[s(t,{to:"#样式"},{default:e(()=>[n("样式")]),_:1})])])]),I,s(x),N,a("ul",null,[a("li",null,[n("VuePress - "),s(m,{type:"tip",text:"v2",vertical:"top"})])]),s(v,null,{default:e(()=>[s(i,{title:"YARN"},{default:e(()=>[V]),_:1}),s(i,{title:"NPM",active:""},{default:e(()=>[j]),_:1})]),_:1}),E])}}},S=d(G,[["__file","markdown.html.vue"]]);export{S as default};
