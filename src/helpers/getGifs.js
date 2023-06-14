export const getGifs = async(category) => {
    const api_key = 'VijQc4cexWNGRXmHgO5E0atlIhpdejse';
    const query = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=10`;
    const response = await fetch(query);
    const { data = [] } = await response.json();

    const gifs = data.map((img) => {
      return({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      });
    });
    return gifs;
}