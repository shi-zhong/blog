import{_ as t,r as i,o as n,c as d,b as e,d as r,e as l,a as s}from"./app-fdfbac5b.js";const h={},c=s(`<h3 id="短连接and长连接" tabindex="-1"><a class="header-anchor" href="#短连接and长连接" aria-hidden="true">#</a> 短连接AND长连接</h3><p>HTTP/1.1起默认长连接 断开连接 <code>Connection:close</code>; HTTP/1.1前默认短连接 建立链接 <code>Connection:Keep-Alive</code></p><h3 id="验证缓存" tabindex="-1"><a class="header-anchor" href="#验证缓存" aria-hidden="true">#</a> 验证缓存</h3><p>ETag首部字段，用于标识资源。同一个URL下会有多个不同的资源，为了区分引入了ETag。 ETag放入If-None-Match首部中，可用于检查资源是否有效，若有效则返回304 Not Modified。</p><h3 id="范围请求" tabindex="-1"><a class="header-anchor" href="#范围请求" aria-hidden="true">#</a> 范围请求</h3><p>为了避免网络中断后重复发送数据，用range指定发送数据范围 请求成功后服务器返回206 Partial Content 状态码</p><h3 id="https" tabindex="-1"><a class="header-anchor" href="#https" aria-hidden="true">#</a> HTTPS</h3><p>HTTP缺陷:</p><ol><li>明文通信，可能被窃听</li><li>身份易被伪装</li><li>报文有风险被篡改</li></ol><p>HTTPS 并不是新协议，而是让 HTTP 先和 SSL（Secure Sockets Layer）通信，再由 SSL 和 TCP 通信，也就是说 HTTPS 使用了隧道进行通信。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>		http	   https
	客户端--------&gt;SSL--------&gt;服务器

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ssl" tabindex="-1"><a class="header-anchor" href="#ssl" aria-hidden="true">#</a> SSL</h4><p>SSL是为网络通信提供安全及数据完整性的一种安全协议。TLS与SSL在传输层与应用层之间对网络连接进行加密。 1）认证用户和服务器，确保数据发送到正确的客户机和服务器； 2）加密数据以防止数据中途被窃取； 3）维护数据的完整性，确保数据在传输过程中不被改变。</p><h5 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h5><h6 id="服务器认证" tabindex="-1"><a class="header-anchor" href="#服务器认证" aria-hidden="true">#</a> 服务器认证</h6><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>客户端	|----&gt;	发送	开始	  信息	------&gt;	|服务器
	|&lt;----	判断	生成秘钥  响应	&lt;------	|
	|----&gt;	生成秘钥 加密	传输	------&gt;	|
	|&lt;----	回复秘钥 返回认证信息	&lt;------	|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器认证阶段:</p><ol><li>客户端向服务器发送一个开始信息“Hello”以便开始一个新的会话连接</li><li>服务器根据客户的信息确定是否需要生成新的主密钥，如需要则服务器在响应客户的“Hello”信息时将包含生成主密钥所需的信息</li><li>客户根据收到的服务器响应信息，产生一个主密钥，并用服务器的公开密钥加密后传给服务器</li><li>服务器回复该主密钥，并返回给客户一个用主密钥认证的信息，以此让客户认证服务器。</li></ol><h6 id="用户认证" tabindex="-1"><a class="header-anchor" href="#用户认证" aria-hidden="true">#</a> 用户认证</h6><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>客户端	|&lt;----		发送提问	&lt;------	|服务器
	|----&gt;	返回数字签名和公开密钥	------&gt;	|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>用户认证阶段: 在此之前，服务器已经通过了客户认证，这一阶段主要完成对客户的认证。经认证的服务器发送一个提问给客户，客户则返回（数字）签名后的提问和其公开密钥，从而向服务器提供认证。</p><h4 id="加密" tabindex="-1"><a class="header-anchor" href="#加密" aria-hidden="true">#</a> 加密</h4><p>对称加密: 使用同一密钥(优:运算快;缺点:无法将密钥安全传输) 不对称加密:使用不同密钥(优:安全传输密钥;缺:运算速度慢)</p><p>HTTPS 不对称加密密钥，再用对称密钥通信</p><h4 id="认证" tabindex="-1"><a class="header-anchor" href="#认证" aria-hidden="true">#</a> 认证</h4><p>通过使用 证书 来对通信方进行认证。</p><p>数字证书认证机构（CA，Certificate Authority）是客户端与服务器双方都可信赖的第三方机构。</p><p>服务器的运营人员向 CA 提出公开密钥的申请，CA 在判明提出申请者的身份之后，会对已申请的公开密钥做数字签名，然后分配这个已签名的公开密钥，并将该公开密钥放入公开密钥证书后绑定在一起。</p><p>进行 HTTPS 通信时，服务器会把证书发送给客户端。客户端取得其中的公开密钥之后，先使用数字签名进行验证，如果验证通过，就可以开始通信了。</p><h4 id="https缺点" tabindex="-1"><a class="header-anchor" href="#https缺点" aria-hidden="true">#</a> HTTPS缺点</h4><ol><li>因为需要进行加密解密等过程，因此速度会更慢；</li><li>需要支付证书授权的高额费用。</li></ol>`,31),o={href:"https://blog.csdn.net/qq_38950316/article/details/81087809",target:"_blank",rel:"noopener noreferrer"};function p(u,v){const a=i("ExternalLinkIcon");return n(),d("div",null,[c,e("p",null,[e("a",o,[r("握手"),l(a)])])])}const x=t(h,[["render",p],["__file","CS-notes-share.html.vue"]]);export{x as default};
