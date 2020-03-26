<template>
  <v-container class="px-10">
    <v-row
      align="start"
      justify="start"
      dense
    >
      <v-col cols="12">
        <v-chip
          outlined
          link
          large
          label
          :color="chipColor"
          to="/about"
        >
          {{ title }}
        </v-chip>
        <v-divider class="mt-2"/>
      </v-col>
      <v-col cols="2" v-for="lesson in lessons" :key="lesson.id">
        <v-card
          class="mx-auto"
        >
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.9)"
          >

            <v-card-title class="py-0">{{ lesson.title }}</v-card-title>
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
                  size="14"
                  class="py-0"
                ></v-rating>

                <div class="ml-4 py-0 my-0">{{ lesson.stars }} {{ lesson.starCount }}</div>
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
  },
};
</script>

<style>
</style>
