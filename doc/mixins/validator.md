## 表单验证
### 语法
> 提供了 `pattern`、`validator` 方法
```
{
  // ...
  methods: {
      // ...
      pattern(type) {
          return validate[type]
      },
      validator(type) {
          return val => validate[type].test(val)
      }
  }
}
```

### demo
```vue
<template>
  <van-form>
    <van-field
      name="email"
      v-model="email"
      label="邮箱地址"
      placeholder="邮箱地址"
      :rules="[{pattern: pattern('email'), trigger: 'onBlur', message: '请填写正确的邮箱地址'}]"
    />
    <van-field
      name="tel"
      v-model="tel"
      label="联系电话"
      placeholder="联系电话"
      :rules="[{validator: validator('telephone'), trigger: 'onBlur', message: '请填写正确的联系电话'}]"
    />
  </van-form>
</template>

<scrtipt>
import validator from '@/mixins/validator'
export default {
  mixins: [validator]
  // ...
}
</scrtipt>
```