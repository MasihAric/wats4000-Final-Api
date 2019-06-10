<template>
    <ul class="favorite-movie">
        <li><h2>Favorite Movie</h2></li>
        <li v-if="favoriteMovie.length < 1">No favorite mvoie to display.</li>
        <li v-for="(city,index) in favoriteMovie" :key="index">
          <router-link v-bind:to="{ name: 'MovieTitle', params: { cityId: city.id } }">{{ city.name }}</router-link> <button v-on:click="removeCity(city)" class="remove">x</button>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'FavoriteMovie',
  data () {
    return {}
  },
  props: {
    favoritemovie: Array
  },
  methods: {
    removeMovie: function (city) {
      let mvoieIndex = this.favoritemovie.indexOf(movie);
      this.favoritemovie.splice(movieIndex, 1);
      this.$ls.set('favoriteMovie', this.favormovie)
    }
  }
}
</script>

<style scoped>
.favorite-movie {
  list-style-type: none;
  padding: 10px;
  background: #ccc;
  width: 25%;
  float: right;
}
.remove {
  font-size: 0.8rem;
  color: white;
  background: #AA0000;
  padding: 2px;
  cursor: pointer;
}
</style>