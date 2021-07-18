import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total:0,
    todoList:[]
  },
  getters:{
    getTodoList : function(state){
      return state.todoList;
    }
  },
  mutations: {
    increment (state) {
      state.total++
    },
    decrement (state) {
      state.total--
    },
    todoAdd(state, value){
      state.todoList.push(value);
    },
    todoSet(state, arr){
      state.todoList = arr;
    },
    todoRemove(state, idx){
      for(let i=0; i<=state.todoList.length; i++){
        if(idx===i){
            state.todoList.splice(i, 1);
        }
      }
    },
    todoLocalSet(state){
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    todoRemoveAll(state){
      localStorage.removeItem('todoList');
      state.todoList = [];
      console.log(state.todoList);
    }

  },
  actions: {
  },
  modules: {
  }
})
