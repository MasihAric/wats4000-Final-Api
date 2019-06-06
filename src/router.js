import Vue from 'vue'
import Router from 'vue-router'
import MovieTitle from '@/views/MovieTitle'
import MovieDetails from '@/views/MovieDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'movieTitle',
      component: MovieTitle
    },
    {
      path: '/MovieDetails',
      name: 'movieDetails',
      component: MovieDetails
    }
  ]
})
