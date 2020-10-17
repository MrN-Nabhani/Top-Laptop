<template v-once>
  <nav>
    <h1>TopLaptop</h1>
    <div>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/MrN-Nabhani/Top-Laptop">View Source Code on GitHub</a>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
// import { set } from 'vue/types/umd';
export default {
	data() {
    return {
			setFilteringOptions: false
    };
	},
	
	methods: {
		toggleFilters(){
			this.$set(this.setFilteringOptions, !this.setFilteringOptions);
		}
	}
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #727d80;
	color: #fff;
  z-index: 0;
}

ul {
  display: flex;

  li {
    list-style: none;
    padding: 0 1rem;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}

.toggle-filtering-options{

}

</style>