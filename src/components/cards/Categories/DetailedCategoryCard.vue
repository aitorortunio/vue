<template >
  <div align="center" justify="center">
    <v-progress-circular
      v-show="loaded"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <v-card v-show="!loaded" plain text class="mx-auto" color="#8B5E83" dark>
      <v-card-title>
        <v-icon large left> mdi-shape-outline </v-icon>
        <v-spacer></v-spacer>
        <v-btn to="/categories" plain text right
          ><v-icon large> mdi-arrow-left </v-icon></v-btn
        >
      </v-card-title>
      <v-card-text class="text-h5 font-weight-bold text-left">
        <em>Nombre:</em> {{ category.name }}
        <v-divider></v-divider>
        <em>Descripción:</em> {{ category.description }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DetailedCategoryCard",
  data() {
    return {
      category: [],
      loaded: false,
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      this.loaded = true;
      axios
        .get(
          "https://aitorortunio-webservice.vercel.app/category/" +
            this.$route.params.id
        )
        .then((response) => {
          this.category = response.data;
          this.loaded = false;
        });
    },
  },
};
</script>

<style>
.container {
  justify-content: center;
}
</style>