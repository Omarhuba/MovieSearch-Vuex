<template>
  <div class="app">
    <h1>Movie Land</h1>
    <div class="search">
      <input
        type="text"
        v-model="title"
        @keydown.enter="searchMovie"
        placeholder="Movie Name & Enter"
      />
      <!-- <img :src="{../assets/search.svg}" alt="img">Search</img> -->
      <img :src="require(`@/assets/${img}`)" @click="searchMovie">

    </div>
      <div class="movies">
        <ul v-for="movie in movies.Search" :key="movie.id">
          <MovieComponent :movie="movie" />
        </ul>
      </div>
  </div>
</template>

<script>
import MovieComponent from "../components/MovieComponent.vue";
// import {mapActions} from 'vuex'
export default {
  name: "HomeView",
  data() {
    return {
      title: null,
      img: 'search.svg'
    };
  },
  components: { MovieComponent },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  methods: {
    // ...mapActions(['movies']),
    searchMovie() {
      // ...mapActions(['movies', this.title])
      this.$store.dispatch("movies", this.title);
      this.title = null;
    },
  },
  mounted() {
    this.$store.dispatch("movies");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700");
@import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");

* {
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

:root {
  --font-roboto: "Roboto Slab", serif;
  --font-raleway: "Raleway", sans-serif;
}

body {
  font-family: var(--font-roboto);
  background-color: #212426;
}

.app {
  padding: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-size: 3rem;
  letter-spacing: 0.9px;
  background: linear-gradient(
    90deg,
    rgba(249, 211, 180, 1) 0%,
    rgba(249, 211, 180, 0) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
}

.search {
  width: 71%;
  margin: 4rem 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem 1.75rem;
  border-radius: 3rem;
  background: #1f2123;
  -webkit-box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
  box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
}

.search input {
  flex: 1;
  border: none;
  font-size: 1.5rem;
  font-family: var(--font-raleway);
  font-weight: 500;
  padding-right: 1rem;

  outline: none;
  color: #a1a1a1;
  background: #1f2123;
}

.search img {
  width: 35px;
  height: 35px;
  cursor: pointer;
}
.movies {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem, 8rem;
}
</style>
