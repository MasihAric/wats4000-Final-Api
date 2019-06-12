<template>
  <div class="movieTitle">
    <h2>Get information on your favorite Movie!</h2>
    <form v-on:submit.prevent="findMovies">
      <p>
        Enter Movie Title
        <input type="text" v-model="title">
        <button type="submit">Search</button>
      </p>
    </form>
    <ul class="results" v-if="results && results.length > 0">
      <li class="item" v-for="(item,index) of results" :key="index">
        <p>
          <strong>{{item.title}}</strong>
        </p>
        <!-- <p>{{item.overview}}</p> -->
        <p><img v-bind:src="'http://image.tmdb.org/t/p/w150_and_h225_bestv2' + item.poster_path"></p>
        <p>
          <router-link :to="{ name: 'movieDetails', params:{overview: item.overview, popularity: item.popularity} }">Click</router-link>
        </p>
      </li>
    </ul>
    <div class="no-results" v-else-if="results && results.length === 0">
      <h2>No title Found</h2>
      <p>Please adjust your search to find more words.</p>
    </div>
    <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for="(error, index) of errors" :key="index">{{error.message}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "movieTitle",
  data() {
    return {
      results: null,
      errors: [],
      title: '',
      poster_path: ''
    };
  },
  methods: {
    findMovies: function() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "21140d8743f0486b11db9d2bbd4e198d",
            query: this.title
          }
        })
        .then(response => {
          this.results = response.data.results;
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movieTitle {
  font-size: 1.4rem;
}

input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 100px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.02);
  padding: 0.5rem;
}
button {
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  margin: 0 0 0 10px;
}
h1,
h2 {
  font-weight: normal;
}

ul.results {
  list-style-type: none;
  padding: 0;
}

.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 300px;
  height: 330px;
  overflow-y: auto;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
}
.results p {
  font-size: 1rem;
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}

a {
  color: #42b983;
}
</style>