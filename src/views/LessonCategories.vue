<template>
  <div id="lessonCategroies">
    <v-row
      justify="center"
      align="center"
    >
      <v-col cols="12" class="text-center mt-4">
        <h1 class="display-1" :class="LandingCardsTextColor">Explore Music Subjects</h1>
      </v-col>
      <v-col cols="6">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="10">
        <CategoryLessons
          :title="category.title"
          :lessons='category.lessons'
          :chipColor='category.chipColor'
          v-for="category in categories"
          :key="category.title"
          :subtitle="category.subtitle"
        />
      </v-col>
      <v-col cols="8" class="text-center mt-4">
        <h1 class="display-1" :class="LandingCardsTextColor">
          Meet a Few of Our Amazing Instructors
        </h1>
        <p class="body-1">
          What works for you? Online lesson or local teacher? Either way,
          your music lessons are live, interactive, and customized for you.
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CategoryLessons from '@/components/Home/CategoryLessons.vue';

export default {
  components: {
    CategoryLessons,
  },
  data() {
    return {
      LandingCardsTextColor: 'indigo--text text--lighten-2',
      categories: [
        {
          title: 'Popular Music Lessons',
          chipColor: 'secondary',
          subtitle: 'Amazing instructors',
          lessons: [
            {
              lessonId: 1,
              title: 'Piano Lessons',
              stars: 4,
              starCount: 1254,
              price: 12,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            {
              lessonId: 2,
              title: 'Signing Lessons',
              stars: 3,
              starCount: 2421,
              price: 47,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            {
              lessonId: 3,
              title: 'Guitar Lessons',
              stars: 5,
              starCount: 7521,
              price: 32,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            {
              lessonId: 4,
              title: 'Violin Lessons',
              stars: 2,
              starCount: 542,
              price: 65,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
          ],
        },
        {
          title: 'Staff Picks',
          chipColor: 'primary',
          subtitle: 'Get closer to what inspires you',
          lessons: [
            {
              lessonId: 1,
              title: 'Turkhis Lessons',
              stars: 5,
              starCount: 99999,
              price: 958,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            {
              lessonId: 2,
              title: 'English Lessons',
              stars: 3,
              starCount: 2421,
              price: 1,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            {
              lessonId: 3,
              title: 'German Lessons',
              stars: 5,
              starCount: 7521,
              price: 32,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            {
              lessonId: 4,
              title: 'Russian Lessons',
              stars: 1,
              starCount: 542,
              price: 0,
              image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>

</style>
