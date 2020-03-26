<template>
  <v-app-bar
    color="primary"
    dark
    height="100px"
    fixed
    flat
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="10">
        <v-row
          align="center"
          justify="center"
          dense
        >
          <v-col
            cols="auto"
          >
            <v-toolbar-title class="display-1">Özel Ders Arıyorum</v-toolbar-title>
          </v-col>

          <v-spacer></v-spacer>
          <v-col

            cols="auto"
          >
            <v-text-field
              label="What do you want to learn?"
              append-icon="mdi-magnify"
              outlined
              single-line
              clearable
              flat
              dense
              hide-details
            ></v-text-field>
          </v-col>
          <v-col
            cols="auto"
          >
            <v-btn
              to="/"
              text
            >
              Home
            </v-btn>
          </v-col>
          <v-col
            cols="auto"
          >
            <v-btn
              text
              to="/about"
            >
              About
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
export default {

};
</script>

<style>

</style>
