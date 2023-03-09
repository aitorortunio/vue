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
        v-for="asset in assets"
        :key="asset.id"
        class="col-xs-12 col-md-6 col-lg-4"
      >
        <SpecificAssetCard :asset="asset" />
      </div>
    </v-row>
  </v-container>
</template>

<script>
import SpecificAssetCard from "../components/cards/Assets/SpecificAssetCard";
import axios from "axios";

export default {
  name: "Assets",
  components: {
    SpecificAssetCard,
  },
  data() {
    return {
      assets: [],
      loaded: false,
    };
  },
  mounted() {
    this.getAssets();
  },
  methods: {
    getAssets() {
      this.loaded = true;
      axios
        .get("https://aitorortunio-servicio-web.herokuapp.com/assets/")
        .then((response) => {
          this.assets = response.data;
          this.loaded = false;
        });
    },
  },
};
</script>

<style>
</style>