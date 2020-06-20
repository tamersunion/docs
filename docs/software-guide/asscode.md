---
title: Aegisub ASS代码使用指南
sidebarDepth: 1
---

# Aegisub ASS代码使用指南

## 文中使用符号说明
* **•** → 代码注意事项
* 【 】 → 代码简要说明
* e.g. → 代码使用举例
* （ ） → 解释、强调、补充以及吐槽等
* \[扩] → 高阶代码，只在能VSFilter2.39+的版本使用 (These tags are only available in VSFilter 2.39 and later, and might not be safe for softsubbing.)

## 部分中英对照参考
* 圆括号 parentheses → ( )
* 尖括号 angle brackets → < >
* 逗号 comma → ,
* 反斜线符号 backslash → \
* 大括号 override blocks → { }
* 斜体 Italics *斜体*

## 00 代码格式说明
反斜线符号\ + 代码名称 + 参数（有可能为多个）

* 所有代码必须是英文格式，中文标点无效（生效了的代码是彩色的）；
* 尖括号&lt; &gt;内的参数必填；
* &lt; &gt;本身不需要输入代码；
* &#91; &#93; 内参数可以省略，具体用法参照相关内容。

e.g.

`\fs\<size> `
`\fs50` 【字体大小设置为50】

`\pos (<x>, <y>)`
`\pos(470, 260) `【字幕位置定位于点`(<x>, <y>)`】

`\move (<x1>, <y1>, <x2>, <y2> \[, <t1>, <t2>]) `
`\move (100, 150, 300, 350)` 【字幕从点 `(100, 150)` 移动至 `(300, 350)`，持续时间为从字幕出现开始到字幕消失为止】

## 01 特殊代码 Special characters

####  软性换行 Soft line break

`\n`
【只在换行方式 (Wrapping mode) 2(详情见下↓) 下有效，其他方式下则被替换为空格】

#### 硬性换行 Hard line break

`\N`
【无视换行方式，强制换行】

#### 硬性空格 Hard space

`\h`
【在硬性空格前后不会自动换行，且其在一行首尾时不会被缩进】

> 不需写在 { } 内

#### 换行方式 Wrap ： 
`\q<style> (Override tag)`
* 此为Override tag，需要｛｝，写在这里仅为方便对照查阅；
* 共计四种，可在“文件→配置”中更改。
0：智能换行，尽量使每行宽度一致，不能保持等宽时上行较宽。只有\N指令强制换行有效；
1：于行尾词处换行，仅\N断行有效；
2：不自动换行，\n及\N断行有效；
3：智能换行，尽量使每行宽度一致，不能保持等宽时下行较宽。只有\N指令强制换行有效。

## 02 普通代码 Override tags
> 必须写在 { } 内，且影响之后所有的文字（当行代码），直到有第二个相同类型的代码出现以覆盖其效果

### 基本字体处理

可使用面板按钮便捷设置。

#### 斜体 Italics

`\i1   \i0`

#### 粗体 Bold

`\b1  \b0  \b<weight>`

* 大部分字体不支持自定义字体粗细；如支持，更改的粗细应为100的倍数；
* 100最细，400正常，700为粗体，900为极粗。

e.g. 

`{\b100}How {\b300}bold {\b500}can {\b700}you {\b900}get?`

#### 下划线 Underline

`\u1   \u0`

#### 删除线 Strikeout

`\s1   \s0`

### 字体样式相关

#### 重置字幕样式 Reset style

`\r\[<style>]`

e.g. 

`-Hey\N{\rAlternate}-Huh?\N{\r}-Who are you?`

【假设此条字幕样式为"Default"，则"Hey" 为Default style，"Huh?" 被改成了"Alternate"，"Who are you?" 又被恢复为Default style】

#### 字体名 Font name

`\fn<name>`

* 可使用面板按钮便捷设置。

e.g.

`{\fnLucida Calligraphy}Think of you`
`{\fn@微软雅黑 }知道@是干嘛的了吧`

