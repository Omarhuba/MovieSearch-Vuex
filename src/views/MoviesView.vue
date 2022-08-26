<template>
  <div class="movies-view">
    <article>
    <MovieComponent v-if="movie" :movie="movie"/>
      <article v-else>
        Movie Not Found
      </article>
    </article>
  </div>
</template>

<script>
import MovieComponent from '../components/MovieComponent.vue'
export default {
  name: 'MovieComponent',
  components:{MovieComponent},
  props:{
    movie: Object,
  }

}
</script>

<style>

</style>