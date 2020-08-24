## 事件绑定
### 语法
> 提供了 `mounted`、`activated`、`deactivated`、`beforeDestroy` 方法
```
{
  // ...
  methods: {
    // ...
  },
  mounted() {
    // ...
  },
  beforeDestroy() {
    // ...
  },
  activated() {
    // ...
  },
  deactivated() {
    // ...
  }
}
```

### demo
```
<script>
import {getScroller} from '@/utils/dom/scroll'
import BindEventMixin from '@/mixins/bind-event'

export default {
  mixins: [
    BindEventMixin(function(bind, isBind) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el);
      }
      if (this.observer) {
        const method = isBind ? 'observe' : 'unobserve';
        this.observer[method](this.$el);
      }
      bind(this.scroller, 'scroll', this.onScroll, true);
      this.onScroll();
    })
  ],
  // ...
  methods: {
    onScroll() {
      //...
    }
  },
  create() {
    // compatibility: https://caniuse.com/#feat=intersectionobserver
    if (!isServer && window.IntersectionObserver) {
      this.observer = new IntersectionObserver(
        (entries) => {
          // trigger scroll when visibility changed
          if (entries[0].intersectionRatio > 0) {
            this.onScroll();
          }
        },
        { root: document.body }
      );
    }
  }
}
</script>
```