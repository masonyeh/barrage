###基于H5 websocket(Socket io),CSS3 Animation,node.js开发的一个实时弹幕Demo

说明:
通信:websocket
动画:CSS3 Animation

	注:原本动画是使用jquery Animate实现的，
	后面发现jquery使用position:absolute不停地修改left值,页面出现大量的重排重绘，消耗大量的性能，
	于是使用了css3 animation特性实现它；更好的方法是使用Canvas实现；
	
	以上三种方式：1.postion:absolute 2.css3 animation 3.Canvas 在低配安卓机下都会出现跳帧情况；

##动画调优的策略与技巧##
	提升每一帧性能（缩短帧时长，提高帧率）
	避免频繁的重排。
	避免大面积的重绘。
	优化JS运行性能。
##保证帧率平稳（避免跳帧）##
	不在连续的动画过程中做高耗时的操作（如大面积重绘、重排、复杂JS执行），避免发生跳帧。
	若高耗时操作无法避免，则尝试化解，比如：
	将高耗时操作放在动画开始或结尾处。
	将高耗时操作分摊至动画的每一帧中处理。
##针对硬件加速渲染通道的优化##
	通过层的变化效果(如transform)实现位移、缩放等动画，可避免重绘。
	合理划分层，动静分离，可避免大面积重绘。
	使用分层优化动画时，需要留意内存消耗情况（通过Safari调试工具）。
##低性能设备优先调试##
	Android设备优先调试：移动设备的硬件配置一般低于桌面设备，而移动端设备中，Android设备相比于iOS设备性能普遍较差，因此在Andorid设备下性能问题更加明显，幸运的是Android可以借助Chrome自带的远程调试工具方便调试动画性能（Android 4.0+），所以优先调试Android设备可以更早地发现问题，并能更方便地解决问题。

###安装步骤
	第一步
	node install

	第二步
	http://localhost:3000

