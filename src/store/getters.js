import { formatDate } from "@/shared/utility";
import dayjs from "dayjs";
import { BASE_URL } from "@/api";

const character = `${BASE_URL}/people`;

export default {
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
        character,
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
        character,
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
  getFilm: (state) => {
    /* this exludes the release_date from the state.film object 
      so I could format the date the way I wanted it */
    let { release_date, ...updatedFilmState } = state.film;
    return {
      ...updatedFilmState,
      release_date: dayjs(release_date).format("MMMM DD, YYYY"),
    };
  },
};
