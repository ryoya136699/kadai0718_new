<template>
    <v-row justify="center">
        <br>{{ advice }}
    </v-row>  
</template>

<script>
    export default {
        computed: {

            advice(){
                return this.$store.state.person.advice;
            },

            country(){
                return this.$store.state.person.country;
            },

            probability(){
                return this.$store.getters.probability;
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

        }
    }
</script>