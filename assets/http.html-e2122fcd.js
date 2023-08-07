import{_ as e,o as i,c as n,a as d}from"./app-fdfbac5b.js";const s={},a=d(`<h3 id="一、web基础" tabindex="-1"><a class="header-anchor" href="#一、web基础" aria-hidden="true">#</a> 一、Web基础</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>				    		      客户端
TCP/IP	　　｜应用层:决定了向用户提供应用服务时通信的活动        |
	　　｜      HTTP FTP(文件传输) DNS(解析域名,返回IP) |封装
分层管理　 　｜传输层:两台计算机之间的数据传输		        |添加
	　　｜      TCP(传输控制协议) UPD(用户数据报协议)    |部首
	　　｜网络层:规划数据包(最小数据单位)传输路线           |信息
	　　｜	   IP		                        |
	　　｜链路层:处理硬件:操作系统、网卡、驱动等	        V

分层优点:简化设计,将整体分割利于替换
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yxy line-numbers-mode" data-ext="yxy"><pre class="language-yxy"><code>APR协议解析地址,凭借MAC地址进行数据中转
      分割数据包/SYN
发|-------------------&gt;|接
  |	SYN/ACK        |
送|&lt;-------------------|收
  |        ACK         |
端|-------------------&gt;|端

DNS查找IP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>协议:(认证)@服务器地址:(端口)/文件路径?(查询字符串)#(片段标识符)
查询字符串:?参数=值&amp;参数=值&amp;...
	固定参数:访问分析,不影响页面内容
	活动参数:影响内容,可用于筛选等,若有页内链接&#39;URL+参数+页内链接&#39;
片段标识符:标记子资源,例如查询.html文件里的id=msg,则.html#msg

RFC 征求修正意见书，用来制定HTTP技术标准
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、简单的http协议" tabindex="-1"><a class="header-anchor" href="#二、简单的http协议" aria-hidden="true">#</a> 二、简单的HTTP协议</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>请求报文
|请求方法(GET POST)/请求URI(*) 协议版本(HTTP/1.1)---请求行
|(请求首部 内容实体)(HOST: hackr.jp)[(请求)(通用)(实体)](首部字段)
|-----------------------------------------------------
		|	^
	请求	V	|响应
|-----------------------------------------------------
|HTTP/1.1 200 OK
|协议版本 状态码 原因---------------------------状态行
|(空行)
|Date: Tue, 10 Jul 2012 06:50:15 GMT
|...响应首部字段 资源实体[(响应)(通用)(实体)](首部字段)
响应报文
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>请求方法(HTTP/1.1)
GET: 获取资源;
POST: 传输实体主体
PUT: 传输文件(不使用)
HEAD: 获得报文首部，类似GET,只是不返回报文主体，用于确认URI的有效性和日期
PUT/DELETE: 推送/删除(不使用)
OPITONS: 询问支持方法
TRACE: 追踪路径(确认加工/篡改)(易被攻击,少用)
CONNECT: 代理服务器通讯建立隧道,进行TCP通讯(用SSL TLS) CONNECT 服务器名:端口 HTTP版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>http是无状态的协议
cokkie用于本地保存文件，减少服务端负担。用于认证信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、http报文" tabindex="-1"><a class="header-anchor" href="#三、http报文" aria-hidden="true">#</a> 三、HTTP报文</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>报文主体用于描述传输文件
实体主体表示传输具体内容，可在传输中编码(压缩)
大文件分割发送
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、http状态码" tabindex="-1"><a class="header-anchor" href="#四、http状态码" aria-hidden="true">#</a> 四、HTTP状态码</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>	|--------------------------------------------------------------------
  2XX	|200 OK
success	|204 No Content(无资源返回|无需更新客户端资源)
	|206 Partial Content(请求范围)
	|--------------------------------------------------------------------
  	|301 Moved Permanently(URI改变，更新书签，资源最后忘加&quot;/&quot;，返回301)
	|302 Found(临时移动资源，不更新书签)
  3XX	|303 See Other(与302相似,只是方法固定是GET)
	|304 Not Modifiied(?)
	|307 Temporary Redirect==302
	|---------------------------------------------------------------------
  4XX	|400 Bad Request (语法错误)
	|401 Unauthorized(寻求认证)
	|403 Forbidden(权限问题等)
	|404 Not Found(无资源)
	|---------------------------------------------------------------------
  5XX	|501 Internal Server Error(服务器内部错误)
	|503 Service Unavailable(超负载||维护)
	|---------------------------------------------------------------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、协作web服务器" tabindex="-1"><a class="header-anchor" href="#五、协作web服务器" aria-hidden="true">#</a> 五、协作Web服务器</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,14),l=[a];function t(v,r){return i(),n("div",null,l)}const u=e(s,[["render",t],["__file","http.html.vue"]]);export{u as default};
