<template>
  <div align="center" justify="center" class="mt-5 mb-5">
    <v-row class="col-md-10" >
      <DetailedCategoryCard />
    </v-row>
  </div>
</template>

<script>
import DetailedCategoryCard from "../components/cards/Categories/DetailedCategoryCard";

export default {
  name: "Categories",
  components: {
    DetailedCategoryCard,
  },
};
</script>

<style>
</style>