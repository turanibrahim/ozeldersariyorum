<template>
  <v-card
    class="grey lighten-4 mb-4 mx-2"
    shaped
    :height="(height) ? height : '300px'"
  >
    <v-card-title>
      <v-row
        justify="center"
        align="center"
        class="text-center"
      >
        <v-col cols="12"><v-icon x-large :color="iconColor">{{ icon }}</v-icon></v-col>
        <v-col cols="12"><h1 class="title" :class="textColor">{{ title }}</h1></v-col>
      </v-row>
    </v-card-title>
    <v-card-text
      class="text-center"
    >
      <p class="body-1" :class="textColor">
        {{ description }}
      </p>
    </v-card-text>
    <template v-if="buttonUrl">
      <v-card-actions>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="auto">
            <v-btn
              :to="buttonUrl"
              outlined
              :color="(buttonColor) ? buttonColor : 'primary'"
            >
              {{ (buttonName) ? buttonName : 'Button' }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </template>
  </v-card>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    description: String,
    iconColor: String,
    textColor: String,
    height: String,
    buttonUrl: String,
    buttonName: String,
    buttonColor: String,
  },
};
</script>

<style>

</style>
