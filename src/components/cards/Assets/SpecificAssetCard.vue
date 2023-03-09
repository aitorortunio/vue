<template >
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
      :to="{path: '/asset/' + asset.id}"
      plain
      text
      class="mx-auto"
      color="#8B5E83"
      dark
      max-width="400"
    >
      <v-card-title>
        <v-icon large left> mdi-cube </v-icon>
        <span class="text-h6 font-weight-light"></span>
      </v-card-title>
      <v-card-text class="text-h5 font-weight-bold text-center">
        {{ asset.name }}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-row align="center" justify="end">
            <v-btn fab text icon>
              <v-icon class=""> mdi-currency-usd </v-icon>
            </v-btn>

            <span class="subheading mr-2">{{ asset.current_price }}</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "SpecificAssetCard",
  props: ["asset"],
};
</script>

<style>
</style>