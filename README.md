
# scroll-content

## 内容滚动vue插件

支持横向,纵向滚动,可以配置滚动速度与频率

## Demo

[例子](https://zeminglun.github.io/scrollContent/index.html)

## 使用

插件方式使用
```bash
//main.js
//引入
import scrollContentDirective from './scrollContentDirective'
//导入插件
Vue.use(scrollContentDirective)

//*.vue
<div>
  <div v-scroll-content class="content">
    <p v-for="i in 100">{{''+i+i+i+i}}</p>
  </div>
</div>
<div>
  <div v-scroll-content="{dir: 'x', speed: 20, timeout: 100}" class="row"><span v-for="i in 100">{{''+i+i+i+i}}</span></div>
</div>
```

指令方式使用
```bash
//*.vue
import {scrollContent} from './scrollContentDirective'

export default {
  name: 'app',
  components: {},
  directives: {
    scrollContent
  }
}


<div>
  <div v-scroll-content class="content">
    <p v-for="i in 100">{{''+i+i+i+i}}</p>
  </div>
</div>
<div>
  <div v-scroll-content="{dir: 'x', speed: 20, timeout: 100}" class="row"><span v-for="i in 100">{{''+i+i+i+i}}</span></div>
</div>
```

## 参数
```bash
{
speed: 2,           //滚动速度
dir: 'y',           //滚动方向
timeout: 100        //滚动频率
}
```
