import { createStore } from "vuex";
import { formatDate } from "@/shared/utility";

const BASE_URL = "https://swapi.dev/api";

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
  getters: {
    getFilms: (state) => {
      return state.films.map((film, index) => {
        const producer = film.producer.split(",")[0];
        return {
          id: index + 1,
          title: film.title,
          releaseDate: formatDate(film.release_date),
          director: film.director,
          producer: producer.split(" ")[0],
          episodeId: film.episode_id,
          character: "https://swapi.dev/api/people",
        };
      });
    },
    getStarships: (state) => {
      return state.starships.map((starship, index) => {
        return {
          id: index + 1,
          name: starship.name,
          model: starship.model,
          class: starship.starship_class,
          passenger: starship.passengers,
          length: `${starship.length} Meters`,
          character: "https://swapi.dev/api/people",
        };
      });
    },
    getPeople: (state) => {
      return state.people.map((person, index) => {
        return {
          id: index + 1,
          name: person.name,
          birthYear: person.birth_year,
          gender: person.gender,
          hairColor: person.hair_color,
          height: `${person.height} CM`,
          created: formatDate(person.created),
        };
      });
    },
    getSpecies: (state) => {
      return state.species.map((specie, index) => {
        const hairColor = specie.hair_colors.split(",")[0];

        return {
          id: index + 1,
          name: specie.name,
          classification: specie.classification,
          eyeColors: specie.eye_colors,
          hairColor: hairColor,
          height: `${specie.average_height} CM`,
          created: formatDate(specie.created),
        };
      });
    },
  },
  mutations: {
    fetchFilms: (state, films) => {
      state.films = films;
    },
    fetchStarships: (state, starships) => {
      state.starships = starships;
    },
    fetchSpecies: (state, species) => {
      state.species = species;
    },
    fetchPeople: (state, people) => {
      state.people = people;
    },
    fetchFilmById: (state, film) => {
      state.film = film;
    },
    fetchStarship: (state, ship) => {
      state.ship = ship;
    },
    fetchPerson: (state, person) => {
      state.person = person;
    },
    fetchSpecie: (state, specie) => {
      state.specie = specie;
    },
  },
  actions: {
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
        if (!response.ok) throw new Error("Something went wrong");
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
  },
  modules: {},
});
