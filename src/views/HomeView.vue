<template>
  <div class="home">
    <h1>Movie Land</h1>
    <div class="movies">
      <input type="text" v-model="title" @keydown.enter="searchMovie" placeholder="Movie Name & Enter">
      <button @click="searchMovie">Search</button>
      <ul v-for="movie in movies.Search" :key="movie.id">
        <MovieComponent :movie="movie"/>
      </ul>

    </div>
  </div>
</template>

<script>
import MovieComponent from '../components/MovieComponent.vue'
export default {
 name: 'HomeView',
 data(){return{
  title: null
 }},
 components:{MovieComponent},
 computed:{
  movies(){
    return this.$store.state.movies
  }
 },
 methods:{
  searchMovie(){
    this.$store.dispatch('movies', this.title)
    this.title = null

  }
 },
 mounted(){
   this.$store.dispatch('movies')
 }
}
</script>

<style>

</style>