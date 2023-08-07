import{_ as e,r as o,o as c,c as l,b as n,d as s,e as p,a as t}from"./app-fdfbac5b.js";const i={},r=n("h3",{id:"前端请求",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前端请求","aria-hidden":"true"},"#"),s(" 前端请求")],-1),u=n("p",null,"小程序完成静态之后需要与后端联调, 所以需要掌握与后端联系的方法, 请求(request)就是与后端联系的通道. 通俗地讲, 请求就是一个网址, 电脑解析网址之后向去找到网址对应的IP地址, 并携带信息去访问目的地址. 直接在浏览器地址里面输入API的URL, 浏览器也会尝试用默认的方法和首部构建请求访问并获取信息.",-1),k=n("h4",{id:"xmlhttprequest",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#xmlhttprequest","aria-hidden":"true"},"#"),s(" XMLHttpRequest")],-1),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>与大多数其他的浏览器对象相似, 我们想要使用XHR, 首先就是要创建XHR实例.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">XHR</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开控制台, 在里面输入上述语句, 并查看XHR中包含的属性, 通过控制台输出的信息, 我们可以了解到关于XHR的很多信息.</p><p>常见属性:</p>`,4),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,"xhr.status：服务器返回的状态码。",-1),y=n("li",null,"xhr.response[...]：服务器响应数据",-1),h=n("li",null,"xhr.timeout：限制响应时长。",-1),g=n("li",null,"xhr.upload：上传进度。",-1),w=t(`<p>常见方法:</p><ul><li>xhr.open：加载请求。</li><li>xhr.send：发送请求。</li></ul><p>...</p><p>更多属性参见MDN</p><p>大概了解 XHR 里面有什么东西之后,请求的问题便迎刃而解.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
  <span class="token comment">// 简单的请求功能</span>

  <span class="token keyword">function</span> <span class="token constant">XHR</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">URL</span><span class="token punctuation">,</span> method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token constant">XHR</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// xhrReq.open(method, url, async, user, password);</span>
    <span class="token constant">XHR</span><span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> <span class="token constant">URL</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开F12 在NETWORK中查看请求是否发送成功; 如果看到了你填写的网址出现,并且是200, 那么说明这个请求成功发送了; 现在我们需要做的就是拿到数据并且加工后展示在我们的页面里面.</p><p>在send成功并且返回数据之后, xhr 对象会调用 <code>onreadystatechange</code> 函数, 告知状态发生变化, 获取到的信息会存放在response 相关的几个属性.</p><p>举例来说</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">renderMoreChild</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">intro</span><span class="token operator">:</span> <span class="token string">&#39;response&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> xhr<span class="token punctuation">.</span>responseText
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以从xhr 中取出存在responseText里面的数据了, 不只是Text, 也会有其他数据, 一般来说我们都只会用到json 的数据,其他类型的可以自行谷歌.</p><p>简单的封装样例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
  <span class="token keyword">function</span> <span class="token constant">XHR</span><span class="token punctuation">(</span>url <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> preHttp <span class="token operator">=</span> <span class="token string">&quot;http://localhost:9090/default&quot;</span><span class="token punctuation">;</span>

      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> preHttp <span class="token operator">+</span> url<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>token <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            xhr<span class="token punctuation">.</span>onload <span class="token operator">=</span> options<span class="token punctuation">.</span>onload <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            xhr<span class="token punctuation">.</span>onloadend <span class="token operator">=</span> options<span class="token punctuation">.</span>onloadend <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            xhr<span class="token punctuation">.</span>onerror <span class="token operator">=</span> options<span class="token punctuation">.</span>onerror <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            xhr<span class="token punctuation">.</span>ontimeout <span class="token operator">=</span> options<span class="token punctuation">.</span>ontimeout <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            xhr<span class="token punctuation">.</span>onreadystatechange <span class="token operator">=</span> options<span class="token punctuation">.</span><span class="token function">onreadystatechange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> xhr<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token comment">// ...</span>
            xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> xhr<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> fetch</h4><p>fetch 是 XHR 的进阶版,基于XHR进行了改进和封装, 相较于 XHR更新并且更加灵活. fetch 提供了 Response 和 Request 对象, 接收一个地址, 无论成功与否, 返回一个Response对象;</p><p>最简单的fetch操作</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token parameter">json</span> <span class="token operator">=&gt;</span> <span class="token function">render</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token keyword">throw</span> err<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>response.text()：得到文本字符串。</li><li>response.json()：得到 JSON 对象。</li><li>response.blob()：得到二进制 Blob 对象。</li><li>response.formData()：得到 FormData 表单对象。</li><li>response.arrayBuffer()：得到二进制 ArrayBuffer 对象。</li></ul><p>一切都是按照默认的程序进行, 第二个参数用来决定请求的细节</p><p>举个例子, 具体细节参考 MDN Request接口</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  
  <span class="token keyword">interface</span> <span class="token class-name">optionObj</span> <span class="token punctuation">{</span>
    method<span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token operator">|</span><span class="token string">&#39;GET&#39;</span><span class="token operator">|</span><span class="token string">&#39;DELETE&#39;</span><span class="token operator">|</span><span class="token string">&#39;PUT&#39;</span><span class="token punctuation">;</span>
    header<span class="token operator">:</span> object<span class="token punctuation">;</span>
    body<span class="token operator">:</span> FormData <span class="token operator">|</span> object<span class="token punctuation">;</span>
    cache<span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token operator">|</span><span class="token string">&quot;no-store&quot;</span><span class="token operator">|</span><span class="token string">&quot;reload&quot;</span><span class="token operator">|</span><span class="token string">&quot;no-cache&quot;</span><span class="token operator">|</span><span class="token string">&quot;force-cache&quot;</span><span class="token operator">|</span><span class="token string">&quot;only-if-cached&quot;</span><span class="token punctuation">,</span>
    mode<span class="token operator">:</span> <span class="token string">&quot;cors&quot;</span><span class="token operator">|</span><span class="token string">&quot;same-origin&quot;</span><span class="token operator">|</span><span class="token string">&quot;no-cors&quot;</span><span class="token punctuation">,</span> 
    credentials<span class="token operator">:</span> <span class="token string">&quot;same-origin&quot;</span><span class="token operator">|</span><span class="token string">&quot;include&quot;</span><span class="token operator">|</span><span class="token string">&quot;omit&quot;</span><span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">&quot;follow&quot;</span><span class="token operator">|</span><span class="token string">&quot;error&quot;</span><span class="token operator">|</span><span class="token string">&quot;manual&quot;</span><span class="token punctuation">,</span>
    integrity<span class="token operator">:</span> hash<span class="token punctuation">,</span>
    referrer<span class="token operator">:</span> <span class="token string">&quot;about:client&quot;</span><span class="token punctuation">,</span>
    referrerPolicy<span class="token operator">:</span> <span class="token string">&quot;no-referrer-when-downgrade&quot;</span><span class="token punctuation">,</span>
    keepalive<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    signal<span class="token operator">:</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> fetch <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> optionObj<span class="token operator">:</span> optionObj<span class="token punctuation">)</span><span class="token operator">:</span> Response<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>封装举例</p><p>现阶段用到的部分不多, fetch的大部分参数用不到, 最频繁的就是 URL method body 三个属性, 封装主要考虑这三者;</p><p>成熟的封装网上有很多, 大家可以参考谷歌</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
  <span class="token keyword">interface</span> <span class="token class-name">optionObj</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">header</span><span class="token operator">:</span> object<span class="token punctuation">;</span>
    <span class="token literal-property property">token</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> Formdata <span class="token operator">|</span> object <span class="token operator">|</span> blob<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> Fetch <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token operator">|</span><span class="token string">&#39;GET&#39;</span><span class="token operator">|</span><span class="token string">&#39;DELETE&#39;</span><span class="token operator">|</span><span class="token string">&#39;PUT&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">optionObj</span><span class="token operator">:</span> optionObj<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">Response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">const</span> preHttp <span class="token operator">=</span> <span class="token string">&quot;https://baseurl.com/api/v1&quot;</span>

    <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>preHttp <span class="token operator">+</span> url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> method<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token punctuation">(</span>optionObj<span class="token punctuation">.</span>header <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">token</span><span class="token operator">:</span> optionObj<span class="token punctuation">.</span>token <span class="token operator">&amp;&amp;</span> token<span class="token punctuation">.</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> optionObj<span class="token punctuation">.</span>body
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">200</span><span class="token operator">:</span> 
          <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">400</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">500</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">502</span><span class="token operator">:</span>
          <span class="token comment">// 错误处理</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小程序用的请求示例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> preHttp <span class="token operator">=</span> <span class="token string">&#39;https://baseUrl.com/api/v1&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> Fetch <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> header <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">token</span><span class="token operator">:</span> Taro<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Taro<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> preHttp <span class="token operator">+</span> url<span class="token punctuation">,</span>
      data<span class="token punctuation">,</span>
      method<span class="token punctuation">,</span>
      header
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusCode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">200</span><span class="token operator">:</span> 
          <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> res<span class="token punctuation">.</span>code<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token number">400</span><span class="token operator">:</span>
          <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;没有权限访问&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span>
          <span class="token keyword">const</span> id <span class="token operator">=</span> Taro<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">&#39;sid&#39;</span><span class="token punctuation">)</span>
          <span class="token keyword">const</span> password <span class="token operator">=</span> Taro<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">&#39;pwd&#39;</span><span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span> id<span class="token operator">&amp;&amp;</span>password <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            Taro<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://planet.muxixyz.com/lonely_planet/v1/login/&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">sid</span><span class="token operator">:</span>id<span class="token punctuation">,</span>
                <span class="token literal-property property">pwd</span><span class="token operator">:</span>password
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">header</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token parameter">back</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              Taro<span class="token punctuation">.</span><span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;token&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">data</span><span class="token operator">:</span> back<span class="token punctuation">.</span>data<span class="token punctuation">.</span>token<span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> res<span class="token punctuation">.</span>code<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
          <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;not found&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">500</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token number">502</span><span class="token operator">:</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;server_wrong&#39;</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// throw new Error(&#39;服务器错误&#39;);</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function f(q,x){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,u,k,n("p",null,[n("a",d,[s("XHR"),p(a)]),s("是一个经典的浏览器对象, 用于构建与服务器的连接.")]),v,n("ul",null,[n("li",null,[s("xhr."),n("a",m,[s("readyState"),p(a)]),s("：XMLHttpRequest对象的状态，等于4表示数据已经接收完毕。")]),b,y,h,g]),w])}const _=e(i,[["render",f],["__file","share5.1.html.vue"]]);export{_ as default};
