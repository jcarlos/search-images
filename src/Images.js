/* 
parseTags is tested as part of imagesFromflickr test
should be good enough for exercise purposes
*/
const parseTags = (tags) => {
     if(tags === "") return []
     return tags.split(" ");
}

/* 
parseTags is tested as part of imagesFromflickr test
should be good enough for exercise purposes
*/
const parseAuthor = (author) => {
     // remove 'nobody@flickr.com ("' from beginning
     // and also ") from end"
     return author.replace('nobody@flickr.com ("', '').slice(0, -2);
}

const parseFlickrItem = (flickrItem) => {
     return { 
          thumbnail: flickrItem.media.m,
          author: parseAuthor(flickrItem.author),
          date_taken: flickrItem.date_taken,
          tags: parseTags(flickrItem.tags),
          link: flickrItem.link
      }
};

const ImagesFromFlickr = (flickrData) => {
     if(!Array.isArray(flickrData.items)) {
          const invalidflickrData = 'Invalid flickr data';
          throw invalidflickrData;
     }
     return flickrData.items.map(parseFlickrItem);
};

export { parseFlickrItem, ImagesFromFlickr };