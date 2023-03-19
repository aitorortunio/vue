<template>
  <div class="col-8 offset-2">
    <v-row class="col-xs-12 ">
      <v-text-field placeholder="Enter para confirmar" label="Escribe su abreviación aquí !" :rules="rules"
        hide-details="auto" v-model="text" @keyup.enter="callAPI"></v-text-field>
    </v-row>
    <v-row><v-progress-circular v-show="loaded" :size="25" color="primary" indeterminate
        class="mt-1"></v-progress-circular>
      <div v-show="!loaded" v-if="!error">
        <div v-if="APIresult.rate !== undefined" style="color:#046582; text-align: left;" class="mt-5">
          <h1>$ {{formattedRate}} USD</h1>
        </div>
      </div>
      <div v-else>
        <p>No se han encontrado resultados.</p>
      </div>
    </v-row>
  </div>
</template>
<script>
let apikey = { key: 'A30E067B-DDDD-4503-A091-77127CA0C01F' };

import axios from "axios";
export default {
  data: () => ({
    text: "",
    APIresult: {},
    loaded: false,
    error: false,
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 1) || 'Min 1 character',
    ],
  }),
  methods: {
    callAPI() {
        this.loaded = true;
        this.error = false;
      axios
        //.get("https://api.lunarcrush.com/v2?data=assets&key=w8d7kyiwfj80anu8n4l86&symbol="+this.text)
        .get("https://rest.coinapi.io/v1/exchangerate/" + this.text.toUpperCase() + "/USD?apikey=" + apikey.key)
        .then((response) => { this.APIresult = response.data; this.loaded = false })
        .catch((error) => { this.error = true; this.loaded = false; console.log(error) });
    },
  },
  computed: {
    formattedRate() {
      return this.APIresult.rate !== undefined ? Number(this.APIresult.rate).toFixed(2) : 'N/A';    },
  },
};
</script>
<style></style>