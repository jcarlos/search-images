const parseTags = (tags) => {
     if(tags === "") return []
     return tags.split(" ");
}

const parseAuthor = (author) => {
     // remove 'nobody@flickr.com ("' from beginning
     // and also ") from end"
     return author.replace('nobody@flickr.com ("', '').slice(0, -2);
}

const parseFlickerItem = (flickerItem) => {
     return { 
          thumbnail: flickerItem.media.m,
          author: parseAuthor(flickerItem.author),
          date_taken: flickerItem.date_taken,
          tags: parseTags(flickerItem.tags),
          link: flickerItem.link
      }
};

const imagesFromFlicker = (flickerData) => {
     if(!Array.isArray(flickerData.items)) {
          const invalidFlickerData = 'Invalid Flicker data';
          throw invalidFlickerData;
     }
     return flickerData.items.map(parseFlickerItem);
};

export { parseFlickerItem, imagesFromFlicker };