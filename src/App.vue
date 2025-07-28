<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>
      <v-btn text to="/" tag="router-link">名前入力</v-btn>
      <v-btn @click="Estimate_Gender" text>性別推定</v-btn>
      <v-btn @click="Get_Advice" text>アドバイス</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),

  methods: {
    async Estimate_Gender(){
      await this.$store.dispatch('Estimate_gender');
      this.$router.push('/gender');
    },

    async Get_Advice(){
      await this.$store.dispatch('Get_advice');
      this.$router.push('/advice');
    }
  }

};
</script>
