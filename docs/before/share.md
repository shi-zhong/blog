---
title: 图解HTTP分享
date: 2019/12/7
tag:
---
[内容协商](https://www.cnblogs.com/supersnowyao/p/8593828.html)
### 客户端驱动协商
发送两次请求，第一次获取资源列表，第二次获得选定的版本
### 服务端驱动协商
服务器根据客户端请求首部决定并返回页面
### 透明协商
通过中间设备代表客户端进行协商

q值 语言优先级/缓存/vary 保存请求首部，在缓存中匹配，查询到则返回



定义于 [Uniform Resource Identifier (URI): Generic Syntax](https://tools.ietf.org/html/rfc3986)
URI: 统一资源(标识)符 包括URL和URN
URL: 统一资源(定位)符 提供路径 用具体路径来定位资源,大部分网址都是URL
URN: 统一资源名称 代表资源名称 在某一命名空间里通过表识资源名称来定位该资源
     运用实例:磁力链接(baidu)

磁力链接:
'磁力链接不基于文档的IP地址或定位符，而是在分布式数据库中，通过散列函数值来识别、搜索来下载文档。因为不依赖一个处于启动状态的主机来下载文档，所以特别适用没有中心服务器的对等网络。磁力链接由一组参数组成，参数间的顺序没有讲究，其格式与在HTTP链接末尾的查询字符串相同。通常是一个特定文件的内容散列函数值形成的URN'
通过文件内的代码生成一个独一无二的ID来指定文件，与地址无关。
magnet:?xt=urn:btih:


ftp://ftp.is.co.za/rfc/rfc1808.txt(URL)
http://www.ietf.org/rfc/rfc2396.txt(URL)
ldap://[2001:db8::7]/c=GB?objectClass?one(URL)
mailto:John.Doe@example.com(URL)
news:comp.infosystems.www.servers.unix(URL)
tel:+1-816-555-1212
telnet://192.0.2.16:80/(URL)
urn:oasis:names:specification:docbook:dtd:xml:4.1.2
