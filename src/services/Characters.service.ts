export const getCharacters = () => {
    return fetch('https://api.jikan.moe/v3/search/anime?q=naruto').then(data => data.json());
}
