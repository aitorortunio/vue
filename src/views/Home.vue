<template>
  <div>
    <Header />
    <v-container>
      <v-row> </v-row>
      <v-row>
        <div class="col-xs-12 col-md-6">
          <CategoryCard />
        </div>
        <div class="col-xs-12 col-md-6">
          <AssetCard />
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CategoryCard from "../components/cards/Categories/CategoryCard";
import AssetCard from "../components/cards/Assets/AssetCard";
import Header from "../components/Header";

export default {
  name: "Home",
  components: {
    CategoryCard,
    AssetCard,
    Header,
  },
};
</script>

<style>
html {
  overflow-y: auto;
}
</style>