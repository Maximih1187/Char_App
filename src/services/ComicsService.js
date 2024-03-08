import { useHttp } from "../hooks/http.hook";

const useComicsService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiKey = "4ca4e0f7a1c0e3bdc1240a5027d68f5f";
  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _baseOffset = 210;

  const getAllComics = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}comics?limit=8&offset=${offset}&apikey=${_apiKey}`
    );

    return res.data.results.map(_transformComic);
  };

  const getComic = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?apikey=${_apiKey}`);
    return _transformComic(res.data.results[0]);
  };

  const _transformComic = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description || "There is no description",
      pageCount: comics.pageCount
        ? `${comics.pageCount} p.`
        : "No information about the number of pages",
      thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
      language: comics.textObjects[0]?.language || "en-us",
      price: comics.prices[0].price
        ? `${comics.prices[0].price}$`
        : "not available",
    };
  };
  return { loading, error, getAllComics, getComic, clearError };
};
export default useComicsService;
