/**
 * @fileOverview 列表
 * @ignore
 */
  
var $ = require('jquery'),
  BUI = require('bui-common'),
  Component = BUI.Component,
  UIBase = Component.UIBase;

/**
 * 列表
 * <p>
 * <img src="../assets/img/class-list.jpg"/>
 * </p>
 * xclass:'list'
 * @class BUI.List.List
 * @extends BUI.Component.Controller
 * @mixins BUI.Component.UIBase.ChildList
 */
var list = Component.Controller.extend([UIBase.ChildList],{
  
},{
  ATTRS : 
  {
    elTagName:{
      view:true,
      value:'ul'
    },
    idField:{
      value:'id'
    },
    /**
     * 子类的默认类名，即类的 xclass
     * @type {String}
     * @override
     * @default 'list-item'
     */
    defaultChildClass : {
      value : 'list-item'
    }
  }
},{
  xclass:'list'
});

module.exports = list;
