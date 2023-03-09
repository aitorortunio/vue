<template >
  <v-card to="categories" class="mx-auto" color="#8B5E83" dark max-width="400">
    <v-card-title>
      <v-icon large left> mdi-shape-outline </v-icon>
      <span class="text-h6 font-weight-light"></span>
    </v-card-title>
    
      <v-card-text class="text-h5 font-weight-bold text-center">
        Categorías
      </v-card-text>
    

    <v-card-actions>
      <v-list-item class="grow">

        <v-list-item-content>
          <v-list-item-title></v-list-item-title>
        </v-list-item-content>

        <v-row align="center" justify="end">
          <v-btn fab text icon>
            <v-icon class="mr-1"></v-icon>
          </v-btn>

          <span class="subheading mr-2"></span>
          <span class="mr-1"></span>
          <v-icon class="mr-1"></v-icon>
          <span class="subheading"></span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CategoryCard",
};
</script>

<style>
</style>