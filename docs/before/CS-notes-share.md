---
title: CS-notes-share
date: 2019-12-11 16:58:28
tags:
---
### 短连接AND长连接
HTTP/1.1起默认长连接 断开连接 `Connection:close`;
HTTP/1.1前默认短连接 建立链接 `Connection:Keep-Alive`

### 验证缓存
ETag首部字段，用于标识资源。同一个URL下会有多个不同的资源，为了区分引入了ETag。
ETag放入If-None-Match首部中，可用于检查资源是否有效，若有效则返回304 Not Modified。

### 范围请求
为了避免网络中断后重复发送数据，用range指定发送数据范围
请求成功后服务器返回206 Partial Content 状态码

### HTTPS

HTTP缺陷:
1. 明文通信，可能被窃听
2. 身份易被伪装
3. 报文有风险被篡改


HTTPS 并不是新协议，而是让 HTTP 先和 SSL（Secure Sockets Layer）通信，再由 SSL 和 TCP 通信，也就是说 HTTPS 使用了隧道进行通信。
```
		http	   https
	客户端-------->SSL-------->服务器

``` 

#### SSL
SSL是为网络通信提供安全及数据完整性的一种安全协议。TLS与SSL在传输层与应用层之间对网络连接进行加密。
1）认证用户和服务器，确保数据发送到正确的客户机和服务器；
2）加密数据以防止数据中途被窃取；
3）维护数据的完整性，确保数据在传输过程中不被改变。

##### 流程

###### 服务器认证
```txt
客户端	|---->	发送	开始	  信息	------>	|服务器
	|<----	判断	生成秘钥  响应	<------	|
	|---->	生成秘钥 加密	传输	------>	|
	|<----	回复秘钥 返回认证信息	<------	|
```
服务器认证阶段:
1. 客户端向服务器发送一个开始信息“Hello”以便开始一个新的会话连接
2. 服务器根据客户的信息确定是否需要生成新的主密钥，如需要则服务器在响应客户的“Hello”信息时将包含生成主密钥所需的信息
3. 客户根据收到的服务器响应信息，产生一个主密钥，并用服务器的公开密钥加密后传给服务器
4. 服务器回复该主密钥，并返回给客户一个用主密钥认证的信息，以此让客户认证服务器。

###### 用户认证
```txt
客户端	|<----		发送提问	<------	|服务器
	|---->	返回数字签名和公开密钥	------>	|
```
用户认证阶段:
在此之前，服务器已经通过了客户认证，这一阶段主要完成对客户的认证。经认证的服务器发送一个提问给客户，客户则返回（数字）签名后的提问和其公开密钥，从而向服务器提供认证。


#### 加密
 对称加密: 使用同一密钥(优:运算快;缺点:无法将密钥安全传输)
不对称加密:使用不同密钥(优:安全传输密钥;缺:运算速度慢)

HTTPS 不对称加密密钥，再用对称密钥通信

#### 认证
通过使用 证书 来对通信方进行认证。

数字证书认证机构（CA，Certificate Authority）是客户端与服务器双方都可信赖的第三方机构。

服务器的运营人员向 CA 提出公开密钥的申请，CA 在判明提出申请者的身份之后，会对已申请的公开密钥做数字签名，然后分配这个已签名的公开密钥，并将该公开密钥放入公开密钥证书后绑定在一起。

进行 HTTPS 通信时，服务器会把证书发送给客户端。客户端取得其中的公开密钥之后，先使用数字签名进行验证，如果验证通过，就可以开始通信了。

#### HTTPS缺点

 1. 因为需要进行加密解密等过程，因此速度会更慢；
 2. 需要支付证书授权的高额费用。




[握手](https://blog.csdn.net/qq_38950316/article/details/81087809)


