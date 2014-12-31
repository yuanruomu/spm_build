# jquery-dialog [![spm version](http://spmjs.io/badge/jquery-dialog)](http://spmjs.io/package/jquery-dialog)

AUTHOR WEBSITE: [http://ydr.me/](http://ydr.me/)

jquery.fn.dialog 响应式对话框

**五星提示：当前脚本未作优化、未完工，请勿用在生产环境**

__IT IS [A SPM PACKAGE](http://spmjs.io/package/jquery-dialog).__




#USAGE
```
var $ = require('jquery');
require('jquery-dialog')($);

// 1、创建对话框
$.fn.dialog(settings);

// 2、弹出对话框
$.fn.dialog("open",[options],[callback]);

// 3、关闭对话框
$.fn.dialog("close",[callback]);

// 4、根据对话框大小重新定位
$.fn.dialog("position",[callback]);
```



#OPTIONS
```
$.fn.dialog.defaults = {
    // css样式链接地址
    css: "http://festatic.aliapp.com/css/jquery-dialog/default.min.css?v=" + Math.ceil(Date.now() / 86400000),
    // 对话框标题【*】
    title: "Untitled",
    // 是否自动打开（即是否初始化完成就打开）
    autoOpen: false,
    // 对话框宽度【*】
    width: 600,
    // 对话框高度【*】
    height: "auto",
    // 层级【*】
    zIndex: 2000,
    // 在给定高度的时候，对话框内容超过样式【*】
    overflow: "scroll",
    // 动画时间【*】
    duration: 123,
    // 是否可以拖动（需引用jquery.drag.js）
    draggable: true,
    // 是否可以按esc关闭【*】
    closeOnEsc: true,
    // 是否可以单击背景关闭【*】
    closeOnBg: true,
    // 是否允许关闭【*】（设置为false，将导致 closeOnEsc 和 closeOnBg 失效）
    canHide: true,
    // 加载一个url【*】
    url: "",
    // 打开回调
    onopen: $.noop,
    // 关闭回调
    onclose: $.noop
};
```
