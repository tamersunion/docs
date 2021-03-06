---
title: μtorrent辅种指南
sidebarDepth: 1
---

# μtorrent辅种指南

μTorrent(由于μTorrent不便于书写常作uTorrent) 是一个小巧强劲，全功能的免费BitTorrent客户端。

## 客户端下载
推荐版本（版本号2.2.1）下载地址：[http://www.utorrent.cz/oldversion/?version=2.2.1&build=25534&type=en.setup](http://www.utorrent.cz/oldversion/?version=2.2.1&build=25534&type=en.setup)

最新版官网下载地址：[https://www.utorrent.com/intl/zh_cn/](https://www.utorrent.com/intl/zh_cn/) (国内有时无法访问）
> 下载最新版时选择页面下方的比特流经典版，然后选择BASIC（免费）版本下载。

>以下内容以2.2.1版为主，同时会简要说明最新版和2.2.1版的不同之处。


## 辅种分流
### 打开种子
首先，把要辅种的文件准备好，然后下载种子，用utorrent打开，打开后如下图所示。

![](https://static.tamersunion.net/wp-content/uploads/2019031118202157.jpg)

### 单文件做种
如果是单个文件（视频），点击 **...** 直接寻找对应文件（文件名须和原种子记录的视频文件名一致），点**确定** 。

### 文件夹做种
如果是单个文件夹，点击 **...** 直接寻找该文件夹所在的文件夹（注意是它的上一级文件夹），点确定。


> 新版本此界面有所不同，如下图所示。
>
> ![](https://static.tamersunion.net/wp-content/uploads/2019031118202529.jpg)
>
> 在新版本下，要保存的位置是你预先放好视频（或文件夹）所在的那个文件夹，而不是直接选定这个视频文件（或文件夹），正确选定文件夹后点击确定即可开始。

### 文件检查
点确定开始后若显示 **检查中 已检查 xx.x%** ，如下图。![](https://static.tamersunion.net/wp-content/uploads/2019031118203153.jpg)说明选择的文件夹是正确的，此时utorrent已经识别并正在对文件进行校验，反之，如果显示下载中的话就是文件夹没有选择正确，需要移除该任务后打开种子文件重来一次。若在检查后仍然是下载中，有可能是用于辅种的文件损坏导致与种子记载的文件校验值不符，需要重新获取正确的辅种文件。（这里的辅种文件是指计划要辅种的视频等文件）

### 辅种成功
如果检查后显示 **做种中** ，且状态条为绿色，则表明该种子已经在正常做种，如下图。
![](https://static.tamersunion.net/wp-content/uploads/2019031118203597.jpg)

## 如何限速
有时候如果下载的人数太多，可能会占用太多上传速度。此时可以在设置中限定速度以避免这个问题。

### 打开设置
点击菜单栏的 **选项(Q)** > **设置(P)** ，如下图。

![](https://static.tamersunion.net/wp-content/uploads/2019031118204074.jpg)

### 进入带宽设置
点击左侧 **带宽** 选项，如下图。该窗口即可设置全局的上传与下载速度限制，默认为0，即无限制。

![](https://static.tamersunion.net/wp-content/uploads/2019031118204297.jpg)



### 设置活动任务数上限
另外如果同时进行做种的任务比较多，部分任务显示为「准备做种」时，可以在 **选项(Q)** > **设置(P)**  > **队列** 界面中更改活动任务数上限，如下图所示。

![](https://static.tamersunion.net/wp-content/uploads/2019031118204868.jpg)

## 制作新种子
### 打开制作新种子选项
先准备好要做种的文件或文件夹，启动utorrent，点击菜单栏的 **文件(F)** > **制作新的Torrent(C)...** ，如下图。

![](https://static.tamersunion.net/wp-content/uploads/2019031118205320.jpg)

### 添加文件/文件夹
然后会弹出如下窗口。![](https://static.tamersunion.net/wp-content/uploads/2019031118205940.jpg)点击 **添加文件** （只能选择单个文件）或者 **添加目录** （能选择单个文件夹）来选定要分享的文件。

### 填写Tracker服务器
![](https://static.tamersunion.net/wp-content/uploads/2019031118210229.jpg)
如上图，在**Tracker** 一栏填写Tracker，Tracker是一些服务器提供的追踪服务，可以帮助找到下载这个种子的用户，一般可以从各类BT站获取到，以下为我们平时常用的Tracker列表，将其直接复制到Tracker即可。注：各地址之间要空一行，若复制到输入框后没有空行，请手动添加空行。
>https://tracker.tamersunion.org/announce
>
>http://tr.bangumi.moe:6969/announce
>
>http://nyaa.tracker.wf:7777/announce
>
>http://t.acg.rip:6699/announce

### 确认选项
接下来确认以下内容，确认不要勾选 **开始做种** 和 **私用种子**  ，建议勾选 **保持文件顺序** 。
![](https://static.tamersunion.net/wp-content/uploads/2019031118210718.jpg)

### 创建种子
点 **创建并另存为** 开始制作种子。种子制作完成以后即可将其发布于各类BT站点了。此时μTorrent客户端上会显示该种子为绿色的 **100%** 同时右侧状态栏目会显示 **做种** ，如下图所示，如果有人下载便会有上传速度。![](https://static.tamersunion.net/wp-content/uploads/2019031118211361.jpg)

> 新版本直接在绿色进度条上显示 **做种中** ，如下图，上文中所提到的文件检查过程在新版本中同样会显示在进度条上。![](https://static.tamersunion.net/wp-content/uploads/2019031118211650.jpg)

<br />

> 如果状态条为红色，表明无法连接到任意Tracker，此时可能是网络的连通性有问题。

<br />

本教程到此结束，可能还有诸多有待完善的地方，如有问题请发邮件给[support@tamersunion.net](mailto:support@tamersunion.net)