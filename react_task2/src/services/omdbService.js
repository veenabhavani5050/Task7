const API_KEY = '267b0475';

export async function fetchMovies(query, page = 1, type = '') {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}${type ? `&type=${type}` : ''}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function fetchMovieDetails(id) {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
