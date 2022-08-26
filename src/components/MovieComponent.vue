<template>
  <div class="movie">
    <!-- <h1>movie</h1> -->
    {{movie.Title}}
  </div>
</template>

<script>
export default {
 name:'MovieComponent',
 props:{
    movie: String,
 }
}
</script>

<style>

</style>