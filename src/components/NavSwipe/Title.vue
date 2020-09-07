<script>
import _ from 'lodash'
import Info from '../Info'
export default {
  name: 'Title',
  components: {Info},
  props: {
    dot: Boolean,
    type: String,
    info: [Number, String],
    color: String,
    title: String,
    isActive: Boolean,
    disabled: Boolean,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    swipeThreshold: [Number, String]
  },
  computed: {
    style() {
      const {color, isActive, activeColor, type, disabled, inactiveColor} = this
      const style = {}
      const isCard = type === 'card'
      if (color && isCard) {
        style.borderColor = color
        if (!disabled) {
          isActive ? (style.backgroundColor = color) : (style.color = color)
        }
      }
      const titleColor = isActive ? activeColor : inactiveColor
      if (titleColor) {
        style.color = titleColor
      }
      return style
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
    genText() {
      const Text = (
        <span class={{'nav-swipe__text': true, 'nav-swipe__text--ellipsis': this.scrollable}}>{this.title}</span>
      )
      if (this.dot || (!_.isNil(this.info) && this.info !== '')) {
        return (
          <span class="nav-swipe__text-wrapper">
            {this.$slots.default ? <slot /> : Text}
            {<Info dot={this.dot} info={this.info} />}
          </span>
        )
      }
      return Text
    }
  },
  render() {
    const {isActive, style, genText, onClick, disabled} = this
    return (
      <div
        role="tab"
        class="title"
        aria-selected={isActive}
        style={style}
        class={{
          'nav-swipe__tab': true,
          'nav-swipe--active': isActive,
          'nav-swipe--disabled': disabled
        }}
        onClick={onClick}>
        {genText()}
      </div>
    )
  }
}
</script>
