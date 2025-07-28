<template> 
<v-container style="background-image: url('https://placeholder.pics/svg/500x500/656FFF-FFB2FD/FFFFFF/%E3%80%80'); background-size: cover; fluid">
    <v-row class="text-h3 mb-3 mt-3" justify="center">
      Guess the gender.
    </v-row>
    <v-row class="text-h5 mb-3 mt-3" justify="center">
      名前(ローマ字)を入力してね！↓
    </v-row>
    <v-row class="mb-3 mt-3" align="center" justify="center">
      <v-col cols="6" sm="6" md=3>
        <v-container class="cyan lighten-5" fluid>
          <v-text-field class="ml-6 mr-6" v-model="name"
                      label="your name" placeholder="your name…"
                      color="red">
          </v-text-field>
        </v-container>
      </v-col>
    </v-row>
    <v-row class="mb-3 mt-3" align="center" justify="center">
        <v-btn v-on:click="addToName(name)" fab dark small color="gray">
            追加
        </v-btn>
    </v-row>
    <v-row class="mb-3 mt-3" align="center" justify="center">
        入力された名前：{{ inputName }}
    </v-row>
</v-container>
</template>



<script>
    export default {
        data(){
            return {
                name: ''
            };
        },


        computed: {
            
            inputName(){
                return this.$store.state.person.name;
            }

            // VueXのstateから商品リストを取得
            //products() {
            //    return this.$store.state.names; // 名前空間の変更
            //},
            
            // getterから合計金額を取得
            //totalPrice() {
            //   return this.$store.getters['product/totalPrice']; // 名前空間の変更
            //}
        },

        methods: {
            // ボタン押下でmutationをcommitする
            addToName(name) {
                this.$store.commit('addToName', name);
            }
        }
    }
</script>