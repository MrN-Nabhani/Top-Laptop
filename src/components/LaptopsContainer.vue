<template>
  <div class="laptops-display-grid">
    <Laptop
      :key="laptop.id"
      v-for="laptop in filteredLaptops()"
      :laptop="laptop"
    />

  </div>
</template>

<script>
import Laptop from "./Laptop.vue";

export default {
  components: { Laptop },
  props: {
    laptops: Array,
    rangeValue: Number,
    sources: Object,
    brands: Object,
  },
  methods: {
    filteredLaptops() {
			
      return this.laptops.filter(
        (laptop) =>
					this.sources[laptop.source] &&  
					this.brands[laptop.brand] &&
          laptop.price >= this.rangeValue * 10 &&
          laptop.price <= this.rangeValue * 30
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.laptops-display-grid {
  width: 80%;
  padding: 3rem;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  background-color: #ddd;
  overflow: auto;
  height: calc(100vh - 4rem);
}
</style>