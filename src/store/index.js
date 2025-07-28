import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    person: [
      { name: '', gender: '', count: 0, country: '', probability: 0, advice: ''},
    ]
  },
  getters: {
    gender(state){
      if(state.person.gender === 'male'){
        return '男性';
      }else{
        return '女性';
      }
    },

    probability(state){
      return state.person.probability*100;
    }
  },
  mutations: {
    addToName(state, name){
      state.person.name = name;
      console.log('入力された名前：', state.person.name);
    },

    setGender(state, gender){
      state.person.gender = gender;
      console.log('格納された性別：', state.person.gender);
    },

    setProbability(state, probability){
      state.person.probability = probability;
      console.log('格納された正確性：', state.person.probability);
    },

    setCount(state, count){
      state.person.count = count;
      console.log('格納された件数：', state.person.count);
    },

    setCountry(state, country){
      state.person.country = country;
      console.log('格納された国：', state.person.country);
    },

    setAdvice(state, advice){
      state.person.advice = advice;
      console.log('格納されたアドバイス：', state.person.advice);
    }

  },
  actions: {
    Estimate_gender: async function( {commit} ){
      console.log('性別推定が行われました');
      let response;
      let myInfos;
      try{
        // axiosでAPIを叩く
        response = await axios.get(`https://api.genderize.io?name=${this.state.person.name}&country_id=JP`);
        console.log('現在の取得情報：', response.data);
        myInfos = response.data;
        // mutationを使って情報を格納
        commit('setGender', myInfos.gender);
        commit('setProbability', myInfos.probability);
        commit('setCount', myInfos.count);
        commit('setCountry', myInfos.country_id);

      } catch (error) {
        //try内で何らかのエラーがあったとき
        console.error("エラー：", error);
      }
    },

    Get_advice : async function({ dispatch }){
      let response;
      let advice;
      try{
        //axiosでAPIを叩く
        response = await axios.get("https://api.adviceslip.com/advice");
        console.log('取得したアドバイス：', response.data.slip.advice);
        advice = response.data.slip.advice;
        await dispatch('translation', advice);
      } catch (error) {
        //try内で何らかのエラーがあったとき
        console.error("エラー：", error);
      }
    },

    translation: async function({ commit }, text){
      let response;
      let ja_advice
      try{
        //axiosでAPIを叩く
        response = await axios.get(`https://script.google.com/macros/s/AKfycbx8zdjVq2lVVIIl2qDIkH-wWT6sM0s7Jn48PjiC0RTuydP7L29fq9rY4qo60Srl74mw/exec?text=${text}`);
        ja_advice = response.data;
        // 情報を格納
        //this.state.person.advice = ja_advice;
        commit('setAdvice', ja_advice);
        // mutationを使って情報を格納
        //this.$store.commit('setAdvice', ja_advice);
      } catch (error) {
        //try内で何らかのエラーがあったとき
        console.error("エラー：", error);
      }
    }
  },
  modules: {
  }
})
