export default {
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
  setStarshipToNull: (state) => {
    state.ship = null;
  },
};
