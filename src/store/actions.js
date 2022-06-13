import { BASE_URL } from "@/api";

export default {
  fetchFilms: async ({ commit }) => {
    try {
      const response = await fetch(`${BASE_URL}/films`);
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      commit("fetchFilms", data.results);
    } catch (error) {
      alert(error.message);
    }
  },
  fetchStarships: async ({ commit }) => {
    try {
      const response = await fetch(`${BASE_URL}/starships`);
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      commit("fetchStarships", data.results);
    } catch (error) {
      alert(error.message);
    }
  },
  fetchPeople: async ({ commit }) => {
    try {
      const response = await fetch(`${BASE_URL}/people`);
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      commit("fetchPeople", data.results);
    } catch (error) {
      alert(error.message);
    }
  },
  fetchSpecies: async ({ commit }) => {
    try {
      const response = await fetch(`${BASE_URL}/species`);
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      commit("fetchSpecies", data.results);
    } catch (error) {
      alert(error.message);
    }
  },
  fetchFilmById: async ({ commit }, filmId) => {
    try {
      const response = await fetch(`${BASE_URL}/films/${filmId}`);
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      commit("fetchFilmById", data);
    } catch (error) {
      alert(error.message);
    }
  },
  fetchStarship: async ({ commit }, shipId) => {
    try {
      const response = await fetch(`${BASE_URL}/starships/${shipId}`);
      if (!response.ok) {
        commit("setStarshipToNull");
        return;
      }
      const data = await response.json();
      commit("fetchStarship", data);
    } catch (error) {
      alert(error.message);
    }
  },
  fetchPerson: async ({ commit }, id) => {
    try {
      const response = await fetch(`${BASE_URL}/people/${id}`);
      const data = await response.json();
      commit("fetchPerson", data);
    } catch (error) {
      alert(error.message);
    }
  },
  fetchSpecie: async ({ commit }, specieId) => {
    try {
      const response = await fetch(`${BASE_URL}/species/${specieId}`);
      const data = await response.json();
      commit("fetchSpecie", data);
    } catch (error) {
      alert(error.message);
    }
  },
};
