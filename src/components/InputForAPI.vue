<template>
  <div class="col-8 offset-2">
    <v-row class="col-xs-12 ">
      <v-text-field
        placeholder="Enter para confirmar"
        label="Escribe su abreviación aquí !"
        :rules="rules"
        hide-details="auto"
        v-model="text"
        @keyup.enter="callAPI" 
      ></v-text-field>
    </v-row>
    <v-row><v-progress-circular
        v-show="loaded"
        :size="25"
        color="primary"
        indeterminate
        class="mt-1"
      ></v-progress-circular>
      <div v-show="!loaded" v-if="!error">
          <div v-if="APIresult!=0" style="color:#046582; text-align: left;" class="mt-5">
            <h1>{{ APIresult['data'][0].name }}</h1>
            <h3>$ {{ Number(APIresult['data'][0].price.toFixed(3)).toLocaleString() }} USD</h3>
            <h3>Market Cap: {{ Number(APIresult['data'][0].market_cap).toLocaleString() }}</h3>
            <h3>Market Cap ranking: {{ APIresult['data'][0].timeSeries[0].market_cap_rank }}</h3>
            <h3>Variación últimas 24h: {{ Number(APIresult['data'][0].percent_change_24h).toLocaleString() }}%</h3>
            <h3>Variación últimos 7d: {{ Number(APIresult['data'][0].percent_change_7d).toLocaleString() }}%</h3>
            <h3>Existencia máxima: {{ Number(APIresult['data'][0].max_supply).toLocaleString() }}</h3>

          </div>
      </div>
      <div v-else>
        <p>No se han encontrado resultados.</p>
      </div>
    </v-row>
  </div>
</template>
<script>
let apikey = {key: 'A30E067B-DDDD-4503-A091-77127CA0C01F'};

import axios from "axios";
export default {
  data: () => ({
    text: "",
    APIresult: [],
    loaded: false,
    error: false,
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 1) || 'Min 1 character',
      ],
  }),
  methods: {
    callAPI() {
      this.loaded = true,
      this.error = false,
      axios
        //.get("https://api.lunarcrush.com/v2?data=assets&key=w8d7kyiwfj80anu8n4l86&symbol="+this.text)
        .get("https://rest.coinapi.io/v1/exchangerate/"+this.text+"/USD"+apikey.key)
        .then((response) => {this.APIresult = response.data; this.loaded = false})
        .catch ((error) => {this.error = true; this.loaded = false;  console.log(error)});
    },
  },
};
</script>
<style>
</style>