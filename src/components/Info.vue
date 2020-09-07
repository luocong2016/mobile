<script>
export default {
  name: 'Info',
  props: {
    dot: Boolean,
    info: [Number, String]
  },
  render() {
    const {dot, info} = this
    return <div class={{info: true, 'info--dot': dot}}>{dot ? '' : info}</div>
  }
}
</script>
<style lang="less" scoped>
.info {
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  min-width: 16px;
  padding: 0 3px;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px - 1px * 2;
  text-align: center;
  background-color: #f00;
  border: 1px solid #fff;
  border-radius: 16px;
  transform: translate(50%, -50%);
  transform-origin: 100%;

  &--dot {
    width: 8px;
    min-width: 0;
    height: 8px;
    background-color: #f00;
    border-radius: 100%;
  }
}
</style>
