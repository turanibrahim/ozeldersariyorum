<template>
<div>
  <v-img
    :src="imageSrc"
    :height="imgHeight"
    contain
  ></v-img>
  <h1 class="title" :class="titleColor">
    {{ title }}
  </h1>
  <p>
    {{ description }}
  </p>
</div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    title: String,
    description: String,
    titleColor: String,
    imgHeight: String,
  },
};
</script>

<style>

</style>
