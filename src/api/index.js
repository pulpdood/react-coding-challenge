const baseUrl = 'http://localhost:3001';

export async function getSeries() {
    const response = await fetch(`${baseUrl}/series`);
    const shows = await response.json();

    return shows;
}

export async function getMovies() {
    const response = await fetch(`${baseUrl}/movies`);
    const shows = await response.json();

    return shows;
}
