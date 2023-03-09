<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="lighten-1 white--text text-center"
      color="#046582"
    >

      <v-card-text align="center" justify="center" class="white--text pt-0">
        Esperamos que esta página te sirva como un primer vistazo en el mundo de las inversiones,
        la variedad de categorías y activos que existen a día de hoy
        y te enseñe a pensar en el futuro de nuestras decisiones presentes.
        Invertir tiempo en ti mismo es la única inversión segura que te dará el máximo rendimiento a lo largo de la vida <br>
        API provista por Lunar Crush.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Aitor Ortuño</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>