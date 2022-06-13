import { createStore } from "vuex";
import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

export default createStore({
  state: {
    films: [],
    starships: [],
    species: [],
    people: [],
    film: null,
    ship: null,
    person: null,
    specie: null,
  },
  getters,
  mutations,
  actions,
  modules: {},
});
