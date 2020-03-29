<template>
  <div id="header">
    <v-app-bar
      color="primary"
      dark
      fixed
      flat
      id="navbar"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12">
          <v-row
            align="center"
            justify="center"
            dense
          >
            <v-col
              cols="4"
            >
              <v-toolbar-title class="title">Özel Ders Arıyorum</v-toolbar-title>
            </v-col>

            <v-col
              cols="4"
              class="px-0 mx-0"
            >
              <v-row
                justify="center"
                align="center"
              >
                <v-btn
                  to="/"
                  exact
                  text
                  tile
                  :height='buttonHeight'
                  active-class="button-active"
                >
                  Home
                </v-btn>
                <v-menu
                  offset-y
                  open-on-hover
                  min-width="100%"
                  v-model="showPanel"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn
                      dark
                      v-on="on"
                      text
                      tile
                      :height='buttonHeight'
                      :class="(showPanel) ? 'button-active' : ''"
                      @click="showPanel = !showPanel"
                    >
                      Browse Private Lessons
                    </v-btn>
                  </template>

                  <v-row
                    justify="center"
                    align="center"
                  >
                    <v-col cols="11" class="py-0 my-0">
                      <v-row
                        justify="center"
                        align="center"
                      >
                        <v-col
                          :cols="calculateWidth"
                          v-for="category in categories"
                          :key="category.name"
                        >
                          <DropdownCard
                            :lessons="category.lessons"
                            :name="category.name"
                            :categoryLink="category.categoryLink"
                          />
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-menu>
                <v-btn
                  exact
                  text
                  tile
                  :height='buttonHeight'
                  active-class="button-active"
                  to="/about"
                >
                  About
                </v-btn>
              </v-row>
            </v-col>
            <v-col
              cols="auto"
            >

            </v-col>
            <v-col
              col="4"

            >
              <v-row
              justify="end"
              align="center"
              >
                <v-col cols="6" class="px-0 mx-0">
                  <template v-if="showSearch">
                    <v-slide-x-reverse-transition>
                        <v-text-field
                          label="What do you want to learn?"
                          single-line
                          flat
                          dense
                          hide-details
                        ></v-text-field>
                    </v-slide-x-reverse-transition>
                  </template>
                </v-col>
                <v-btn
                  text
                  dark
                  @click="showSearch = !showSearch"
                  class="pa-0"
                  icon
                >
                  <v-icon
                  >
                    mdi-magnify
                  </v-icon>
                </v-btn>
                <v-btn class="ma-2" rounded text dark large>
                  <v-icon left large class="pr-2">mdi-account-circle</v-icon> Sign In
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>
<script>
import DropdownCard from '@/components/Layout/DropdownCard.vue';

export default {
  components: {
    DropdownCard,
  },
  data() {
    return {
      showSearch: false,
      showPanel: false,
      buttonHeight: '64px',
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      categories: [
        {
          name: 'Category 1',
          categoryLink: '/lessonCategories',
          lessons: [
            {
              name: 'Lesson Name 1',
              route: '/about',
            },
            {
              name: 'Lesson Name 2',
              route: '/about',
            },
            {
              name: 'Lesson Name 3',
              route: '/about',
            },
            {
              name: 'Lesson Name 4',
              route: '/about',
            },
          ],
        },
        {
          name: 'Category 2',
          categoryLink: '/lessonCategories',
          lessons: [
            {
              name: 'Lesson Name 1',
              route: '/about',
            },
            {
              name: 'Lesson Name 2',
              route: '/about',
            },
            {
              name: 'Lesson Name 3',
              route: '/about',
            },
            {
              name: 'Lesson Name 4',
              route: '/about',
            },
          ],
        },
        {
          name: 'Category 3',
          categoryLink: '/lessonCategories',
          lessons: [
            {
              name: 'Lesson Name 1',
              route: '/about',
            },
            {
              name: 'Lesson Name 2',
              route: '/about',
            },
            {
              name: 'Lesson Name 3',
              route: '/about',
            },
            {
              name: 'Lesson Name 4',
              route: '/about',
            },
          ],
        },
        {
          name: 'Category 4',
          categoryLink: '/lessonCategories',
          lessons: [
            {
              name: 'Lesson Name 1',
              route: '/about',
            },
            {
              name: 'Lesson Name 2',
              route: '/about',
            },
            {
              name: 'Lesson Name 3',
              route: '/about',
            },
            {
              name: 'Lesson Name 4',
              route: '/about',
            },
          ],
        },
        {
          name: 'Category 5',
          categoryLink: '/lessonCategories',
          lessons: [
            {
              name: 'Lesson Name 1',
              route: '/about',
            },
            {
              name: 'Lesson Name 2',
              route: '/about',
            },
            {
              name: 'Lesson Name 3',
              route: '/lessonCategories',
            },
            {
              name: 'Lesson Name 4',
              route: '/about',
            },
          ],
        },
      ],
    };
  },
  methods: {
    changeSearch() {
      this.showSearch = !this.showSearch;
    },
  },
  computed: {
    calculateWidth() {
      const count = this.categories.lenght;
      const width = Math.floor(12 / count);
      return width;
    },
  },
};
</script>

<style>
  .button-active {
    border-bottom: 3px solid #ffc107;
  }
</style>
