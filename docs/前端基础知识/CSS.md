1. 盒子模型
2. 选择器
3. `em/px/rem/vh/vw`
4. 像素
	1. css像素 (px) ，受 PPI 和 DPR 影响
	2. 设备像素(pt)， 即物理像素
	3. 独立设备像素，逻辑像素
	4. dpr 设备像素比 `window.devicePixelRatio` 2:1 -> 2\*2 个物理像素表示一个css像素
	5. ppi 每英寸像素，即像素密度
5. 隐藏页面元素
	- display:none
	- visibility:hidden
	- opacity:0
	- 设置height、width模型属性为0
	- position:absolute
	- clip-path
6. BFC
	1. 是什么： 独立渲染上下文
		- 对于同一个BFC的俩个相邻的盒子的margin会发生重叠
		- 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
		- BFC的区域不会与float的元素区域重叠
		- 计算BFC的高度时，浮动子元素也参与计算
	2. 如何触发
		- 根元素，即HTML元素
		- 浮动元素：float值为left、right
		- overflow值不为 visible
		- display的值为inline-block、inltable-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid
		- position的值为absolute或fixed
7. 两栏布局和三栏布局
	1. table布局
	2. flex布局
	3. grid布局
	4. margin float布局
8. 浮动(float)
	1. 清除自身文档空间，向原本空间一侧浮动
	2. 下方文档填补空缺，有浮动则重复以上步骤
9. flex弹性布局
10. grid
11. 回流重绘
	1. 回流：当DOM元素几何性质发生变化(大小),浏览器不可避免的对相关的DOM节点进行几何大小和位置的计算。
		1. 增改DOM元素
		2. 元素位置尺寸变化
		3. 浏览器窗口变化
		4. 页面初始渲染
		5. offsetTop等视口值的获取
	2. 重绘： 一个元素的几何大小和位置没有变化，只有元素内部的样式发生变化，引起元素内部的重绘，绘制新的样式(颜色，文本方向等)
12. 响应式设计
	1. 媒体查询
	2. rem/vh/vw
	3. percent
13. CSS 性能优化
	1. 首屏关键样式内联
	2. 异步加载CSS
	3. 资源压缩
	4. 合理使用选择器
	5. 减少昂贵属性使用