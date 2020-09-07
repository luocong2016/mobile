
## props
|参数 | 说明 | 类型 | 默认值|
|---|---|---|---|
|data | 数据 | Array\<data> | []|
|disabled | 禁用 | boolean | false|
|sticky | 是否使用粘性定位布局	| boolean	| false|
|title-class | 自定义标题class | string | -|
|title-style | 自定义标题样式 | any | -|
|type | 样式风格类型 enum['line', 'card'] | string | 'line'|

## evnet
|参数 | 说明 | 类型|
|---|---|---|
|change | 当前激活的标签改变时触发	| { name：标识符，title：标题 }|
|click | 点击标签时触发 | {name：'标识符'，title：'标题'}|
|disabled | 点击被禁用的标签时触发 | { name：标识符，title：标题 }|
|scroll |	滚动时触发，仅在 sticky 模式下生效 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 }|

## slots
|参数 | 说明|
|---|---|
|nav-left | 标题左侧内容|
|nav-right | 标题栏右侧内容|


## data
|参数 | 说明 | 类型 | 默认值|
|---|---|---|---|
|badge | 图标右上角徽标的内容 | number\|string | -|
|disabled | 禁用状态 | boolean | false|
|dot | 是否在标题右上角显示小红点 | boolean | false|
|name | 标签名称 | number\|string | -|
|replace | 是否在跳转时替换当前页面历史 | boolean | -|
|titleStyle | 自定义标题样式 | any | -|
|to | 点击后跳转的目标路由对象，同 vue-router 的 to 属性 | string\|object | -|
|url | 点击后跳转的链接地址 | string | -|

## demo
```vue
<template>
  <div>
    <nav-swipe :data="dataSource" />
    <nav-swipe :data="dataSource" disabled />
    <nav-swipe :data="dataSource" type="card" />
    <nav-swipe :data="dataSource" title-class="red" />
    <nav-swipe :data="dataSource" title-style="red" />
  </div>
</template>

<script>
export default {
  name: 'NavSwipeDemo',
  data() {
    return {
      dataSource: [
        {
          name: 'non',
          title: '正常显示',
        },
        {
          name: 'disabled',
          title: 'disabled',
          disabled: true
        },
        {
          name: 'dot',
          title: 'dot',
          dot: true
        },
        {
          name: 'badge',
          title: 'badge',
          badge: '1'
        },
        {
          name: 'url',
          title: 'url',
          url: '1'
        },
        {
          name: 'to',
          title: 'to',
          to: {}
        },
        {
          name: 'replace',
          title: '',
          replace: '/2'
        },
        {
          name: 'titleStyle',
          title: 'titleStyle',
          titleStyle: {
            background: 'yellow'
          }
        }
      ]
    }
  }
}
</script>
```