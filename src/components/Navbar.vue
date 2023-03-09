<template>
  <div>
    <v-app-bar dense dark color="#3B5360">
        <v-btn to="/" plain>
          <v-toolbar-title>FINANCE</v-toolbar-title>
        </v-btn>
      
      
      <v-spacer></v-spacer>
      
      <span class="hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer" text>
          <v-icon>mdi-menu-open</v-icon>
        </v-btn>
      </span>
      
      <v-toolbar-items class="hidden-xs-only">
        <v-btn :to="{name:'CryptoPrices'}" text>
          <v-icon small left>mdi-chart-line</v-icon>
          Crypto Prices
        </v-btn>
        <v-btn :to="{name:'Categories'}" text>
          <v-icon small left>mdi-shape-outline</v-icon>
          Categorías
        </v-btn>
        <v-btn :to="{name:'Assets'}" text>
          <v-icon small left>mdi-cube</v-icon>
          Activos
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon small>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Crypto Prices', link: {name:'CryptoPrices'}, icon: 'chart-line' },
        { title: 'Categories', link: {name:'Categories'}, icon: 'shape-outline' },
        { title: 'Assets', link: {name:'Assets'}, icon: 'cube' }
      ]
    }
  }
};
</script>

<style>
</style>