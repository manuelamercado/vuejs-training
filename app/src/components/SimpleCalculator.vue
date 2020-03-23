<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <div class="row">
      <input v-model.number="num1" type="number">
      <span>+</span>
      <input v-model.number="num2" type="number">
      <span>=</span>
      <span>{{ num1 + num2 }}</span>
      <span>Congratulations! you won the {{ num1 | placeTH }}</span>
    </div>
    <div class="row second">
      <select v-model="name">
        <option :key="index" v-for="(food, index) in foods">
          {{ food }}
        </option>
      </select>
      <p v-if="name !== ''">My favorite kind of taco is {{ name }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      msg: String
    },
    data() {
      return {
        name: '',
        num1: 0,
        num2: 0,
        foods: ['jalapeño', 'chicken', 'beef'],
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #42b983;
  }

  h3 {
    margin: 40px 0 0;
  }

  input {
    width: 50px;
  }

  input, span {
    padding: 10px;
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .row {
    margin: 50px;
    display: flex;
    justify-content: center;
    font-family: 'Work Sans', sans-serif;
  }

  span {
    width: 20px;
  }

  .second {
    font-size: 18px;
      p {
        margin-left: 20px;
      }
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
</style>