![](https://static.tamersunion.net/wp-content/uploads/2019031119385921.jpg)

#### 字体大小 Font size

`\fs<size>` `\fs10` `\fs88`

* `<size>`指的是文字纵向的像素数量。

#### 文字间距 Letter spacing

`\fsp<spacing>`

e.g.

`\fsp3`　`\fsp10`

![](https://static.tamersunion.net/wp-content/uploads/2019031119390043.jpg)

#### 边框宽度 Border size

`\bord<size>`

* `<size>`可设为0，也可为小数；
* 请注意若文件→配置内的比例缩放边框和阴影被勾选，边框宽度效果会受影响。

e.g.

`\bord5` `\bord0.5` `\bord0`【无边框】

\[扩] 边框宽度 Border size (extended)

`\xbord<size>`    `\ybord<size>`
【横向的字体边框宽度(x)和纵向的字体边框宽度(y)可分别设置】
* `<size>`可设为0，也可为小数；
* 一行代码中，在`\xbord` 或`\ybord`后使用`\bord`指令的话，`\xbord`和`\ybord`效果会被覆盖。

e.g.

`\xbord4\ybord0\fsp7\fs60`

![](https://static.tamersunion.net/wp-content/uploads/2019031119390341.jpg)

#### 阴影深度 Shadow distance

`\shad<depth>`
【阴影作用于文字背后，出现在右下角；经过颜色设置可造成 3D字体假象】

* `<depth>`可以为小数，不可为负数。

e.g.

`\shad10`                      `\shad3.5`

![](https://static.tamersunion.net/wp-content/uploads/2019031119390333.jpg)

\[扩] 阴影深度 Shadow distance (extended)

`\xshad<depth>  \yshad<depth>`
【横向的阴影深度(x)和纵向的阴影深度(y)可分别设置】

* `<size>`可设为0，可为小数，也可为负数。

e.g.

　　`\xshad5\yshad0`　　　　　　　　　　　`\xshad-6\yshad4`

![](https://static.tamersunion.net/wp-content/uploads/2019031119390933.jpg)

#### 模糊边缘 Blur edges

`\be1`【模糊边缘】 `\be0`【不模糊边缘】

* 字体有边框时以边框颜色为准模糊边缘，无边框时以文字颜色为准模糊文字边缘；
* 模糊效果在字体较小时比较明显，但是使用可以使文字看过去更柔和。

e.g.

　　　　　　`\be1`　　　　　　　　　　　　　　　　`\be0`

![](https://static.tamersunion.net/wp-content/uploads/2019031119391130.jpg)

（嗯……左边的柔和一点，看出来了咩……）

\[扩]                    `\be<strength>`
* 字体有边框时以边框颜色为准模糊边缘，无边框时以文字颜色为准模糊文字边缘；
* 设置值必须为整数；
* 因为模糊效果为渐变色，设置值过高没有意义（末端几乎透明）。

e.g.

　　　　`\fs40\be10`　　　　　　　　　　　　　　`\fs40\be20`

![](https://static.tamersunion.net/wp-content/uploads/2019031119391117.jpg)

(左右两者，基本看不出来区别)

\[扩] 模糊边缘 Blur edges(gaussian kernel)

`\blur<strength>`

* 字体有边框时以边框颜色为准模糊边缘，无边框时以文字颜色为准模糊文字边缘；
* 设置值可为小数；
* 用法与`\be<strength>`几乎一样，但是因为算法不同，在设置值较高的时候有很好的表现，但要注意设置值过高会给CPU带来压力。

e.g.

　　　　　`\fs40\be5`　　　　　　　　　　　 `\fs40\be10`

![](https://static.tamersunion.net/wp-content/uploads/2019031119391429.jpg)

#### 设置颜色 Set color

`\1c&H<bb><gg><rr>&   (= \c&H<bb><gg><rr>&)` 【主要颜色 (原色) 】 

`\2c&H<bb><gg><rr>&`【卡拉 ok效果中的次要 (第二) 颜色】

`\3c&H<bb><gg><rr>&`【字体边框颜色 】

`\4c&H<bb><gg><rr>&`【字体阴影颜色】

* &……&不可以省略；
* 颜色代码参照[https://en.wikipedia.org/wiki/Hexadecimal](http://en.wikipedia.org/wiki/Hexadecimal) ，蓝绿红顺序；
* 可以用软件的选色盘查找。(参见下图)
* 可用面板按钮快捷设置。
* 常见颜色代码：
 - 正红：&H0000FF&
 - 正黄：&H00FFFF&
 - 正绿：&H00FF00&
 - 纯白：&HFCFCFC&
 - 纯黑：&H000000&

![](https://static.tamersunion.net/wp-content/uploads/2019031119391790.jpg)

#### 设置透明度 Set alpha
`\alpha&H<aa>`    【一次性设置以下四者的透明度】

`\1a&H<aa>`         【文字原色透明度】

`\2a&H<aa>`         【卡拉 ok效果中的第二颜色透明度】

`\3a&H<aa>`         【字体边框透明度】

`\4a&H<aa>`         【字体阴影透明度】

* 经实践Set alpha代码内的&和H均可省略不写；
* `<aa>`采用十六进制（00【不透明】, 37【25%透明】80【50%透明】, FF【100%透明】）；
* `<aa>`不区分大小写；
* 超过80效果就不明显了（也许是我打开方式不对_(:3」∠) _）。

e.g.

　　　`\alpha00`　　　　　　　`\alpha37`　　　　　　　`\alpha80`

![](https://static.tamersunion.net/wp-content/uploads/2019031119391991.jpg)

#### 字体编码 Font encoding

`\fe<id>`

* 可在样式编辑器中设置。

e.g.  

`\fe0`  【ANSI码 (USA) 】      `\fe128` 【SHIFT_JIS 码 (Japan) 】

![](https://static.tamersunion.net/wp-content/uploads/2019031119392272.jpg)

### 字幕定位、移动和淡入淡出

#### 栅格定位 Line alignment

`\an<pos>`

* `\pos`和`\move`会覆盖`\an`指令效果，但是`\an`的特征会保留（如`\pos(300,500)\an1`，字幕是居左的，在字幕有两行以上的情况下每行开头均居左，否则是居中）；

* 屏幕划分方法：

![](https://static.tamersunion.net/wp-content/uploads/2019031119392442.jpg)

e.g.

`\an2` 【屏幕下方中间（各位置间距可在样式管理中重新设置）】

#### 栅格定位 Line alignment(legacy)

`\a<pos>`

* `\pos`和`\move`会覆盖`\a`指令效果，但是`\a`的特征会保留（同`\an`）；
* 屏幕划分方法：

![](https://static.tamersunion.net/wp-content/uploads/2019031119392670.jpg)

#### 静态定位 Set position

`\pos(<x>, <y>)`

* 准确度与分辨率有关；
* 可双击屏幕设置；
* 点 `(<x>, <y>)` 的位置不是绝对的（不见得是整条字幕的中心），有时与Alignment的选择有关。

#### 移动命令 Movement

`\move(<x1>, <y1>, <x2>, <y2> \[, <t1>, <t2>])`

* t1和t2的单位为毫秒；
* 一行文本中，不得有多于一条的\move命令，也不能同时有\move和\pos；
* 移动只可能是匀速的。

【从位置 (x1, y1)移动到(x2,y2) \[字幕开始时间之后t1毫秒开始移动；从t1开始，移动过程持续t2时间]，若t1,t2省略，默认移动时间为此栏字幕条持续时间】

e.g.

`\move(100,150,300,350)`【字幕从 (100, 150)移动至(300, 350)，持续时间为整条字幕时间】

`\move(100,150,300,350,500,1500)`【同上，但字幕从其出现 500ms后开始移动，1.5s 后移动结束 】

#### 旋转原点 Rotation origin

`\org(<x>,<y>)`

* 一旦旋转/缩放中心被设定，则它就是固定不动的；
* 将该点设于极远处、配合快速特效可以造成跳跃的视觉效果；(反正我不会用OTZ)
* 每条文本最多只能有一个org命令。

#### 淡入淡出 Fade

`\fad(<fadein>,<fadeout>)`

`\fad(<t1>, <t2>)`

【开始时间到t1淡入，t2到结束时间淡出】

* t1, t2单位为毫秒；
* t1+t2必须小于最多等于本条字幕的持续时间；
* t1=0，无淡入； t2=0，无淡出。

#### 淡入淡出 Fade（complex）

`\fade(<a1>,<a2>,<a3>,<t1>,<t2>,<t3>,<t4>)`

* 透明度值为十进制，从0（不透明）到255（完全透明）;
* 时间以毫秒计；时间为累计时间；
* 七个参数都必须有；
* fade命令中透明度标记影响 1c-4c所有颜色。

【t1之前透明度为a1，在t1到t2时间段透明度由a1渐变为a2，在t2到t3时间内透明度保持为a2，在t3到t4时间段透明度由a2渐变为a3，t4之后透明度保持为a3】

![](https://static.tamersunion.net/wp-content/uploads/2019031119392854.jpg)

e.g.

`\fade (255, 32, 224, 0, 500, 2000, 2200)`

【字幕从开始0s到0.5s由透明渐变为几乎不透明，维持32的透明度1.5s，此后在0.2s之内由透明度32变为224（几乎透明），此后维持几乎透明状态直至本条字幕时间结束】

### 字体缩放和旋转

可使用面板按钮便捷设置，在视频窗口左侧。

#### 字体缩放 Font scale

* `<scale>` 以百分比表示，100 即原始尺寸。

`\fscx<scale>`   【字体沿X轴方向缩放】

e.g.

`\fscx50`【宽度变为原来的一半】  `\fscx200`【宽度变为原来的一倍】

`\fscy<scale>`    【字体沿Y轴方向缩放】

e.g.

`\fscy50`【高度变为原来的一半】  `\fscy200`【高度变为原来的一倍】

e.g.

　　`Think of you`　　　　　　　　　　　　　`{\fscx200\fscy200}Think of you`

![](https://static.tamersunion.net/wp-content/uploads/2019031119393175.jpg)

#### 文字旋转 Text rotation

`\fr\[<x/y/z>]<degrees>`

* \fr默认绕Z 轴（垂直于屏幕的轴）。

`\fr (= \frz)<amount>` 【绕Z轴旋转（逆时针为正，顺时针为负）】

e.g.

`\fr-90`　　　　　　`\fr90`　　　`{\frz-90\fn@微软雅黑 }`【绕Z 轴旋转与 @字体结合效果】

![](https://static.tamersunion.net/wp-content/uploads/2019031119393312.jpg)

`\frx<amount>` 【 绕 X轴（水平轴）旋转(为正值时字向后倒，为负时字向前倾)】

e.g.

　　　　　`\frx60`　　　　　　　　　　　　　　　　`\frx-60`

![](https://static.tamersunion.net/wp-content/uploads/2019031119393521.jpg)

`\fry<amount>`【绕 Y轴（竖直轴）旋转(为正值时字左大右小，为负时字左小右大)】

e.g.

　　　`\fry60`　　　　　　　　　　　　`\fry-60`

![](https://static.tamersunion.net/wp-content/uploads/2019031119393990.jpg)

其它尝试：

e.g.

　　`\frx40\fry60`　　　　　　　　　　　`\frx-30\fry-30\frz30`

![](https://static.tamersunion.net/wp-content/uploads/2019031119394274.jpg)

\[扩] 文本倾斜 Text shearing

`\fax<factor>`     `\fay<factor>`

【文本倾斜效果】

* 一般而言`<factor>`取较小的值，小于2的值效果都非常明显；
* 在旋转命令之后，倾斜所应用的轴为旋转之后的轴，与初始轴无关。

e.g.

　　　　　　　`\fax1`　　　　　　　　　　　　　　　　`\fay1`

![](https://static.tamersunion.net/wp-content/uploads/2019031119394456.jpg)

e.g.【配合旋转】

`\fr90\fax0.5`　　　　　　　　　　　　　`\fr90\fay0.5`

![](https://static.tamersunion.net/wp-content/uploads/2019031119394612.jpg)

### 卡拉OK特效

#### 卡拉OK特效 Karaoke effect

* `<duration>` 单位为厘秒 (cs) ，100cs = 1000ms = 1s。

`\k<duration>` 【卡拉 ok跳色效果，一个字一个字间断变色】

* `<duration>`的时间经过之后执行跳色命令。

e.g. 

`{\k50}{\k80}Think {\k25}of {\k60}me` 【50cs之后 "Think"从次要颜色跳为主要颜色， 80cs后"of"跳为原色，25cs后"me"跳为原色】

`\kf<duration>` or `\K<duration>` 【卡拉 ok填充效果（与`\k`效果相似，但是有从左到右填充效果，较为平滑） 】

* 在`<duration>`时间段内填充完色。

e.g.

`{\kf80}Think {\kf25}of {\kf60}me` 【80cs内 "Think"从次要颜色由左至右变成主要颜色， 25cs内"of"渐变为原色，60cs内"me"渐变为原色】

`\ko<duration>` 【边框卡拉 ok跳色效果（与`\k`效果相似）】

e.g. 

`{\ko50}{\ko80}Think {\ko25}of {\ko60}me` 【一开始所有边框都没有，50cs之后 "Think"的边框跳色， 80cs后"of"的边框跳色，25cs后"me"的边框跳色】

### 其它特效

蒙板可使用面板按钮便捷设置，在视频窗口左侧。

#### 矩形蒙板 Clip(rectangle)

`\clip (<x1>, <y1>, <x2>, <y2>)` 【只有矩形内的内容被显示】

* 默认为矩形，以 `(x1, y1)`, `(x2, y2)` 分别为对角线端点坐标。

e.g.

　　　　　　`\clip (0, 0, 704, 245)`

![](https://static.tamersunion.net/wp-content/uploads/2019031119394830.jpg)

\[扩] 矩形蒙板 Clip(rectangle)

`\iclip (<x1>, <y1>, <x2>, <y2>)`  【只有矩形内的内容不被显示】

* 默认为矩形，以 `(x1, y1)`, `(x2, y2)` 分别为对角线端点坐标。
* iclip的影响效果是整行、无视代码放置位置的。

e.g.

　　　　　　`\iclip (0, 0, 704, 245)`

![](https://static.tamersunion.net/wp-content/uploads/2019031119395059.jpg)

#### 图形蒙板 Clip (vector drawing)

`\clip (<drawing commands>)`

`\clip (<scale>, <drawing commands>)`

\[扩]`\iclip(<drawing commands>)`

\[扩]`\iclip(<scale>, <drawing commands>)`

* iclip的影响效果是整行、无视代码放置位置的。
* 代码使用方法、效果与Clip (rectangle) 一致，请结合Drawing tags自己探索。

e.g.

`\clip (1, m 50 0 b 100 0 100 100 50 100 b 0 100 0 0 50 0)`

【绘图1：1，显示圆内字幕】

#### 动态变换 Animated transform

`\t(<style modifiers>)` 【在字幕持续时间内由\t前的状态变成( )内状态】

`\t(<accel>, <style modifiers>)`       【同上，速度非线性】

`\t(<t1>, <t2>, <style modifiers>)` 【在t1\~t2时间内由\t前的状态变成( )内状态】

`\t(<t1>, <t2>, <accel>, <style modifiers>)` 【同上，速度非线性】

* 只有以下tags可以用于变换：

![](https://static.tamersunion.net/wp-content/uploads/2019031119395211.jpg)

\[扩]

![](https://static.tamersunion.net/wp-content/uploads/2019031119395520.jpg)

* t1和t2单位为毫秒，时间为累计时间；
* t1~t2的时间间隔为特效发生的时间，如果未指定，则为整条字幕持续时间；
* `<accel>`可以实现非线性速度变化，具体为：`<accel>` 等于 1，速度为线性；`<accel>`在0和1之间 ，开始速度快结束速度慢；`<accel>` 大于 1，开始速度慢结束速度快。
* 自己实践的时候发现`\(i)clip`不好用，不如说和其代码本身说明是矛盾的，无解ING。

e.g.

`{\1c&HFF0000&\t(\1c&H0000FF&)}Hello!`            【“Hello!”由蓝色变为红色】

`{\an5\t(0,5000,\frz3600)}Wheee`                          【“Wheee”在5s内匀速逆时针转10圈】

`{\an5\t(0,5000,0.5,\frz3600)}Wheee`                    【“Wheee”在5s内减速逆时针转10圈】

`{\an5\fscx0\fscy0\t(0,500,\fscx100\fscy100)}Boo!` 【Boo!在0.5s内由一个点变成文字】



## 03 绘图代码 Drawing tags

#### 激活绘图命令 Toggle drawing mode

`\p<0/1/..n>`

`\p1`    【激活绘图命令，1：1绘图】

`\p0`    【关闭绘图】

`\p2`    【激活绘图命令，用2倍的分辨率绘图，2：1绘图】

`\p4`    【激活绘图命令，用大8倍 (2^ (4-1)) 的分辨率绘图，8：1绘图】

* n > 0，n为所扩大的范围，用2^（n-1）转化（可使所做图像更精细）。

#### 基线偏移 Baseline offset

      `\pbo<y>`   【图像沿y轴平移】
      
* 该命令只应用于y轴（纵向）。

e.g.

`\pbo-50`【图像沿Y轴向上平移50像素】

`\pbo100`【图像沿Y轴向下平移100像素】


## 04 绘图命令 Drawing commands

### 一般使用

* 这些命令必须遵循\clip（矢量作图）的代码格式，或者位于 {\p#}和{\p0}之间。

#### 正方形 Square

`{\p1}m 0 0 l 100 0 100 100 0 100{\p0}`

* 改变数字可以画出各种四边形，请自行探索~

![](https://static.tamersunion.net/wp-content/uploads/2019031119395768.jpg)

#### 椭圆 Rounded square

`{\p1}m 0 0 s 100 0 100 100 0 100 c {\p0}`

【请参照Square的图示理解代码】

* 此例中c等于 "p 0 0 100 0 100 100"。（具体的请参照后文的补充解释）

![](https://static.tamersunion.net/wp-content/uploads/2019031119400041.jpg)

#### (几近) 圆形 Circle (almost)

`{\p1}m 50 0 b 100 0 100 100 50 100 b 0 100 0 0 50 0{\p0}`

* 此处第二个b可省略。

![](https://static.tamersunion.net/wp-content/uploads/2019031119400261.jpg)

### 补充解释

#### 移动 Move

`m <x> <y>`  【绘制点移动至点`(x, y)`】

* 所有的绘图命令都必须用这个标记开始；
* 如果此前有个未封闭的形状，系统自动将其封闭。

#### (不封闭) 移动 Move (no closing) 

`n <x> <y>`     【绘制点移动至点`(x, y)`】

* 如果此前有个未封闭的形状，不封闭现有的形状。

#### 线条绘制 Line

`l <x> <y> `

【以现在所在位置和`(x, y)` 坐标为两端点绘制一条直线，同时绘制点移动至`(x, y)`】

#### 三次贝塞尔曲线 Cubic Bézier curve

`b <x1> <y1> <x2> <y2> <x3> <y3>`

【以当前位置为起点，(x3, y3)为终点，点 (x1, y1)和 (x2, y2)为控制点，绘制一条曲线（如下图）】

![](https://static.tamersunion.net/wp-content/uploads/2019031119400411.jpg)

#### 三次贝塞尔曲线连结 Cubic b-spline

`s <x1> <y1> <x2> <y2> <x3> <y3> …… <xN> <yN>`

* 至少有三个坐标（当有三个坐标时等同于b命令）；
* 此命令可以将不同的贝塞尔曲线连在一起。

【作用概念同b命令，绘制光滑的三次贝塞尔曲线至点N(xN, yN)】

#### 贝塞尔曲线扩展 Extend b-spline

`p <x> <y>`

【将用b命令绘制的曲线扩展至`(x, y)`】

* 等同于在s命令后增加一个`(x, y)`坐标。

#### 封闭曲线Close b-spline

`c`

【封闭用b命令绘制的曲线】


## END

编撰：和路雪

原始刊载：[https://www.douban.com/note/284573295](https://www.douban.com/note/284573295)

参考资料：[http://aegisub.cellosoft.com/docs/ASS_Tags](http://aegisub.cellosoft.com/docs/ASS_Tags)

>本文由和路雪基于Aegisub官方指南自翻整理编写，不保证涵盖官方指南所有内容，如有疏漏，还望见谅。
>本文的主要目的为方便做时间轴的同学迅速上手、快捷查阅代码；本文大部分代码配有英文代码名称，本人英语能力有限，为避免翻译过程中产生误解给您带来不便，如有需要，还请参考原文。
>本文仅为示例，请在实践中熟悉代码。
>此外，本文代码排列顺序与官方指南并非完全一致，顺序实则为本人擅自划分类别排列，还请注意。
>请善用搜索功能，以便快速定位到您想查找的代码。
>编者使用软件版本为2.1.9，如代码格式无效，请注意是否是由您使用的软件版本过高或者过低导致的。


>本文在重编撰时为阅读方便对部分标记进行了改动。