<template>
  <div id="subjects">
    <v-chip
      v-for="subject in subjects"
      :key="subject.title"
      link
      outlined
      :to="subject.to"
      :color="rngColor()"
      class="ma-1"
    >
        {{ subject.title }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    subjects: Array,
  },
  methods: {
    rngColor() {
      const colors = ['green', 'red', 'grey', 'pink', 'blue-grey', 'purple', 'brown', 'deep-purple',
        'deep-orange', 'indigo', 'orange', 'blue', 'amber', 'light-blue', 'yellow', 'cyan', 'lime', 'teal', 'light-green'];

      const rondomNumber = Math.floor((Math.random() * 100) + 1);

      const color = colors[rondomNumber % 19];
      return color;
    },
  },
};
</script>

<style>

</style>
