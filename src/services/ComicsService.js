import { useHttp } from "../hooks/http.hook";

const useComicsService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiKey = "4ca4e0f7a1c0e3bdc1240a5027d68f5f";
  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _baseOffset = 21;

  const getAllComics = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}comics?limit=4&offset=${offset}&apikey=${_apiKey}`
    );

    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    console.log(33);
    const res = await request(`${_apiBase}comics/${id}?apikey=${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.title,
      // description: char.description,
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      price: char.prices[0].price,
      // wiki: char.urls[1].url,
      // comics: char.comics.items,
    };
  };
  return { loading, error, getAllComics, getCharacter, clearError };
};
export default useComicsService;
