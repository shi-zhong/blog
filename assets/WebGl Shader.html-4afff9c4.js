import{_ as e,o as t,c as n,a as d}from"./app-be7ae715.js";const i={},l=d(`<ol><li>RGB和HSV色彩空间 建立一个通用数学三维坐标系，垂直于平面的轴为Z轴，水平于平面指向右侧的为x轴，水平于平面指向下方的为y轴</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	Z
	|
	| _______X
	/
   / Y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>色彩映射为 (x, y, z) =&gt; (r, g, b)</p><p>使用rgb色彩空间时， 空间组织表现为一个正方体。 方程 <code>x = y = z</code> 为一条从白色到黑色的渐变线。</p><p>特殊颜色坐标（归一化）</p><p>(0, 0, 0) =&gt; 黑色 (1, 1, 1) =&gt; 白色</p><p>(1, 0, 0) =&gt; 红色 (0, 1, 0) =&gt; 绿色 (0, 0, 1) =&gt; 蓝色</p><p>(1, 1, 0) =&gt; 黄色 (1, 0, 1) =&gt; 紫色 (0, 1, 1) =&gt; 青色</p><p>HSV 的色彩空间在视觉上表现为锥形 H 为 色相旋转， S 为饱和度， V为明暗</p><p>圆锥尖代表黑色 V通道为0， 圆锥底面代表确定明暗下的色盘， 根据V的数值，在 <code>x = y = z</code>下取等比例的一点，作一个小正方体， 不位于坐标轴平面的三个面映射到该圆上。</p>`,10),s=[l];function c(a,r){return t(),n("div",null,s)}const _=e(i,[["render",c],["__file","WebGl Shader.html.vue"]]);export{_ as default};
