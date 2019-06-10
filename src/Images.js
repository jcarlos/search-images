const parseFlickerItem = (flickerItem) => {
     return { 
          thumbnail: flickerItem.media.m,
          author: flickerItem.author,
          date_taken: flickerItem.date_taken,
          tags: flickerItem.tags,
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