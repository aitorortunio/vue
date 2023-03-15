<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-progress-circular
        v-show="loaded"
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
      <div
        v-show="!loaded"
        v-for="category in categories"
        :key="category.id"
        class="col-xs-12 col-md-6 col-lg-4"
      >
        <SpecificCategoryCard :category="category" />
      </div>
    </v-row>
  </v-container>
</template>

<script>
import SpecificCategoryCard from "../components/cards/Categories/SpecificCategoryCard";

import axios from "axios";

export default {
  name: "Categories",
  components: {
    SpecificCategoryCard,
  },
  data() {
    return {
      categories: [],
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
        .get("https://aitorortunio-webservice.vercel.app/categories/")
        .then((response) => {
          this.categories = response.data;
          this.loaded = false;
        });
    },
  },
};
</script>

<style>
</style>