
#### tooltips

_usage:_

- html

  ```html

  <input type="button"
   name="name"
   value="button"
   ydj-role="tooltips"
   title="tips left"  
   pos="right" />

  ```
  - ydj-role="tooltips": 自动实例化插件的属性标记

  - title: 提示文字

  - pos: 提示位置, `left/top/right/bottom`

- javascript

  ```javascript

  $(el).tooltips(option);

  ```

  - option.content: 提示文字

  - option.pos: 提示位置 `left/right/top/bottom`


#### fullpage

  第三方fullpage插件, 基于`jquery`

  [github地址](https://github.com/alvarotrigo/fullPage.js/)

  [demo地址](http://alvarotrigo.com/fullPage/)

  CDN地址:

   [http://s1.yidejia.com/YDJ/fullPage.min.js](http://s1.yidejia.com/YDJ/fullPage.min.js)

  [http://s1.yidejia.com/YDJ/fullPage.min.css](http://s1.yidejia.com/YDJ/fullPage.min.css)



#### toast

  toast提示插件

  _usage:_

  ```javascrpt

  $.toast(options);

  // options DEFAULTS
  //{
  //  text: '',
  //  heading: '',
  //  showHideTransition: 'fade',
  //  allowToastClose: true,
  //  hideAfter: 3000,
  //  loader: false,
  //  loaderBg: '#9EC600',
  //  stack: 5,
  //  position: 'mid-center',
  //  bgColor: false,
  //  textColor: false,
  //  textAlign: 'left',
  //  icon: false,
  //  beforeShow: function() {},
  //  afterShown: function() {},
  //  beforeHide: function() {},
  //  afterHidden: function() {}
  //}
  ```

  `options`可以是string,array,object,  如果是string,则以默认的options提示string内容, array则以ul形式展示提示内容
