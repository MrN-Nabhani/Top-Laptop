<template>
  <div class="laptopCard">
    <h2 class="title">{{laptop.title}}</h2>
    <img class="laptop-img" loading="lazy" :src="laptop.imgURL" />
    <div class="info">
      <div class="desc" v-if="laptop.specs.length > 0">
				<p  :key="index" v-for="(spec, index) in laptop.specs">{{spec}}</p>
      </div>

			<div class="desc" v-if="laptop.specs.length === 0">
				<p> no additional info avaliable. </p>
			</div>

    </div>
    <a target="_blank" :href="laptop.originalLink">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/External_link_font_awesome.svg" />
    </a>

    <p class="price">{{laptop.price}} JOD</p>
    <small class="source">source: {{laptop.source}}</small>
  </div>
</template>

<script>
export default {
  props: { laptop: Object },
};
</script>

<style lang="scss" scoped>
.laptopCard {
  position: relative;
  margin: 0.5rem;

  width: 325px;
  height: 300px;

  background-color: rgb(241, 244, 245);
  &:hover {
    transform: scale(1.20); //* Control Zoom

    box-shadow: 0px 0px 20px #000;
    z-index: 10;

    .laptop-img {
      left: -25px;
      box-shadow: 6px 6px 25px 0px #000;
    }
    .info {
      top: 20%;
      height: 200px;
      .desc {
        max-height: 100%;
        overflow: auto;
      }
    }
  }
}
.title {
  text-align: center;
	width: 100%;
	height: 12%;
	padding: .5rem;
	overflow: hidden;
}

.price {
  position: absolute;
  bottom: 20px;
  left: 5px;

  font-size: 18pt;
	font-weight: bold;
	color: green;
}

.source{
	width: 100%;
	position: absolute;
	bottom: 2px;
	text-align: center;
}

.laptop-img {
  position: absolute;
  left: 0px;
  transition: left 0.5s;
  width: 200px;
}

.info {
  position: absolute;
	width: 64%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 10px;
  height: 120px;

  background-color: rgba(255, 255, 255, 0.801);

  top: 50%;
  left: 30%;
  transition: 0.5s;

  .desc {
    margin: 1rem;
    max-height: 70px;
    overflow: hidden;
    text-align: center;
		font-size: 10pt;
    p {
      padding: 1rem 0;
			border-bottom: 1px solid #ccc;
			&:last-child{ border: none;}
    }
  }
}

a {
  position: absolute;
  bottom: -10px;
  right: -10px;

  padding: 1rem;
  width: 70px;
  height: 70px;
  border-radius: 50%;

  background-color: #727d80;
  cursor: pointer;
  /* transition: 0.5s; */
  &:hover {
    /* transform: scale(1.5); */
    /* font-weight: bold; */
    text-shadow: 0px 0px 15px blue;
    color: white;
  }
}
</style>