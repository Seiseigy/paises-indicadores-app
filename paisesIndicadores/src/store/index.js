import { createStore } from "vuex";

const store = createStore({
  state(){
    return {
      userInput: {
        firstCountrySelected: '',
        secondCountrySelected: '',
        indicatorSelected: '',
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