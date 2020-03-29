<template>
  <v-container class="px-10">
    <v-row
      align="start"
      justify="start"
      dense
    >
      <v-col cols="12">
        <v-row>
          <v-col cols="auto" class="py-0 pr-0 my-0" align-self="center">
            <v-chip
              outlined
              link
              label
              :color="chipColor"
              to="/about"
            >
              {{ title }}
            </v-chip>
          </v-col>
          <v-col cols="auto">
            <v-divider vertical></v-divider>
          </v-col>
          <v-col cols="auto" class="pl-0">
            <h1 class="subtitle-1">{{ subtitle }}</h1>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2" v-for="lesson in lessons" :key="lesson.id">
        <v-card
          class="mx-auto"
        >
          <v-img
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.9)"
          >

            <v-card-title class="py-0">
              <h1 class="subtitle-1">{{ lesson.title }}</h1>
            </v-card-title>
            <v-spacer/>
            <v-card-text class="py-0">
              <v-row
                align="center"
                class="mx-0"
              >
                <v-rating
                  :value="lesson.stars"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="12"
                  class="py-0"
                ></v-rating>

                <div class="ml-2 py-0 my-0">({{ lesson.starCount }})</div>
              </v-row>

              <div class="mb-4 subtitle-1 py-0">
                {{ lesson.price }}₺/ Lesson
              </div>
            </v-card-text>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    title: String,
    lessons: Array,
    chipColor: String,
    subtitle: String,
  },
};
</script>

<style>
</style>
