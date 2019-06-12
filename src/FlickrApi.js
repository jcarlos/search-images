const tagsUrl = (searchTerm) => {
  if (!searchTerm || searchTerm === "") { return ''; }
  const tags = searchTerm.replace(",", "").split(" ").map((tag) => tag.trim()).map((tag) => encodeURI(tag))
  return (tags !== '' ? `&tagmode=any&tags=${tags.join(',')}` : '');
}

const apiUrl = (searchTerm) => {
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  const flickerEndpint = "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1"
  const tags = tagsUrl(searchTerm);
  const url = CORS_PROXY + flickerEndpint + tags
  return url;
}

const FlickrApi = async (searchTerm) => {
  const url = apiUrl(searchTerm);
  const response = await fetch(url)
  return await response.json()
};

export { FlickrApi, apiUrl, tagsUrl };
