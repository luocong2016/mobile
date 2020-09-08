<script>
import Title from './Title'
export default {
  name: 'NavSwipe',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    disabled: Boolean,
    sticky: Boolean,
    titleClass: {
      type: String,
      default: ''
    },
    titleStyle: {
      type: Object,
      default: () => ({})
    },
    icon: {
      type: String,
      default: 'newspaper-o'
    },
    type: {
      type: String,
      validator: value => ['line', 'card'].indexOf(value) !== -1,
      default: 'line'
    }
  },
  methods: {
    handleClick() {
      console.log(1)
    }
  },
  render() {
    const {type, icon, disabled, titleClass, titleStyle, handleClick} = this
    const Content = (
      <div class={['nav-swipe', `nav-swipe--${type}`]}>
        <div class="nav-swipe__nav">
          <div class="nav-swipe__wrap">
            {this.data.map(item => (
              <Title
                disabled={disabled}
                class={titleClass}
                style={titleStyle}
                onClick={handleClick}
                {...{attrs: item}}
              />
            ))}
          </div>
        </div>
        <van-icon name={icon} size="20" />
      </div>
    )
    return this.sticky ? <van-sticky container={this.$el}> {Content} </van-sticky> : Content
  }
}
</script>

<style lang="less" scope>
.nav-swipe {
  position: relative;
  padding: 0 3px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  box-sizing: content-box;
  cursor: pointer;
  font-size: 16px;
  background-color: #fff;
  &__tab {
    & + & {
      padding: 14px 0 5px;
      margin: 0 0 0 14px;
    }
    &:last-child {
      margin-right: 10px;
    }
    display: inline-block;
    cursor: pointer;
  }
  &__nav {
    flex: 1;
    margin-right: 3px;
    overflow: hidden;
    box-shadow: -5px 0 3px -5px rgb(116, 116, 116) inset;
  }
  &__wrap {
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: auto;
    display: -webkit-box;
    -webkit-overflow-scrolling: touch;
  }
  &__list {
    height: 100%;
    box-sizing: content-box;
  }
  &__text-wrapper {
    position: relative;
  }
  &--disabled {
    color: #c8c9cc;
  }
}
.nav-swipe__wrap::-webkit-scrollbar {
  display: none;
}
</style>
