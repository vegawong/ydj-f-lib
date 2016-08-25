
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
