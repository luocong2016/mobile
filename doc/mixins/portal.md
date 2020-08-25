## 将元素挂载到指定元素上
### 语法
> 提供 `portal` 方法
```
{
  // ...
  props: {
    getContainer: [String, Function]
  },
  watch: {
    getContainer: 'portal'
  },
  watch: {
    getContainer: 'portal' 
  },
  methods: {
    portal() {
      // ...
    }
  },
  mounted() {
    // ...
  }
}
```

### demo
```
<script>
export default {
  mixins: [PortalMixin(ref: 'wrapper')]
}
</script>
```