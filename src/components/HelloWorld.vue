<template>
  <div>
    <button v-bind:key="thing.id" v-on:click="handleClick" v-for="thing in things" >
			Count for {{thing.name}}= {{counter}}
		</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    things: Array,
  },
  data() {
    return {
      counter: 0,
      handleClick: () => {
        this.counter = this.counter + 1;
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
