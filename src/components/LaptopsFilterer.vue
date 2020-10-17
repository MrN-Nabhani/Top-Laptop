<template>
  <div class="filterer-wrapper">
    <div>
      <div class="filtering-option">
        <header>Price Between {{rangeValue*10}} - {{rangeValue*30}} JOD</header>
        <div class="inputControl-range">
          <input v-model="range" type="range" min="10" step="10" @change.prevent="updateRange"/>
        </div>
      </div>

      <div class="filtering-option">
        <header>Website Sources:</header>
        <div class="flex-wrapper">
					<div :key="index" v-for="(sourceKey, index) in Object.keys(sources)"><input v-model="sources[sourceKey]" type="checkbox"> {{sourceKey}}</div>
        </div>
      </div>

      <div class="filtering-option">
        <header>Laptop Brand:</header>
        <div class="flex-wrapper">
          <div :key="index" v-for="(brandKey, index) in Object.keys(brands)"><input v-model="brands[brandKey]" type="checkbox"> {{brandKey}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		rangeValue: Number,
		sources: Object,
		brands: Object
	},

	data(){
		return{
			range: this.rangeValue
		}
	},

	methods: {
		updateRange(){
			this.$emit("update-range", this.range);
		}
	}
};
</script>

<style lang="scss" scoped>
.filterer-wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 20%;

  /* text-align: center; */
  font-size: 17pt;
}

.filtering-option {
  /* text	 */
  margin: 1rem 0;
  padding: 1rem 0;
  border-bottom: 2px solid #ddd;
}

.flex-wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.inputControl-range {
  text-align: center;
  input {
    width: 60%;
  }
}
</style>