<template>
  <div id="dropdownCard">
    <v-card shaped class="py-0 my-0" color="primary">
      <v-card-title>
        <v-row
          justify="center"
          align="center"
        >
          <v-col cols="12" class="my-0 py-0">
            <h1 class="subtitle-1 text-center secondary--text">{{ name }}</h1>
          </v-col>
          <v-col cols="8">
            <v-divider dark></v-divider>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-list nav shaped>
          <v-list-item
            color="secondary"
            selectable
            :to="lesson.route"
            link
            v-for="lesson in lessons"
            :key="lesson.name"
          >
            {{ lesson.name }}
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col>
            <v-btn
              text
              dark
              block
              :to="categoryLink"
            >More ></v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    lessons: Array,
    categoryLink: String,
  },
  data() {
  },
};
</script>

<style>

</style>
