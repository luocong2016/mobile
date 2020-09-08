<template>
  <div class="home page">
    <navSwipe :data="dataSource" sticky disabled />
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat laudantium, dolor quidem voluptates
      eveniet consequuntur, maiores sit soluta tempore maxime sapiente ut dignissimos. Impedit adipisci inventore
      deserunt vitae sequi.
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quam sapiente corporis eos quis, ducimus nemo omnis
      perspiciatis animi ad iusto id, voluptates expedita odit? Quisquam aut excepturi laborum. Quis!
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sit incidunt dicta obcaecati est quo, aut deserunt
      porro aliquam consequatur, modi dolorum explicabo saepe ullam enim sed. Nulla, velit neque.
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eveniet sapiente, repellat quod nulla animi
      similique ab officia, et minus laudantium dolorum facere adipisci explicabo est nihil amet velit nostrum.
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nobis culpa quo aspernatur obcaecati explicabo
      nisi dolorum nam, hic magnam rerum maiores, quod voluptates itaque dignissimos officia neque voluptatem ex.
    </div>
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere tenetur ducimus distinctio laborum voluptatum
      tempora recusandae veniam vitae pariatur non natus nisi quo esse, voluptate minus. Et quam adipisci beatae.
    </div>
    <!-- <van-button type="primary" @click="onClick">主要按钮1</van-button> -->
  </div>
</template>

<script>
import NavSwipe from '@/components/NavSwipe/index'
import {mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {NavSwipe},
  data() {
    return {
      dataSource: [
        {
          name: 'non',
          title: '正常显示'
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
          name: 'info',
          title: 'info',
          info: '1'
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
          title: 'replace',
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
  },
  methods: {
    ...mapActions({
      logout: 'user/logout'
    }),
    onClick() {
      this.logout()
    },
    onSpeak() {
      console.log(1)
    }
  }
}
</script>

<style lang="less" scope>
.info-demo {
  span {
    position: relative;
  }
  span + span {
    margin-left: 20px;
  }
}
</style>
