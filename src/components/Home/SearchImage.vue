<template>
  <v-parallax
    dark
    src="https://images.wallpaperscraft.com/image/starry_sky_boat_reflection_125803_1080x1920.jpg"
    px-0 mx-0
    height="600"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center py-8" cols="12" id='headerImage'>
        <v-row
        align="center"
        justify="center"
        >
          <v-col cols="12">
            <h1 class="display-2 mb-4">Özel Ders Arıyorum</h1>
            <h1 class="headline font-weight-thin mb-4">
              You can search what do want to learn.
              Learn and ipmrove it knowledge with best tutors on the world.
            </h1>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="What do you want to learn?"
              append-icon="mdi-magnify"
              outlined
              single-line
              clearable
              dark
              rounded
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
//
};
</script>

<style>
#headerImage {
  background-color: rgb(0, 0, 0, 0.3);
}
</style>
