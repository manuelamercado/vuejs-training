<template>
  <div class="place" id="place">
    <img :src="location.img" width="235" height="300"/>
    <slot></slot>
    <p>{{ location.desc }}</p>
  </div>
</template>

<script>
  export default {
    name: 'place',
    props: ['location']
  }
</script>

<style scoped>
  .place {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    width: 280px;
    height: 320px;
    -webkit-box-pack: center;
    ustify-content: center;
    background: white;
    border: 1px solid #ddd;
    padding: 20px 20px;
    margin: 10px;
  }
  .place h2 {
    margin: 0;
    text-align: center;
  }
  .place img {
    margin: 10px;
    align-self: center;
  }
</style>
