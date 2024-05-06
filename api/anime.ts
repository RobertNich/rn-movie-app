export const fetchTopAnime = async () => {
    const url = 'https://api.jikan.moe/v4/top/anime';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };

    const res = await fetch(url, options);

    if (!res.ok) {
        throw new Error('Failed to fetch top anime'); 
    }

    const json = await res.json();
    return json.results;
};