(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{374:function(v,_,t){"use strict";t.r(_);var e=t(25),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"aegisub-ass代码使用指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aegisub-ass代码使用指南"}},[v._v("#")]),v._v(" Aegisub ASS代码使用指南")]),v._v(" "),t("h2",{attrs:{id:"文中使用符号说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文中使用符号说明"}},[v._v("#")]),v._v(" 文中使用符号说明")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("•")]),v._v(" → 代码注意事项")]),v._v(" "),t("li",[v._v("【 】 → 代码简要说明")]),v._v(" "),t("li",[v._v("e.g. → 代码使用举例")]),v._v(" "),t("li",[v._v("（ ） → 解释、强调、补充以及吐槽等")]),v._v(" "),t("li",[v._v("[扩] → 高阶代码，只在能VSFilter2.39+的版本使用 (These tags are only available in VSFilter 2.39 and later, and might not be safe for softsubbing.)")])]),v._v(" "),t("h2",{attrs:{id:"部分中英对照参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部分中英对照参考"}},[v._v("#")]),v._v(" 部分中英对照参考")]),v._v(" "),t("ul",[t("li",[v._v("圆括号 parentheses → ( )")]),v._v(" "),t("li",[v._v("尖括号 angle brackets → < >")]),v._v(" "),t("li",[v._v("逗号 comma → ,")]),v._v(" "),t("li",[v._v("反斜线符号 backslash → \\")]),v._v(" "),t("li",[v._v("大括号 override blocks → { }")]),v._v(" "),t("li",[v._v("斜体 Italics "),t("em",[v._v("斜体")])])]),v._v(" "),t("h2",{attrs:{id:"_00-代码格式说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_00-代码格式说明"}},[v._v("#")]),v._v(" 00 代码格式说明")]),v._v(" "),t("p",[v._v("反斜线符号\\ + 代码名称 + 参数（有可能为多个）")]),v._v(" "),t("ul",[t("li",[v._v("所有代码必须是英文格式，中文标点无效（生效了的代码是彩色的）；")]),v._v(" "),t("li",[v._v("尖括号< >内的参数必填；")]),v._v(" "),t("li",[v._v("< >本身不需要输入代码；")]),v._v(" "),t("li",[v._v("[ ] 内参数可以省略，具体用法参照相关内容。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\fs\\<size>")]),v._v(" "),t("code",[v._v("\\fs50")]),v._v(" 【字体大小设置为50】")]),v._v(" "),t("p",[t("code",[v._v("\\pos (<x>, <y>)")]),v._v(" "),t("code",[v._v("\\pos(470, 260)")]),v._v("【字幕位置定位于点"),t("code",[v._v("(<x>, <y>)")]),v._v("】")]),v._v(" "),t("p",[t("code",[v._v("\\move (<x1>, <y1>, <x2>, <y2> \\[, <t1>, <t2>])")]),v._v(" "),t("code",[v._v("\\move (100, 150, 300, 350)")]),v._v(" 【字幕从点 "),t("code",[v._v("(100, 150)")]),v._v(" 移动至 "),t("code",[v._v("(300, 350)")]),v._v("，持续时间为从字幕出现开始到字幕消失为止】")]),v._v(" "),t("h2",{attrs:{id:"_01-特殊代码-special-characters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01-特殊代码-special-characters"}},[v._v("#")]),v._v(" 01 特殊代码 Special characters")]),v._v(" "),t("h4",{attrs:{id:"软性换行-soft-line-break"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软性换行-soft-line-break"}},[v._v("#")]),v._v(" 软性换行 Soft line break")]),v._v(" "),t("p",[t("code",[v._v("\\n")]),v._v("\n【只在换行方式 (Wrapping mode) 2(详情见下↓) 下有效，其他方式下则被替换为空格】")]),v._v(" "),t("h4",{attrs:{id:"硬性换行-hard-line-break"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬性换行-hard-line-break"}},[v._v("#")]),v._v(" 硬性换行 Hard line break")]),v._v(" "),t("p",[t("code",[v._v("\\N")]),v._v("\n【无视换行方式，强制换行】")]),v._v(" "),t("h4",{attrs:{id:"硬性空格-hard-space"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬性空格-hard-space"}},[v._v("#")]),v._v(" 硬性空格 Hard space")]),v._v(" "),t("p",[t("code",[v._v("\\h")]),v._v("\n【在硬性空格前后不会自动换行，且其在一行首尾时不会被缩进】")]),v._v(" "),t("blockquote",[t("p",[v._v("不需写在 { } 内")])]),v._v(" "),t("h4",{attrs:{id:"换行方式-wrap-："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#换行方式-wrap-："}},[v._v("#")]),v._v(" 换行方式 Wrap ：")]),v._v(" "),t("p",[t("code",[v._v("\\q<style> (Override tag)")])]),v._v(" "),t("ul",[t("li",[v._v("此为Override tag，需要｛｝，写在这里仅为方便对照查阅；")]),v._v(" "),t("li",[v._v("共计四种，可在“文件→配置”中更改。\n0：智能换行，尽量使每行宽度一致，不能保持等宽时上行较宽。只有\\N指令强制换行有效；\n1：于行尾词处换行，仅\\N断行有效；\n2：不自动换行，\\n及\\N断行有效；\n3：智能换行，尽量使每行宽度一致，不能保持等宽时下行较宽。只有\\N指令强制换行有效。")])]),v._v(" "),t("h2",{attrs:{id:"_02-普通代码-override-tags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_02-普通代码-override-tags"}},[v._v("#")]),v._v(" 02 普通代码 Override tags")]),v._v(" "),t("blockquote",[t("p",[v._v("必须写在 { } 内，且影响之后所有的文字（当行代码），直到有第二个相同类型的代码出现以覆盖其效果")])]),v._v(" "),t("h3",{attrs:{id:"基本字体处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本字体处理"}},[v._v("#")]),v._v(" 基本字体处理")]),v._v(" "),t("p",[v._v("可使用面板按钮便捷设置。")]),v._v(" "),t("h4",{attrs:{id:"斜体-italics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#斜体-italics"}},[v._v("#")]),v._v(" 斜体 Italics")]),v._v(" "),t("p",[t("code",[v._v("\\i1 \\i0")])]),v._v(" "),t("h4",{attrs:{id:"粗体-bold"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#粗体-bold"}},[v._v("#")]),v._v(" 粗体 Bold")]),v._v(" "),t("p",[t("code",[v._v("\\b1 \\b0 \\b<weight>")])]),v._v(" "),t("ul",[t("li",[v._v("大部分字体不支持自定义字体粗细；如支持，更改的粗细应为100的倍数；")]),v._v(" "),t("li",[v._v("100最细，400正常，700为粗体，900为极粗。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("{\\b100}How {\\b300}bold {\\b500}can {\\b700}you {\\b900}get?")])]),v._v(" "),t("h4",{attrs:{id:"下划线-underline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下划线-underline"}},[v._v("#")]),v._v(" 下划线 Underline")]),v._v(" "),t("p",[t("code",[v._v("\\u1 \\u0")])]),v._v(" "),t("h4",{attrs:{id:"删除线-strikeout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除线-strikeout"}},[v._v("#")]),v._v(" 删除线 Strikeout")]),v._v(" "),t("p",[t("code",[v._v("\\s1 \\s0")])]),v._v(" "),t("h3",{attrs:{id:"字体样式相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字体样式相关"}},[v._v("#")]),v._v(" 字体样式相关")]),v._v(" "),t("h4",{attrs:{id:"重置字幕样式-reset-style"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重置字幕样式-reset-style"}},[v._v("#")]),v._v(" 重置字幕样式 Reset style")]),v._v(" "),t("p",[t("code",[v._v("\\r\\[<style>]")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("-Hey\\N{\\rAlternate}-Huh?\\N{\\r}-Who are you?")])]),v._v(" "),t("p",[v._v('【假设此条字幕样式为"Default"，则"Hey" 为Default style，"Huh?" 被改成了"Alternate"，"Who are you?" 又被恢复为Default style】')]),v._v(" "),t("h4",{attrs:{id:"字体名-font-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字体名-font-name"}},[v._v("#")]),v._v(" 字体名 Font name")]),v._v(" "),t("p",[t("code",[v._v("\\fn<name>")])]),v._v(" "),t("ul",[t("li",[v._v("可使用面板按钮便捷设置。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("{\\fnLucida Calligraphy}Think of you")]),v._v(" "),t("code",[v._v("{\\fn@微软雅黑 }知道@是干嘛的了吧")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119385921.jpg",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"字体大小-font-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字体大小-font-size"}},[v._v("#")]),v._v(" 字体大小 Font size")]),v._v(" "),t("p",[t("code",[v._v("\\fs<size>")]),v._v(" "),t("code",[v._v("\\fs10")]),v._v(" "),t("code",[v._v("\\fs88")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("<size>")]),v._v("指的是文字纵向的像素数量。")])]),v._v(" "),t("h4",{attrs:{id:"文字间距-letter-spacing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文字间距-letter-spacing"}},[v._v("#")]),v._v(" 文字间距 Letter spacing")]),v._v(" "),t("p",[t("code",[v._v("\\fsp<spacing>")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\fsp3")]),v._v(" "),t("code",[v._v("\\fsp10")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119390043.jpg",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"边框宽度-border-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#边框宽度-border-size"}},[v._v("#")]),v._v(" 边框宽度 Border size")]),v._v(" "),t("p",[t("code",[v._v("\\bord<size>")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("<size>")]),v._v("可设为0，也可为小数；")]),v._v(" "),t("li",[v._v("请注意若文件→配置内的比例缩放边框和阴影被勾选，边框宽度效果会受影响。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\bord5")]),v._v(" "),t("code",[v._v("\\bord0.5")]),v._v(" "),t("code",[v._v("\\bord0")]),v._v("【无边框】")]),v._v(" "),t("p",[v._v("[扩] 边框宽度 Border size (extended)")]),v._v(" "),t("p",[t("code",[v._v("\\xbord<size>")]),v._v(" "),t("code",[v._v("\\ybord<size>")]),v._v("\n【横向的字体边框宽度(x)和纵向的字体边框宽度(y)可分别设置】")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("<size>")]),v._v("可设为0，也可为小数；")]),v._v(" "),t("li",[v._v("一行代码中，在"),t("code",[v._v("\\xbord")]),v._v(" 或"),t("code",[v._v("\\ybord")]),v._v("后使用"),t("code",[v._v("\\bord")]),v._v("指令的话，"),t("code",[v._v("\\xbord")]),v._v("和"),t("code",[v._v("\\ybord")]),v._v("效果会被覆盖。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\xbord4\\ybord0\\fsp7\\fs60")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119390341.jpg",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"阴影深度-shadow-distance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阴影深度-shadow-distance"}},[v._v("#")]),v._v(" 阴影深度 Shadow distance")]),v._v(" "),t("p",[t("code",[v._v("\\shad<depth>")]),v._v("\n【阴影作用于文字背后，出现在右下角；经过颜色设置可造成 3D字体假象】")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("<depth>")]),v._v("可以为小数，不可为负数。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\shad10")]),v._v(" "),t("code",[v._v("\\shad3.5")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119390333.jpg",alt:""}})]),v._v(" "),t("p",[v._v("[扩] 阴影深度 Shadow distance (extended)")]),v._v(" "),t("p",[t("code",[v._v("\\xshad<depth> \\yshad<depth>")]),v._v("\n【横向的阴影深度(x)和纵向的阴影深度(y)可分别设置】")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("<size>")]),v._v("可设为0，可为小数，也可为负数。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\xshad5\\yshad0")]),v._v(" "),t("code",[v._v("\\xshad-6\\yshad4")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119390933.jpg",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"模糊边缘-blur-edges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模糊边缘-blur-edges"}},[v._v("#")]),v._v(" 模糊边缘 Blur edges")]),v._v(" "),t("p",[t("code",[v._v("\\be1")]),v._v("【模糊边缘】 "),t("code",[v._v("\\be0")]),v._v("【不模糊边缘】")]),v._v(" "),t("ul",[t("li",[v._v("字体有边框时以边框颜色为准模糊边缘，无边框时以文字颜色为准模糊文字边缘；")]),v._v(" "),t("li",[v._v("模糊效果在字体较小时比较明显，但是使用可以使文字看过去更柔和。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\be1")]),v._v(" "),t("code",[v._v("\\be0")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119391130.jpg",alt:""}})]),v._v(" "),t("p",[v._v("（嗯……左边的柔和一点，看出来了咩……）")]),v._v(" "),t("p",[v._v("[扩]                    "),t("code",[v._v("\\be<strength>")])]),v._v(" "),t("ul",[t("li",[v._v("字体有边框时以边框颜色为准模糊边缘，无边框时以文字颜色为准模糊文字边缘；")]),v._v(" "),t("li",[v._v("设置值必须为整数；")]),v._v(" "),t("li",[v._v("因为模糊效果为渐变色，设置值过高没有意义（末端几乎透明）。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\fs40\\be10")]),v._v(" "),t("code",[v._v("\\fs40\\be20")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119391117.jpg",alt:""}})]),v._v(" "),t("p",[v._v("(左右两者，基本看不出来区别)")]),v._v(" "),t("p",[v._v("[扩] 模糊边缘 Blur edges(gaussian kernel)")]),v._v(" "),t("p",[t("code",[v._v("\\blur<strength>")])]),v._v(" "),t("ul",[t("li",[v._v("字体有边框时以边框颜色为准模糊边缘，无边框时以文字颜色为准模糊文字边缘；")]),v._v(" "),t("li",[v._v("设置值可为小数；")]),v._v(" "),t("li",[v._v("用法与"),t("code",[v._v("\\be<strength>")]),v._v("几乎一样，但是因为算法不同，在设置值较高的时候有很好的表现，但要注意设置值过高会给CPU带来压力。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\fs40\\be5")]),v._v(" "),t("code",[v._v("\\fs40\\be10")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119391429.jpg",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"设置颜色-set-color"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置颜色-set-color"}},[v._v("#")]),v._v(" 设置颜色 Set color")]),v._v(" "),t("p",[t("code",[v._v("\\1c&H<bb><gg><rr>& (= \\c&H<bb><gg><rr>&)")]),v._v(" 【主要颜色 (原色) 】")]),v._v(" "),t("p",[t("code",[v._v("\\2c&H<bb><gg><rr>&")]),v._v("【卡拉 ok效果中的次要 (第二) 颜色】")]),v._v(" "),t("p",[t("code",[v._v("\\3c&H<bb><gg><rr>&")]),v._v("【字体边框颜色 】")]),v._v(" "),t("p",[t("code",[v._v("\\4c&H<bb><gg><rr>&")]),v._v("【字体阴影颜色】")]),v._v(" "),t("ul",[t("li",[v._v("&……&不可以省略；")]),v._v(" "),t("li",[v._v("颜色代码参照"),t("a",{attrs:{href:"http://en.wikipedia.org/wiki/Hexadecimal",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://en.wikipedia.org/wiki/Hexadecimal"),t("OutboundLink")],1),v._v(" ，蓝绿红顺序；")]),v._v(" "),t("li",[v._v("可以用软件的选色盘查找。(参见下图)")]),v._v(" "),t("li",[v._v("可用面板按钮快捷设置。")]),v._v(" "),t("li",[v._v("常见颜色代码：")])]),v._v(" "),t("ul",[t("li",[v._v("正红：&H0000FF&")]),v._v(" "),t("li",[v._v("正黄：&H00FFFF&")]),v._v(" "),t("li",[v._v("正绿：&H00FF00&")]),v._v(" "),t("li",[v._v("纯白：&HFCFCFC&")]),v._v(" "),t("li",[v._v("纯黑：&H000000&")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119391790.jpg",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"设置透明度-set-alpha"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置透明度-set-alpha"}},[v._v("#")]),v._v(" 设置透明度 Set alpha")]),v._v(" "),t("p",[t("code",[v._v("\\alpha&H<aa>")]),v._v("    【一次性设置以下四者的透明度】")]),v._v(" "),t("p",[t("code",[v._v("\\1a&H<aa>")]),v._v("         【文字原色透明度】")]),v._v(" "),t("p",[t("code",[v._v("\\2a&H<aa>")]),v._v("         【卡拉 ok效果中的第二颜色透明度】")]),v._v(" "),t("p",[t("code",[v._v("\\3a&H<aa>")]),v._v("         【字体边框透明度】")]),v._v(" "),t("p",[t("code",[v._v("\\4a&H<aa>")]),v._v("         【字体阴影透明度】")]),v._v(" "),t("ul",[t("li",[v._v("经实践Set alpha代码内的&和H均可省略不写；")]),v._v(" "),t("li",[t("code",[v._v("<aa>")]),v._v("采用十六进制（00【不透明】, 37【25%透明】80【50%透明】, FF【100%透明】）；")]),v._v(" "),t("li",[t("code",[v._v("<aa>")]),v._v("不区分大小写；")]),v._v(" "),t("li",[v._v("超过80效果就不明显了（也许是我打开方式不对_(:3」∠) _）。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\alpha00")]),v._v(" "),t("code",[v._v("\\alpha37")]),v._v(" "),t("code",[v._v("\\alpha80")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119391991.jpg",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"字体编码-font-encoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字体编码-font-encoding"}},[v._v("#")]),v._v(" 字体编码 Font encoding")]),v._v(" "),t("p",[t("code",[v._v("\\fe<id>")])]),v._v(" "),t("ul",[t("li",[v._v("可在样式编辑器中设置。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\fe0")]),v._v("  【ANSI码 (USA) 】      "),t("code",[v._v("\\fe128")]),v._v(" 【SHIFT_JIS 码 (Japan) 】")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119392272.jpg",alt:""}})]),v._v(" "),t("h3",{attrs:{id:"字幕定位、移动和淡入淡出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字幕定位、移动和淡入淡出"}},[v._v("#")]),v._v(" 字幕定位、移动和淡入淡出")]),v._v(" "),t("h4",{attrs:{id:"栅格定位-line-alignment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栅格定位-line-alignment"}},[v._v("#")]),v._v(" 栅格定位 Line alignment")]),v._v(" "),t("p",[t("code",[v._v("\\an<pos>")])]),v._v(" "),t("ul",[t("li",[t("p",[t("code",[v._v("\\pos")]),v._v("和"),t("code",[v._v("\\move")]),v._v("会覆盖"),t("code",[v._v("\\an")]),v._v("指令效果，但是"),t("code",[v._v("\\an")]),v._v("的特征会保留（如"),t("code",[v._v("\\pos(300,500)\\an1")]),v._v("，字幕是居左的，在字幕有两行以上的情况下每行开头均居左，否则是居中）；")])]),v._v(" "),t("li",[t("p",[v._v("屏幕划分方法：")])])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119392442.jpg",alt:""}})]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\an2")]),v._v(" 【屏幕下方中间（各位置间距可在样式管理中重新设置）】")]),v._v(" "),t("h4",{attrs:{id:"栅格定位-line-alignment-legacy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栅格定位-line-alignment-legacy"}},[v._v("#")]),v._v(" 栅格定位 Line alignment(legacy)")]),v._v(" "),t("p",[t("code",[v._v("\\a<pos>")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("\\pos")]),v._v("和"),t("code",[v._v("\\move")]),v._v("会覆盖"),t("code",[v._v("\\a")]),v._v("指令效果，但是"),t("code",[v._v("\\a")]),v._v("的特征会保留（同"),t("code",[v._v("\\an")]),v._v("）；")]),v._v(" "),t("li",[v._v("屏幕划分方法：")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119392670.jpg",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"静态定位-set-position"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态定位-set-position"}},[v._v("#")]),v._v(" 静态定位 Set position")]),v._v(" "),t("p",[t("code",[v._v("\\pos(<x>, <y>)")])]),v._v(" "),t("ul",[t("li",[v._v("准确度与分辨率有关；")]),v._v(" "),t("li",[v._v("可双击屏幕设置；")]),v._v(" "),t("li",[v._v("点 "),t("code",[v._v("(<x>, <y>)")]),v._v(" 的位置不是绝对的（不见得是整条字幕的中心），有时与Alignment的选择有关。")])]),v._v(" "),t("h4",{attrs:{id:"移动命令-movement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动命令-movement"}},[v._v("#")]),v._v(" 移动命令 Movement")]),v._v(" "),t("p",[t("code",[v._v("\\move(<x1>, <y1>, <x2>, <y2> \\[, <t1>, <t2>])")])]),v._v(" "),t("ul",[t("li",[v._v("t1和t2的单位为毫秒；")]),v._v(" "),t("li",[v._v("一行文本中，不得有多于一条的\\move命令，也不能同时有\\move和\\pos；")]),v._v(" "),t("li",[v._v("移动只可能是匀速的。")])]),v._v(" "),t("p",[v._v("【从位置 (x1, y1)移动到(x2,y2) [字幕开始时间之后t1毫秒开始移动；从t1开始，移动过程持续t2时间]，若t1,t2省略，默认移动时间为此栏字幕条持续时间】")]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\move(100,150,300,350)")]),v._v("【字幕从 (100, 150)移动至(300, 350)，持续时间为整条字幕时间】")]),v._v(" "),t("p",[t("code",[v._v("\\move(100,150,300,350,500,1500)")]),v._v("【同上，但字幕从其出现 500ms后开始移动，1.5s 后移动结束 】")]),v._v(" "),t("h4",{attrs:{id:"旋转原点-rotation-origin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#旋转原点-rotation-origin"}},[v._v("#")]),v._v(" 旋转原点 Rotation origin")]),v._v(" "),t("p",[t("code",[v._v("\\org(<x>,<y>)")])]),v._v(" "),t("ul",[t("li",[v._v("一旦旋转/缩放中心被设定，则它就是固定不动的；")]),v._v(" "),t("li",[v._v("将该点设于极远处、配合快速特效可以造成跳跃的视觉效果；(反正我不会用OTZ)")]),v._v(" "),t("li",[v._v("每条文本最多只能有一个org命令。")])]),v._v(" "),t("h4",{attrs:{id:"淡入淡出-fade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#淡入淡出-fade"}},[v._v("#")]),v._v(" 淡入淡出 Fade")]),v._v(" "),t("p",[t("code",[v._v("\\fad(<fadein>,<fadeout>)")])]),v._v(" "),t("p",[t("code",[v._v("\\fad(<t1>, <t2>)")])]),v._v(" "),t("p",[v._v("【开始时间到t1淡入，t2到结束时间淡出】")]),v._v(" "),t("ul",[t("li",[v._v("t1, t2单位为毫秒；")]),v._v(" "),t("li",[v._v("t1+t2必须小于最多等于本条字幕的持续时间；")]),v._v(" "),t("li",[v._v("t1=0，无淡入； t2=0，无淡出。")])]),v._v(" "),t("h4",{attrs:{id:"淡入淡出-fade（complex）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#淡入淡出-fade（complex）"}},[v._v("#")]),v._v(" 淡入淡出 Fade（complex）")]),v._v(" "),t("p",[t("code",[v._v("\\fade(<a1>,<a2>,<a3>,<t1>,<t2>,<t3>,<t4>)")])]),v._v(" "),t("ul",[t("li",[v._v("透明度值为十进制，从0（不透明）到255（完全透明）;")]),v._v(" "),t("li",[v._v("时间以毫秒计；时间为累计时间；")]),v._v(" "),t("li",[v._v("七个参数都必须有；")]),v._v(" "),t("li",[v._v("fade命令中透明度标记影响 1c-4c所有颜色。")])]),v._v(" "),t("p",[v._v("【t1之前透明度为a1，在t1到t2时间段透明度由a1渐变为a2，在t2到t3时间内透明度保持为a2，在t3到t4时间段透明度由a2渐变为a3，t4之后透明度保持为a3】")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119392854.jpg",alt:""}})]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\fade (255, 32, 224, 0, 500, 2000, 2200)")])]),v._v(" "),t("p",[v._v("【字幕从开始0s到0.5s由透明渐变为几乎不透明，维持32的透明度1.5s，此后在0.2s之内由透明度32变为224（几乎透明），此后维持几乎透明状态直至本条字幕时间结束】")]),v._v(" "),t("h3",{attrs:{id:"字体缩放和旋转"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字体缩放和旋转"}},[v._v("#")]),v._v(" 字体缩放和旋转")]),v._v(" "),t("p",[v._v("可使用面板按钮便捷设置，在视频窗口左侧。")]),v._v(" "),t("h4",{attrs:{id:"字体缩放-font-scale"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字体缩放-font-scale"}},[v._v("#")]),v._v(" 字体缩放 Font scale")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("<scale>")]),v._v(" 以百分比表示，100 即原始尺寸。")])]),v._v(" "),t("p",[t("code",[v._v("\\fscx<scale>")]),v._v("   【字体沿X轴方向缩放】")]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\fscx50")]),v._v("【宽度变为原来的一半】  "),t("code",[v._v("\\fscx200")]),v._v("【宽度变为原来的一倍】")]),v._v(" "),t("p",[t("code",[v._v("\\fscy<scale>")]),v._v("    【字体沿Y轴方向缩放】")]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\fscy50")]),v._v("【高度变为原来的一半】  "),t("code",[v._v("\\fscy200")]),v._v("【高度变为原来的一倍】")]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("Think of you")]),v._v(" "),t("code",[v._v("{\\fscx200\\fscy200}Think of you")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119393175.jpg",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"文字旋转-text-rotation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文字旋转-text-rotation"}},[v._v("#")]),v._v(" 文字旋转 Text rotation")]),v._v(" "),t("p",[t("code",[v._v("\\fr\\[<x/y/z>]<degrees>")])]),v._v(" "),t("ul",[t("li",[v._v("\\fr默认绕Z 轴（垂直于屏幕的轴）。")])]),v._v(" "),t("p",[t("code",[v._v("\\fr (= \\frz)<amount>")]),v._v(" 【绕Z轴旋转（逆时针为正，顺时针为负）】")]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\fr-90")]),v._v(" "),t("code",[v._v("\\fr90")]),v._v(" "),t("code",[v._v("{\\frz-90\\fn@微软雅黑 }")]),v._v("【绕Z 轴旋转与 @字体结合效果】")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119393312.jpg",alt:""}})]),v._v(" "),t("p",[t("code",[v._v("\\frx<amount>")]),v._v(" 【 绕 X轴（水平轴）旋转(为正值时字向后倒，为负时字向前倾)】")]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\frx60")]),v._v(" "),t("code",[v._v("\\frx-60")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119393521.jpg",alt:""}})]),v._v(" "),t("p",[t("code",[v._v("\\fry<amount>")]),v._v("【绕 Y轴（竖直轴）旋转(为正值时字左大右小，为负时字左小右大)】")]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\fry60")]),v._v(" "),t("code",[v._v("\\fry-60")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119393990.jpg",alt:""}})]),v._v(" "),t("p",[v._v("其它尝试：")]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\frx40\\fry60")]),v._v(" "),t("code",[v._v("\\frx-30\\fry-30\\frz30")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119394274.jpg",alt:""}})]),v._v(" "),t("p",[v._v("[扩] 文本倾斜 Text shearing")]),v._v(" "),t("p",[t("code",[v._v("\\fax<factor>")]),v._v(" "),t("code",[v._v("\\fay<factor>")])]),v._v(" "),t("p",[v._v("【文本倾斜效果】")]),v._v(" "),t("ul",[t("li",[v._v("一般而言"),t("code",[v._v("<factor>")]),v._v("取较小的值，小于2的值效果都非常明显；")]),v._v(" "),t("li",[v._v("在旋转命令之后，倾斜所应用的轴为旋转之后的轴，与初始轴无关。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\fax1")]),v._v(" "),t("code",[v._v("\\fay1")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119394456.jpg",alt:""}})]),v._v(" "),t("p",[v._v("e.g.【配合旋转】")]),v._v(" "),t("p",[t("code",[v._v("\\fr90\\fax0.5")]),v._v(" "),t("code",[v._v("\\fr90\\fay0.5")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119394612.jpg",alt:""}})]),v._v(" "),t("h3",{attrs:{id:"卡拉ok特效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卡拉ok特效"}},[v._v("#")]),v._v(" 卡拉OK特效")]),v._v(" "),t("h4",{attrs:{id:"卡拉ok特效-karaoke-effect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卡拉ok特效-karaoke-effect"}},[v._v("#")]),v._v(" 卡拉OK特效 Karaoke effect")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("<duration>")]),v._v(" 单位为厘秒 (cs) ，100cs = 1000ms = 1s。")])]),v._v(" "),t("p",[t("code",[v._v("\\k<duration>")]),v._v(" 【卡拉 ok跳色效果，一个字一个字间断变色】")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("<duration>")]),v._v("的时间经过之后执行跳色命令。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("{\\k50}{\\k80}Think {\\k25}of {\\k60}me")]),v._v(' 【50cs之后 "Think"从次要颜色跳为主要颜色， 80cs后"of"跳为原色，25cs后"me"跳为原色】')]),v._v(" "),t("p",[t("code",[v._v("\\kf<duration>")]),v._v(" or "),t("code",[v._v("\\K<duration>")]),v._v(" 【卡拉 ok填充效果（与"),t("code",[v._v("\\k")]),v._v("效果相似，但是有从左到右填充效果，较为平滑） 】")]),v._v(" "),t("ul",[t("li",[v._v("在"),t("code",[v._v("<duration>")]),v._v("时间段内填充完色。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("{\\kf80}Think {\\kf25}of {\\kf60}me")]),v._v(' 【80cs内 "Think"从次要颜色由左至右变成主要颜色， 25cs内"of"渐变为原色，60cs内"me"渐变为原色】')]),v._v(" "),t("p",[t("code",[v._v("\\ko<duration>")]),v._v(" 【边框卡拉 ok跳色效果（与"),t("code",[v._v("\\k")]),v._v("效果相似）】")]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("{\\ko50}{\\ko80}Think {\\ko25}of {\\ko60}me")]),v._v(' 【一开始所有边框都没有，50cs之后 "Think"的边框跳色， 80cs后"of"的边框跳色，25cs后"me"的边框跳色】')]),v._v(" "),t("h3",{attrs:{id:"其它特效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它特效"}},[v._v("#")]),v._v(" 其它特效")]),v._v(" "),t("p",[v._v("蒙板可使用面板按钮便捷设置，在视频窗口左侧。")]),v._v(" "),t("h4",{attrs:{id:"矩形蒙板-clip-rectangle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#矩形蒙板-clip-rectangle"}},[v._v("#")]),v._v(" 矩形蒙板 Clip(rectangle)")]),v._v(" "),t("p",[t("code",[v._v("\\clip (<x1>, <y1>, <x2>, <y2>)")]),v._v(" 【只有矩形内的内容被显示】")]),v._v(" "),t("ul",[t("li",[v._v("默认为矩形，以 "),t("code",[v._v("(x1, y1)")]),v._v(", "),t("code",[v._v("(x2, y2)")]),v._v(" 分别为对角线端点坐标。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\clip (0, 0, 704, 245)")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119394830.jpg",alt:""}})]),v._v(" "),t("p",[v._v("[扩] 矩形蒙板 Clip(rectangle)")]),v._v(" "),t("p",[t("code",[v._v("\\iclip (<x1>, <y1>, <x2>, <y2>)")]),v._v("  【只有矩形内的内容不被显示】")]),v._v(" "),t("ul",[t("li",[v._v("默认为矩形，以 "),t("code",[v._v("(x1, y1)")]),v._v(", "),t("code",[v._v("(x2, y2)")]),v._v(" 分别为对角线端点坐标。")]),v._v(" "),t("li",[v._v("iclip的影响效果是整行、无视代码放置位置的。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\iclip (0, 0, 704, 245)")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119395059.jpg",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"图形蒙板-clip-vector-drawing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图形蒙板-clip-vector-drawing"}},[v._v("#")]),v._v(" 图形蒙板 Clip (vector drawing)")]),v._v(" "),t("p",[t("code",[v._v("\\clip (<drawing commands>)")])]),v._v(" "),t("p",[t("code",[v._v("\\clip (<scale>, <drawing commands>)")])]),v._v(" "),t("p",[v._v("[扩]"),t("code",[v._v("\\iclip(<drawing commands>)")])]),v._v(" "),t("p",[v._v("[扩]"),t("code",[v._v("\\iclip(<scale>, <drawing commands>)")])]),v._v(" "),t("ul",[t("li",[v._v("iclip的影响效果是整行、无视代码放置位置的。")]),v._v(" "),t("li",[v._v("代码使用方法、效果与Clip (rectangle) 一致，请结合Drawing tags自己探索。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\clip (1, m 50 0 b 100 0 100 100 50 100 b 0 100 0 0 50 0)")])]),v._v(" "),t("p",[v._v("【绘图1：1，显示圆内字幕】")]),v._v(" "),t("h4",{attrs:{id:"动态变换-animated-transform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态变换-animated-transform"}},[v._v("#")]),v._v(" 动态变换 Animated transform")]),v._v(" "),t("p",[t("code",[v._v("\\t(<style modifiers>)")]),v._v(" 【在字幕持续时间内由\\t前的状态变成( )内状态】")]),v._v(" "),t("p",[t("code",[v._v("\\t(<accel>, <style modifiers>)")]),v._v("       【同上，速度非线性】")]),v._v(" "),t("p",[t("code",[v._v("\\t(<t1>, <t2>, <style modifiers>)")]),v._v(" 【在t1~t2时间内由\\t前的状态变成( )内状态】")]),v._v(" "),t("p",[t("code",[v._v("\\t(<t1>, <t2>, <accel>, <style modifiers>)")]),v._v(" 【同上，速度非线性】")]),v._v(" "),t("ul",[t("li",[v._v("只有以下tags可以用于变换：")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119395211.jpg",alt:""}})]),v._v(" "),t("p",[v._v("[扩]")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119395520.jpg",alt:""}})]),v._v(" "),t("ul",[t("li",[v._v("t1和t2单位为毫秒，时间为累计时间；")]),v._v(" "),t("li",[v._v("t1~t2的时间间隔为特效发生的时间，如果未指定，则为整条字幕持续时间；")]),v._v(" "),t("li",[t("code",[v._v("<accel>")]),v._v("可以实现非线性速度变化，具体为："),t("code",[v._v("<accel>")]),v._v(" 等于 1，速度为线性；"),t("code",[v._v("<accel>")]),v._v("在0和1之间 ，开始速度快结束速度慢；"),t("code",[v._v("<accel>")]),v._v(" 大于 1，开始速度慢结束速度快。")]),v._v(" "),t("li",[v._v("自己实践的时候发现"),t("code",[v._v("\\(i)clip")]),v._v("不好用，不如说和其代码本身说明是矛盾的，无解ING。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("{\\1c&HFF0000&\\t(\\1c&H0000FF&)}Hello!")]),v._v("            【“Hello!”由蓝色变为红色】")]),v._v(" "),t("p",[t("code",[v._v("{\\an5\\t(0,5000,\\frz3600)}Wheee")]),v._v("                          【“Wheee”在5s内匀速逆时针转10圈】")]),v._v(" "),t("p",[t("code",[v._v("{\\an5\\t(0,5000,0.5,\\frz3600)}Wheee")]),v._v("                    【“Wheee”在5s内减速逆时针转10圈】")]),v._v(" "),t("p",[t("code",[v._v("{\\an5\\fscx0\\fscy0\\t(0,500,\\fscx100\\fscy100)}Boo!")]),v._v(" 【Boo!在0.5s内由一个点变成文字】")]),v._v(" "),t("h2",{attrs:{id:"_03-绘图代码-drawing-tags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_03-绘图代码-drawing-tags"}},[v._v("#")]),v._v(" 03 绘图代码 Drawing tags")]),v._v(" "),t("h4",{attrs:{id:"激活绘图命令-toggle-drawing-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#激活绘图命令-toggle-drawing-mode"}},[v._v("#")]),v._v(" 激活绘图命令 Toggle drawing mode")]),v._v(" "),t("p",[t("code",[v._v("\\p<0/1/..n>")])]),v._v(" "),t("p",[t("code",[v._v("\\p1")]),v._v("    【激活绘图命令，1：1绘图】")]),v._v(" "),t("p",[t("code",[v._v("\\p0")]),v._v("    【关闭绘图】")]),v._v(" "),t("p",[t("code",[v._v("\\p2")]),v._v("    【激活绘图命令，用2倍的分辨率绘图，2：1绘图】")]),v._v(" "),t("p",[t("code",[v._v("\\p4")]),v._v("    【激活绘图命令，用大8倍 (2^ (4-1)) 的分辨率绘图，8：1绘图】")]),v._v(" "),t("ul",[t("li",[v._v("n > 0，n为所扩大的范围，用2^（n-1）转化（可使所做图像更精细）。")])]),v._v(" "),t("h4",{attrs:{id:"基线偏移-baseline-offset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基线偏移-baseline-offset"}},[v._v("#")]),v._v(" 基线偏移 Baseline offset")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v("  `\\pbo<y>`   【图像沿y轴平移】\n")])])]),t("ul",[t("li",[v._v("该命令只应用于y轴（纵向）。")])]),v._v(" "),t("p",[v._v("e.g.")]),v._v(" "),t("p",[t("code",[v._v("\\pbo-50")]),v._v("【图像沿Y轴向上平移50像素】")]),v._v(" "),t("p",[t("code",[v._v("\\pbo100")]),v._v("【图像沿Y轴向下平移100像素】")]),v._v(" "),t("h2",{attrs:{id:"_04-绘图命令-drawing-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_04-绘图命令-drawing-commands"}},[v._v("#")]),v._v(" 04 绘图命令 Drawing commands")]),v._v(" "),t("h3",{attrs:{id:"一般使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一般使用"}},[v._v("#")]),v._v(" 一般使用")]),v._v(" "),t("ul",[t("li",[v._v("这些命令必须遵循\\clip（矢量作图）的代码格式，或者位于 {\\p#}和{\\p0}之间。")])]),v._v(" "),t("h4",{attrs:{id:"正方形-square"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正方形-square"}},[v._v("#")]),v._v(" 正方形 Square")]),v._v(" "),t("p",[t("code",[v._v("{\\p1}m 0 0 l 100 0 100 100 0 100{\\p0}")])]),v._v(" "),t("ul",[t("li",[v._v("改变数字可以画出各种四边形，请自行探索~")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119395768.jpg",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"椭圆-rounded-square"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#椭圆-rounded-square"}},[v._v("#")]),v._v(" 椭圆 Rounded square")]),v._v(" "),t("p",[t("code",[v._v("{\\p1}m 0 0 s 100 0 100 100 0 100 c {\\p0}")])]),v._v(" "),t("p",[v._v("【请参照Square的图示理解代码】")]),v._v(" "),t("ul",[t("li",[v._v('此例中c等于 "p 0 0 100 0 100 100"。（具体的请参照后文的补充解释）')])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119400041.jpg",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"几近-圆形-circle-almost"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#几近-圆形-circle-almost"}},[v._v("#")]),v._v(" (几近) 圆形 Circle (almost)")]),v._v(" "),t("p",[t("code",[v._v("{\\p1}m 50 0 b 100 0 100 100 50 100 b 0 100 0 0 50 0{\\p0}")])]),v._v(" "),t("ul",[t("li",[v._v("此处第二个b可省略。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119400261.jpg",alt:""}})]),v._v(" "),t("h3",{attrs:{id:"补充解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充解释"}},[v._v("#")]),v._v(" 补充解释")]),v._v(" "),t("h4",{attrs:{id:"移动-move"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动-move"}},[v._v("#")]),v._v(" 移动 Move")]),v._v(" "),t("p",[t("code",[v._v("m <x> <y>")]),v._v("  【绘制点移动至点"),t("code",[v._v("(x, y)")]),v._v("】")]),v._v(" "),t("ul",[t("li",[v._v("所有的绘图命令都必须用这个标记开始；")]),v._v(" "),t("li",[v._v("如果此前有个未封闭的形状，系统自动将其封闭。")])]),v._v(" "),t("h4",{attrs:{id:"不封闭-移动-move-no-closing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不封闭-移动-move-no-closing"}},[v._v("#")]),v._v(" (不封闭) 移动 Move (no closing)")]),v._v(" "),t("p",[t("code",[v._v("n <x> <y>")]),v._v("     【绘制点移动至点"),t("code",[v._v("(x, y)")]),v._v("】")]),v._v(" "),t("ul",[t("li",[v._v("如果此前有个未封闭的形状，不封闭现有的形状。")])]),v._v(" "),t("h4",{attrs:{id:"线条绘制-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线条绘制-line"}},[v._v("#")]),v._v(" 线条绘制 Line")]),v._v(" "),t("p",[t("code",[v._v("l <x> <y>")])]),v._v(" "),t("p",[v._v("【以现在所在位置和"),t("code",[v._v("(x, y)")]),v._v(" 坐标为两端点绘制一条直线，同时绘制点移动至"),t("code",[v._v("(x, y)")]),v._v("】")]),v._v(" "),t("h4",{attrs:{id:"三次贝塞尔曲线-cubic-bezier-curve"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次贝塞尔曲线-cubic-bezier-curve"}},[v._v("#")]),v._v(" 三次贝塞尔曲线 Cubic Bézier curve")]),v._v(" "),t("p",[t("code",[v._v("b <x1> <y1> <x2> <y2> <x3> <y3>")])]),v._v(" "),t("p",[v._v("【以当前位置为起点，(x3, y3)为终点，点 (x1, y1)和 (x2, y2)为控制点，绘制一条曲线（如下图）】")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static.tamersunion.net/wp-content/uploads/2019031119400411.jpg",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"三次贝塞尔曲线连结-cubic-b-spline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次贝塞尔曲线连结-cubic-b-spline"}},[v._v("#")]),v._v(" 三次贝塞尔曲线连结 Cubic b-spline")]),v._v(" "),t("p",[t("code",[v._v("s <x1> <y1> <x2> <y2> <x3> <y3> …… <xN> <yN>")])]),v._v(" "),t("ul",[t("li",[v._v("至少有三个坐标（当有三个坐标时等同于b命令）；")]),v._v(" "),t("li",[v._v("此命令可以将不同的贝塞尔曲线连在一起。")])]),v._v(" "),t("p",[v._v("【作用概念同b命令，绘制光滑的三次贝塞尔曲线至点N(xN, yN)】")]),v._v(" "),t("h4",{attrs:{id:"贝塞尔曲线扩展-extend-b-spline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#贝塞尔曲线扩展-extend-b-spline"}},[v._v("#")]),v._v(" 贝塞尔曲线扩展 Extend b-spline")]),v._v(" "),t("p",[t("code",[v._v("p <x> <y>")])]),v._v(" "),t("p",[v._v("【将用b命令绘制的曲线扩展至"),t("code",[v._v("(x, y)")]),v._v("】")]),v._v(" "),t("ul",[t("li",[v._v("等同于在s命令后增加一个"),t("code",[v._v("(x, y)")]),v._v("坐标。")])]),v._v(" "),t("h4",{attrs:{id:"封闭曲线close-b-spline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#封闭曲线close-b-spline"}},[v._v("#")]),v._v(" 封闭曲线Close b-spline")]),v._v(" "),t("p",[t("code",[v._v("c")])]),v._v(" "),t("p",[v._v("【封闭用b命令绘制的曲线】")]),v._v(" "),t("h2",{attrs:{id:"end"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[v._v("#")]),v._v(" END")]),v._v(" "),t("p",[v._v("编撰：和路雪")]),v._v(" "),t("p",[v._v("原始刊载："),t("a",{attrs:{href:"https://www.douban.com/note/284573295",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://www.douban.com/note/284573295"),t("OutboundLink")],1)]),v._v(" "),t("p",[v._v("参考资料："),t("a",{attrs:{href:"http://aegisub.cellosoft.com/docs/ASS_Tags",target:"_blank",rel:"noopener noreferrer"}},[v._v("http://aegisub.cellosoft.com/docs/ASS_Tags"),t("OutboundLink")],1)]),v._v(" "),t("blockquote",[t("p",[v._v("本文由和路雪基于Aegisub官方指南自翻整理编写，不保证涵盖官方指南所有内容，如有疏漏，还望见谅。\n本文的主要目的为方便做时间轴的同学迅速上手、快捷查阅代码；本文大部分代码配有英文代码名称，本人英语能力有限，为避免翻译过程中产生误解给您带来不便，如有需要，还请参考原文。\n本文仅为示例，请在实践中熟悉代码。\n此外，本文代码排列顺序与官方指南并非完全一致，顺序实则为本人擅自划分类别排列，还请注意。\n请善用搜索功能，以便快速定位到您想查找的代码。\n编者使用软件版本为2.1.9，如代码格式无效，请注意是否是由您使用的软件版本过高或者过低导致的。")])]),v._v(" "),t("blockquote",[t("p",[v._v("本文在重编撰时为阅读方便对部分标记进行了改动。")])])])}),[],!1,null,null,null);_.default=a.exports}}]);