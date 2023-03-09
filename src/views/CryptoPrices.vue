<template>
  <div align="center" justify="center" class="mt-5 mb-5">
    <v-row align="center" justify="center" class="col-10">
      <v-sheet
        :height="sheetHeight"
        :style="{ background: '#9FD8DF' }"
        class="font-weight-bold"
      >
        <v-container class="fill-height" style="color:#046582">
          <v-row align="center" justify="center">
            <h1 class="text-center display-3 hidden-xs-only">
              Precios de cryptos en tiempo real !
            </h1>
            <h1 class="text-center display-1 hidden-sm-and-up">
              Precios de cryptos en tiempo real !
            </h1>
          </v-row>
        </v-container>
      </v-sheet>
    </v-row>
    <v-row >
      <InputForAPI />
    </v-row>
  </div>
</template>

<script>
import InputForAPI from "../components/InputForAPI.vue";

export default {
  name: "Categories",
  components: {
    InputForAPI,
  },
  computed: {
    sheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200px";
        case "sm":
          return "300px";
        case "md":
          return "300px";
        case "lg":
          return "300px";
        case "xl":
          return "350px";
      }
      return "300px";
    },
  },
};
</script>

<style>
</style>