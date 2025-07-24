import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    person: [
      { name: [] },
    ]
  },
  getters: {
  },
  mutations: {
    addToName(state, name){
      const x = 0;
      for(i=0; i<state.person.name.length(); i++){
        if(name === state.person.name[i])
          x = 1;
      }
      if(x === 0)
        state.person.name.add(name);
    }
  },
  actions: {
  },
  modules: {
  }
})
