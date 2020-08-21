## 时间格式化
### 语法
```
options
    format <string> 时间格式
    transform <Function> 格式化转换之前调用，改变值
    placeholder <string> 占位符
    failPlaceHolder <string> 错误占位符
```

### demo
``` vue
  <span>{{ '20200715152546' | formatDate }}</span>
  <!-- <span>2020-07-15 15:25:46</span> -->

  <span>{{ 20200715152546 | formatDate({transform: val => String(val)}) }}</span>
  <!-- <span>2020-07-15 15:25:46</span> -->

  <span>{{ '1594796664071' | formatDate({transform: val => +val}) }}</span>
  <!-- <span>2020-07-15 15:04:24</span> -->

  <span>{{ '20200715' | formatDate('YYYY-MM-DD') }}</span>
  <!-- <span>2020-07-15</span> -->

  <span>{{ 's' | formatDate({failPlaceHolder: 'Error'}) }}</span>
  <!-- <span>Error</span> -->
```