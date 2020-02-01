import api from '@/service/api'

export default (context, inject) => {
  inject('api', api(context.$axios))
}
