本网站使用 Vue 与 Vue router开发的一个单页应用。
使用Normalize.css使所有浏览器的CSS初始化效果进行统一。
使用Animate.css来编写动画效果。
网站采用vh与rem作为单位进行编写，以保证长度位置的描述准确。
在首页的鼠标悬停效果，使用的是css的伪类:hover。
轮播图使用Swiper进行开发，下一个按钮使用了一个小技巧，
先在页面上写一个div然后，设置这个div的高和宽，使这个div为一个正方形，然后设置这个正方形的
border-bottom: 1px solid black;
border-right: 1px solid black;
然后让其选装45度
transform:rotate(45deg);
就做成了一个旋转的效果。
而且多次使用display:flex;弹性布局，帮助实现水平居中和垂直居中。
