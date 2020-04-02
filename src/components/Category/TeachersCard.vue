<template>
  <div id="teachers-card">
    <v-card
      outlined
    >
      <v-card-title>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="auto"
          >
            <v-avatar
              size="118"
            >
              <v-img
                :src="profileImage"
                height="100%"
              >
              </v-img>
            </v-avatar>
          </v-col>
          <v-col
            cols="grow"
            class="my-0 py-0"
          >
            <v-row
              justify="start"
              align="start"
            >
              <v-col cols="12" class="py-0 my-0 text-start">
                <h1 class="title">{{ name }} {{ surname }}</h1>
              </v-col>
              <v-col cols="12" class="py-0 my-0">
                <v-rating
                  :value="starCount"
                  background-color="purple lighten-3"
                  color="secondary"
                  small
                  dence
                  readonly
                  class="text-start"
                ></v-rating>
              </v-col>
              <v-col cols="12">
                <h1 class="body-2 text-start">{{ reviewCount }} Reviews</h1>
              </v-col>
              <v-col cols="12">
                <h1
                  class="body-1 text-start font-weight-medium success--text"
                >
                  Starting {{ lessonMoney }}
                </h1>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-row
          justify="start"
          align="start"
        >
          <v-col cols="12" class="text-start my-0 py-0">
            <v-chip
              v-for="badge in badges"
              class="mx-1"
              :color="badge.color"
              outlined
              label
              :key="badge.title"
            >
              {{ badge.title }}
            </v-chip>
          </v-col>
          <v-col cols="12">
            <ul>
              <li
                class="text-start body-2 font-weight-medium"
                v-for="attribute in attributes"
                :key="attribute"
              >
                {{ attribute }}
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-row
          justify="center"
          align="center"
        >
          <v-col class="px-1" cols="auto">
            <v-btn
              class="mx-1"
              outlined
              rounded
              color="primary"
            >
              Quick Review
            </v-btn>
          </v-col>
          <v-col class="px-1 mx-0" cols="auto">
            <v-btn
              class="mx-1"
              rounded
              color="primary"
              :to="profileLink"
            >
              See Profile
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    profileImage: String,
    name: String,
    surname: String,
    starCount: Number,
    reviewCount: String,
    lessonMoney: Number || String,
    badges: Array,
    attributes: Array,
    profileLink: String,
  },
};
</script>

<style>

</style>
