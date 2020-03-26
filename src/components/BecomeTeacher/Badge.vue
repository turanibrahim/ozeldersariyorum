<template>
  <div id="badge">
    <v-card
      tile
      :class="backgroundColor"
      shaped
      dark
    >
      <v-card-title
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <h1 class="text-center title"> {{ title }} </h1>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-subtitle
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <p class="text-center body-1"> {{ description }} </p>
          </v-col>
        </v-row>
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    backgroundColor: String,
  },
};
</script>

<style>

</style>
