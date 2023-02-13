# Nextfly——Butterfly和Next的完美融合

## 使用该主题需要一定的基础和动手能力，使用前请详细查看readme和Next文档

## 关于主题

该主题基于[Next8](https://github.com/next-theme/hexo-theme-next)和[Butterfly](https://github.com/jerryc127/hexo-theme-butterfly)

从根本上来说Nexterfly是Next主题和Butterfly主题缝合的产物，所以这玩意儿本质上就是个缝合怪。

我制作这个主题是因为不习惯Next没有一个全屏着陆页，所以才缝合这两个主题，主题为自用，不喜勿喷。

## 特点

- 和Butterfly一样的全屏着陆页

- Butterfly的Subtitle一言和Title

- Next的简约

- 更强的个性化

- <del>更加耐造</del>

### 一些没有解决的问题

- 因为next和butterfly的渲染架构不同，某些功能并不能实现，比如Subtitle的打字特效

- 因为本人的技术限制，Butterfly部分（Subtitle，Title，index img）需要通过更改swig文件来配置

- 如果需要更改整个Butterfly的部分需要重新从Butterfly主题中生成并植入到_layout.swig中
  
## 使用

直接贴到themes文件夹中，theme config的配置和Next一样。该仓库已经预配置了部分js框架

### 更改Butterfly部分的壁纸

进入到

```bash
[blog]/theme/nexterfly/layout/_layout-butterfly.swig
```

中更改


```bash
style="background-image: url('/img/background.jpg')">
```

的url部分

### 更改Next部分的壁纸

请到

```bash
[blog]/nexterfly/source/css/main.styl
```

中更改，有注释

### 更改Butterfly部分的Title和Subtitle

找到

```bash
<div id="site-info">
                <h1 id="site-title"><font color="white">Nexterfly</font></h1>
                <div id="site-subtitle"><font color="white"><span id="subtitle">希望你别像风，在我这里面掀起万翻般波澜，却又跟云去了远方。</span></font></div>
            </div>
```

更改其中相应部分

**当已经配置了一言时，请不要更改Subtitle。该仓库已默认配置一言，如需自定义请到_layout-butterfly.swig中更改html代码或从Butterfly重新生成页面。（不建议更改Subtitle部分，因为非常麻烦）**

## 插件

因为该主题的底层仍然为Next主题，所以继承了Next支持多插件的特点。插件的安装和Next一样。

## Next样式

该仓库默认配置Mist样式，其他样式依然可以使用。圆角仅适配了Mist样式，如需配置请修改

```bash
[blog]/nexterfly/source/css/main.styl
```

## 更多

更多请见Next主题的文档

## 更新

本项目会与Next项目保持同步更新（大概......如果没出啥事的话......

## 鸣谢

感谢Akilarの糖果屋的各位群友们给予的帮助和支持

特别感谢Akilarの糖果屋的 空巷一人 帮我解决网页排版问题

感谢Next和Butterfly给我的灵感
