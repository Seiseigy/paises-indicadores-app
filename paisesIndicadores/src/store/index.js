import { createStore } from "vuex";

const store = createStore({
  state(){
    return {
      userInput: {
        firstCountrySelected: 'Hola',
        secondCountrySelected: 'Que',
        indicatorSelected: 'Tal',
        firstYearSelected: '',
        secondYearSelected: '',
      }
    };
  },
  getters: {
    userInput(state) {
      return state.userInput;
    }
  }
});

export default store;