<template>
  <div align="center" justify="center" class="mt-5 mb-5">
    <v-row class="col-md-10" >
      <DetailedAssetCard />
    </v-row>
  </div>
</template>

<script>
import DetailedAssetCard from "../components/cards/Assets/DetailedAssetCard";

export default {
  name: "Assets",
  components: {
    DetailedAssetCard,
  },
};
</script>

<style>
</style>