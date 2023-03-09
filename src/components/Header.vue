<template>
  <v-sheet
    :height="sheetHeight"
    :style="{ background: '#9FD8DF'}"
    class="font-weight-bold"
  >
    <v-container class="fill-height" style="color:#046582">
      <v-row
        align="center"
        justify="center"
      >
        <h1 class="text-center display-3 hidden-xs-only">
          Bienvenido a Finance!
        </h1>
        <h1 class="text-center display-1 hidden-sm-and-up">
          Bienvenido a Finance!
        </h1>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "Header",
  computed: {
    sheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '200px'
        case 'sm': return '300px'
        case 'md': return '300px'
        case 'lg': return '300px'
        case 'xl': return '350px'
      }
      return '300px'
    }
  }
}
</script>
