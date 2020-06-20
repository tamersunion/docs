---
title: 证书使用指南
sidebarDepth: 1
---

# 证书使用指南

##  Windows

### 浏览器兼容性测试
||系统、浏览器|
|------|------|
|测试环境|Windows 10 专业版 1809|
|测试通过的浏览器|Google Chrome浏览器<br />Microsoft Edge浏览器<br />Opera浏览器<br />360安全浏览器<br />360极速浏览器<br />QQ浏览器<br />百度浏览器<br />UC浏览器<br />搜狗浏览器<br />猎豹浏览器<br />世界之窗浏览器<br />Internet Explorer|
|无法使用的浏览器|Firefox浏览器（点击 [这里](#firefox（桌面平台）) 查阅该浏览器的专门导入教程）|

### 证书导入指南

1. 如下图，双击打开获取的pfx证书文件，或者 **右键** 选择 **安装PFX(I)** 。

![](https://static.tamersunion.net/wp-content/uploads/2019031117581567.png)

2. 如下图，储存位置选择 **当前用户(C)** ，点击 **下一步(N)** 。

![](https://static.tamersunion.net/wp-content/uploads/2019031117581862.jpg)

3. 如下图，此处直接点击 **下一步(N)** 。

![](https://static.tamersunion.net/wp-content/uploads/2019031117582328.jpg)

4. 如下图，密码框 **输入证书密码** ，其他保持与图中一致，点击 **下一步(N)** 。

![](https://static.tamersunion.net/wp-content/uploads/2019031117582682.jpg)

5. 如下图，此处将选项改为 **将所有的证书都放入下列存储(P)** 。

![](https://static.tamersunion.net/wp-content/uploads/2019031800053767.png)

6. 点击证书存储输入框右边的 **浏览(R)** ，选择 **个人** ，并点 **确定** 。

![](https://static.tamersunion.net/wp-content/uploads/2019031117583950.jpg)

7. 然后点击 **下一步(N)** 继续。

![](https://static.tamersunion.net/wp-content/uploads/2019031117584117.jpg)

8. 如下图，点击 **完成(F)** 以完成证书安装。

![](https://static.tamersunion.net/wp-content/uploads/2019031117584799.jpg)

9. 完成上述步骤后，证书已经导入完毕。打开浏览器（Firefox浏览器请见专用教程）访问，此时会弹窗要求选择证书（如下图），点击 **确认** 后即可访问。

![](https://static.tamersunion.net/wp-content/uploads/2019031800161958.png)
有时窗口会显示多个证书，此时需要选择正确的证书才能成功访问。

### 证书删除指南
1. 过期或者失效的证书如要删除，可打开 **Internet选项** ，如下图所示（可在 **开始菜单中搜索** 或者 **打开IE浏览器后在选项里打开** ）。

![](https://static.tamersunion.net/wp-content/uploads/2019031117584950.jpg)

2. 如下图，点击 **内容** 选项卡，点击 **证书(C)** ，将会弹出证书窗口。

![](https://static.tamersunion.net/wp-content/uploads/2019031117585168.jpg)

3. 如下图，此窗口可查阅已安装证书列表（第一个选项卡即为个人证书），选中对应证书后可对证书进行查看、导出或删除等操作。

![](https://static.tamersunion.net/wp-content/uploads/2019031117585518.jpg)

## macOS

### 浏览器兼容性测试
||系统、浏览器|
|------|------|
|测试环境|macOS 10.14|
|测试通过的浏览器|Safari|
|无法使用的浏览器|Firefox浏览器（点击[这里](#firefox（桌面平台）)查阅该浏览器的专门导入教程）|

### 证书导入指南
1. 如下图，在Finder里双击打开获取的pfx/p12证书文件。

![](https://static.tamersunion.net/wp-content/uploads/2019031118015383.png)

2. 如下图， **输入证书密码** ，将证书导入至钥匙串。

![](https://static.tamersunion.net/wp-content/uploads/2019031118015560.png)

3. 打开 **钥匙串** 应用，找到安装的证书，如下图，双击打开。

![](https://static.tamersunion.net/wp-content/uploads/2019031118015885.png)

4. 如下图，展开 **信任** 下拉栏，点击 **使用此证书时** 下拉框，选择 **始终信任** 。然后关闭窗口，此时会提示输入你的 **MAC的登录密码** ，输入密码确认后即可保存证书信任设置。

![](https://static.tamersunion.net/wp-content/uploads/2019031118020153.png)

5. 如下图，点击 **钥匙串** 左下角的证书，找到安装的证书。

![](https://static.tamersunion.net/wp-content/uploads/2019031118020481.png)

6. 如下两图， **点击证书旁边的展开按钮** ，展开密钥，右键点击密钥，点击 **显示简介** 。

![](https://static.tamersunion.net/wp-content/uploads/2019031118020982.png)

![](https://static.tamersunion.net/wp-content/uploads/2019031118021285.png)

7. 如下两图，点击 **访问控制** ，然后勾选 **允许所有应用程序访问此项目** ，点击关闭，此时会向您询问密码（一般密码为空，如果密码错误，请尝试输入MAC登录密码）。

![](https://static.tamersunion.net/wp-content/uploads/2019031118021529.png)

8. 打开Safari浏览器，访问档案库，如下图，此时会弹窗要求选择证书，点击 **继续** ，即可访问。如需要密码，可留空直接确认或者尝试输入你的MAC登录密码。

![](https://static.tamersunion.net/wp-content/uploads/2019031118022245.png)

> 有时窗口会显示多个证书，此时需要选择正确的证书才能成功访问。有时窗口会显示多个证书，此时需要选择正确的证书才能成功访问。

### 证书删除指南
1. 过期或者失效的证书如要删除，可打开 **钥匙串** 。

2. 找到需要删除的证书，选中该证书，右键点击，然后选择删除证书。

设备提供：笑笑 DiramAid

## Linux

### 浏览器兼容性测试
||说明|
|---|---|
|测试环境|Ubuntu 18.04 LTS|
|测试通过的浏览器|Firefox浏览器<br />Chrome浏览器<br />Chromium浏览器<br />Opera浏览器|
|补充说明|Linux各发行版上的大多数浏览器使用浏览器自带的证书管理器，不调用系统证书，因此证书安装需要在各自浏览器选项中安装证书。其中Firefox浏览器在各平台中证书导入步骤基本一致，因此请Firefox浏览器用户点击 [这里](#firefox（桌面平台）) 查阅，此处不再介绍。|

### 证书导入指南
以下以Ubuntu 18.04 LTS平台上的Chrome浏览器/Chromium浏览器为例，简要介绍导入过程。

1. 打开Chrome/Chromium浏览器，点击 **右上角三点** 图标，如下图。

![](https://static.tamersunion.net/wp-content/uploads/2019040113012297.png)

2. 点击 **设置(S)** 进入设置界面，如下图。

![](https://static.tamersunion.net/wp-content/uploads/2019040113041865.png)

3. 打开设置页面后，拉至页面最底部，点击 **高级** 按钮展开高级选项，如下图。

![](https://static.tamersunion.net/wp-content/uploads/2019040113093414.png)

4. 如下图，继续下拉，点击 **管理证书** 选项。

![](https://static.tamersunion.net/wp-content/uploads/2019040113131898.png)

5. 如下图，此时已进入 **管理证书** 界面，默认选项卡是 **您的证书** 界面，点击右边的 **导入** 按钮，选取证书文件。

![](https://static.tamersunion.net/wp-content/uploads/2019040113175254.png)

6. 如下图，选取证书后，会要求输入 **证书密码** ，将证书密码输入在此框内，点击 **确定** 。

![](https://static.tamersunion.net/wp-content/uploads/2019040113210028.png)

7. 如下图，证书导入成功。

![](https://static.tamersunion.net/wp-content/uploads/2019040113220461.png)

8. 此时访问，会弹出 **选择证书** 选项框，选择对应证书（有多份证书时），点击 **确定** 即可访问。

![](https://static.tamersunion.net/wp-content/uploads/2019040113253589.png)

> Opera浏览器可先打开 **我的导航** 页面（新标签页），然后点击页面右上角的 **快速设置** 按钮，下拉到最底部，点击 **转到浏览器设置** 即可打开浏览器设置界面，其余步骤和Chrome/Chromiun浏览器一致。


> Firefox浏览器请点击<a href="./firefox/" target="_self">这里</a>查阅其专门导入教程。


> 受篇幅限制不再介绍其他浏览器，大体导入过程都类似Chrome/Chromium浏览器，都是先打开设置界面，找到 **管理证书** 或者类似选项，便可以进行导入证书步骤。

### 证书删除指南
1. 如需删除过期或失效的证书，首先打开Chrome/Chromium浏览器。
2. 打开Chrome/Chromium浏览器的 **设置(S)** > **高级** > **管理证书** 。在 **您的证书** 选项卡下即为所有当前已安装的个人证书，点击相应证书右边的三点图标后即可进行查看、导出、删除等操作。


## Firefox（桌面平台）

### 浏览器兼容性测试
||说明|
|---|---|
|测试环境|Windows 10 专业版 1809<br />Mac OS 10.14<br />Ubuntu 18.04 LTS|
|测试通过的浏览器|Firefox浏览器|
|补充说明|Firefox浏览器自有证书管理器，不调用系统证书，因此需要在浏览器选项中导入证书。本指南以Windows平台为例，其他桌面平台的Firefox浏览器相关操作大致相同。Firfox Android/iOS 版不支持调用证书，请选用其他浏览器。|


### 证书导入指南

本指南以Windows平台为例，其他平台的Firefox浏览器导入方式大致相同。

1. 打开Firefox浏览器，点击 **右上角三杠** 按钮，点击 **选项** （或 **首选项** ）打开Firefox的选项界面，如下图。

![](https://static.tamersunion.net/wp-content/uploads/2019031118042527.jpg)


2. 点击左侧菜单栏的 **隐私与安全** 项，下拉至底部证书部分，点击 **查看证书(C)...** ，此时会打开一个 **证书管理器** 窗口。将选项卡切换到 **您的证书** ，点击 **导入(M)...** ，然后会要求选择证书文件。

![](https://static.tamersunion.net/wp-content/uploads/2019031118042814.jpg)


3. 选择证书文件并确定后会弹出需要输入密码的提示框，如下图， **输入证书密码** ，点击 **确定** 。

![](https://static.tamersunion.net/wp-content/uploads/2019031118043283.jpg)


4. 点击确定后导入成功，此时直接访问即会弹出选择证书的提示，点击 **确定** 即可成功访问。

![](https://static.tamersunion.net/wp-content/uploads/2019031118043445.jpg)

### 证书删除指南
1. 如需删除过期或失效的证书，首先打开Firefox浏览器。
2. 打开Firefox的 **选项** > **隐私与安全** > **查看证书(C)...** ，打开证书管理器，在 **您的证书** 选项卡下即为所有当前已安装的个人证书，选中相应证书后即可进行查看、备份、删除等操作。

![](https://static.tamersunion.net/wp-content/uploads/2019031118043445.jpg)

## Android

### 浏览器兼容性测试

||说明|
|---|---|
|测试环境|MIUI10（Android 8.0.0）<br />smartisan os（Android 8.1.0）|
|测试通过的浏览器|Google Chrome浏览器<br />Microsoft Edge浏览器<br />小米浏览器（MIUI10 Android 8.0.0）<br />部分Android系统自带浏览器|
|无法使用的浏览器|Firefox浏览器<br />Opera浏览器<br />UC浏览器<br />QQ浏览器<br />猎豹浏览器<br />搜狗浏览器<br />百度浏览器<br />360极速浏览器|
|补充说明|大部分版本较高的Android系统自带浏览器可以调用客户端证书访问，因安卓系统类型过多无法一一测试，请自行测试是否兼容，若访问时未弹出选择证书提示则说明不兼容。|

### 证书导入指南

1. 先将证书下载至手机中，打开浏览器访问，如下图，此时会弹出 **找不到任何证书** 提示，点击 **安装证书** 。

![](https://static.tamersunion.net/wp-content/uploads/2019031118061459.png)

2. 从你的手机中找到你刚才下载的证书并选中。此时会弹出要求输入密码的提示框（如下图），输入 **证书密码** ，点击 **确定** 继续下一步。（部分手机可能不会弹出文件选择选项，而是要求你将证书文件放到手机根目录上才能识别）

![](https://static.tamersunion.net/wp-content/uploads/2019031118061732.png)

3. 如下图，您可以为该证书取一个方便区分的名称，或者直接保留系统提供的默认值，直接点确定继续下一步。

![](https://static.tamersunion.net/wp-content/uploads/2019031118061985.png)

4. 如下图，选中安装好的证书，然后点击 **选择** ，之后即可成功访问。

![](https://static.tamersunion.net/wp-content/uploads/2019031118062299.png)

### 证书删除教程
1. 若需要删除过期或失效的证书，部分Android系统并不提供删除单个证书的功能，此时只能使用清除凭据功能将所有自行安装的证书清除。

2. 打开系统的 **设置** 应用，找到加密与凭据选项（不同的手机命名和入口略有不同，其中MIUI10位于 **更多设置** > **系统安全** > **加密与凭据** ）。

3. 点击 **清除凭据** 按钮，此时会提示是否移除所有内容，点击 **确定** ，即可完成证书的清除。

> 提示：此时会将所有证书清除，需要重新安装所需的证书。

## iOS/iPadOS

### 浏览器兼容性测试
||说明|
|---|---|
|测试环境|iOS11（iPhone 7）<br />iOS12（iPad Pro 10.5）|
|测试通过的浏览器|Safari|
|无法使用的浏览器|全部第三方浏览器|
|补充说明|因iOS系统限制，仅Safari浏览器可使用客户端证书访问。|


### 证书导入指南

1. 使用Safari从网页版邮箱或者其他渠道下载证书（QQ、微信等App无法安装证书），也可以使用邮件App登录邮箱打开附件，此时会提示 **此网站正尝试打开“设置”以向你显示一个配置描述文件。您要允许吗？** ，点击 **确定** ，此时会进入 **安装描述文件** 界面（如下图）。（如果提示在设置中安装描述文件，请打开设置App，点击 **通用** > **描述文件** ，点击刚才导入的描述文件，便可以继续执行安装流程。）

![](https://static.tamersunion.net/wp-content/uploads/2019031118072934.png)

2. 点击右上角的 **安装** ，此时会要求输入您的手机密码（如下图），输入密码即可继续。

![](https://static.tamersunion.net/wp-content/uploads/2019031118073196.png)

3. 如下两图，此时会弹出警告称 **此描述文件未签名** ，不必理会，继续点击右上角的 **安装** 并确认 **安装** 。

![](https://static.tamersunion.net/wp-content/uploads/2019031118073676.png)

![](https://static.tamersunion.net/wp-content/uploads/2019031118073811.png)

4. 如下图，此时会要求输入证书的密码，输入证书密码后点击 **下一步** 。

![](https://static.tamersunion.net/wp-content/uploads/2019031118074318.png)

5. 至此，证书安装已经完成，此时会提示 **已安装描述文件** （如下图），点击 **完成** 关闭。

![](https://static.tamersunion.net/wp-content/uploads/2019031118074528.png)

6. 重启Safari浏览器，第一次访问会提醒请求证书，点击确定即可成功访问。

设备提供：Zweny