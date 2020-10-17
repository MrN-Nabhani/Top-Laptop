<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <LaptopsContainer
        :laptops="laptops"
        :rangeValue="Number(rangeValue)"
        :sources="sources"
        :brands="brands"
      />
      <LaptopsFilterer
        :rangeValue="Number(rangeValue)"
        :sources="sources"
        :brands="brands"
        @update-range="updateRange"
      />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/TopNav.vue";
import LaptopsContainer from "./components/LaptopsContainer.vue";
import LaptopsFilterer from "./components/LaptopsFilterer.vue";
import laptopsData from "./json/laptopsData";

export default {
  name: "App",
  components: {
    Navbar,
    LaptopsContainer,
    LaptopsFilterer,
  },

  data() {
    return {
      rangeValue: "20",
      sources: { OpenSooq: true, GTS: true, SmartBuy: true },
      brands: { Lenovo: true, Acer: true, HP: true, Asus: true},

      laptops: laptopsData.data,
    };
  },
  methods: {
    updateRange(newRange) {
      this.rangeValue = newRange;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.container {
  display: flex;
}
</style>
