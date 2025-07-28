<template>
    <v-container>
        <div v-if="gender === '男性'">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9-5Cth63uvUMzl6FdF2tpwcMiLbqH9x8yuhNnOSnNHywQxrmMRaC7JbEvSfRFPfjxJomUYLGdV-ElzIgZetYKvK_5UvHa2zaCtscarWk1XdlKfGrruD4RAaG7LFxorQPryF80-4mjJaNl/s800/gender12_man.png" style="display: block; margin: 0 auto; width: 150px; height: auto;">
        </div>
        
        <div v-if="gender === '女性'">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLCZ-iov1_u8-aJx_zndK5mWZ1HqwqRY0omo_KZSKVdWQvVI5x0G65e264T0NKQ33q-x5OgW3CfAeUk3SW_z4JM4ktS5EQXKcDmtwUHcp_6pL87vVd7K4caJEGBU8Qd3NoGPdkZMj7rBlh/s800/gender13_woman.png" style="display: block; margin: 0 auto; width: 150px; height: auto;">
        </div>
        
        
        <v-row class="mb-3 mt-3" align="center" justify="center">
            {{ name }}の性別は...
        </v-row>
        <v-row class="mb-3 mt-3" align="center" justify="center">
            <div v-if="gender === '男性'">
            <v-icon color=blue>fas fa-person</v-icon>
                {{ gender }}
            </div>
            <div v-else-if="gender === '女性'">
            <v-icon color=pink>fas fa-person-dress</v-icon>
                {{ gender }}
            </div>
        </v-row>
        <v-row align="center" justify="center">
            検索件数：{{ count }}
        </v-row>
        <v-row align="center" justify="center">
            国：{{ country }}
        </v-row>
        <v-row align="center" justify="center">
            正確性：{{ probability }}％
        </v-row>
    </v-container>
</template>


<script>
    export default {
        computed: {

            name(){
                return this.$store.state.person.name;
            },

            gender(){
                return this.$store.getters.gender;
            },

            count(){
                return this.$store.state.person.count;
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