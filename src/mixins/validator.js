import * as validate from '@/utils/validate'

export default {
  methods: {
    pattern(type) {
      return validate[type]
    },
    validator(type) {
      return val => validate[type].test(val)
    }
  }
}
