<template>
  <div class="movieDetails">
    <h2>Get plot details.</h2>
    <p>
      <router-link to="/">Movie Title</router-link>
    </p>
    <p>
      <strong>{{overview}}</strong>
    </p>
    <p>{{popularity}}</p>
    <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for="(error, index) of errors" :key="index">{{error.message}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "movieDetails",
  data() {
    return {
      overview: null,
      popularity: null,
      errors: []
    };
  },
  created: function() {
    this.overview = this.$route.params.overview;
    this.popularity = this.$route.params.popularity;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.moviedetails {
  font-size: 1.4rem;
}

input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
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
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
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