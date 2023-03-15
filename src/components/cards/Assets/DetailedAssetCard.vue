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
        <v-icon large left> mdi-cube </v-icon>
        <v-spacer></v-spacer>
        <v-btn to="/assets" plain text right
          ><v-icon large> mdi-arrow-left </v-icon></v-btn
        >
      </v-card-title>
      <v-card-text class="text-h5 font-weight-bold text-left">
        <em>Nombre:</em> {{ asset.asset_name }}
        <v-divider></v-divider>
        <em>Categoría:</em> {{ asset.category_name }}
        <v-divider></v-divider>
        <em>Precio:</em> {{ asset.current_price }}
        <v-divider></v-divider>
        <em>Descripción:</em> {{ asset.description }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DetailedAssetCard",
  data() {
    return {
      asset: [],
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
        .get(
          "https://aitorortunio-webservice.vercel.app/asset/" +
            this.$route.params.id
        )
        .then((response) => {
          this.asset = response.data;
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