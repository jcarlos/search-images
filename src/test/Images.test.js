import React from "react";
import { ImagesFromFlickr, parseFlickrItem } from "../Images";

const FlickrData = {
  title: "Uploads from everyone",
  link: "https://www.flickr.com/photos/",
  description: "",
  modified: "2019-06-09T09:38:58Z",
  generator: "https://www.flickr.com",
  items: [
    {
      title: " ",
      link: "https://www.flickr.com/photos/antik_walle/48029105786/",
      media: {
        m: "https://live.staticflickr.com/65535/48029105786_7e4d01a9d9_m.jpg"
      },
      date_taken: "2019-06-08T17:26:11-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/antik_walle/">Antik - Bremen</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/antik_walle/48029105786/" title=" "><img src="https://live.staticflickr.com/65535/48029105786_7e4d01a9d9_m.jpg" width="240" height="240" alt=" " /></a></p> ',
      published: "2019-06-09T09:38:58Z",
      author: 'nobody@flickr.com ("Antik - Bremen")',
      author_id: "142632058@N05",
      tags: ""
    },
    {
      title: "#t\u00fa #anniversary",
      link: "https://www.flickr.com/photos/146532146@N04/48029106921/",
      media: {
        m: "https://live.staticflickr.com/65535/48029106921_525b33889b_m.jpg"
      },
      date_taken: "2019-06-06T21:59:54-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/146532146@N04/">NgocTu123</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/146532146@N04/48029106921/" title="#t\u00fa #anniversary"><img src="https://live.staticflickr.com/65535/48029106921_525b33889b_m.jpg" width="240" height="102" alt="#t\u00fa #anniversary" /></a></p> ',
      published: "2019-06-09T09:39:15Z",
      author: 'nobody@flickr.com ("NgocTu123")',
      author_id: "146532146@N04",
      tags: "t\u00fa anniversary"
    }
  ]
};

describe("Images.parseFlickrItem", () => {
  const FlickrItem = {
    title: "#t\u00fa #anniversary",
    link: "https://www.flickr.com/photos/146532146@N04/48029106921/",
    media: {
      m: "https://live.staticflickr.com/65535/48029106921_525b33889b_m.jpg"
    },
    date_taken: "2019-06-06T21:59:54-08:00",
    description:
      ' <p><a href="https://www.flickr.com/people/146532146@N04/">NgocTu123</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/146532146@N04/48029106921/" title="#t\u00fa #anniversary"><img src="https://live.staticflickr.com/65535/48029106921_525b33889b_m.jpg" width="240" height="102" alt="#t\u00fa #anniversary" /></a></p> ',
    published: "2019-06-09T09:39:15Z",
    author: 'nobody@flickr.com ("NgocTu123")',
    author_id: "146532146@N04",
    tags: "t\u00fa anniversary"
  };

  const imageItem = {
    thumbnail: "https://live.staticflickr.com/65535/48029106921_525b33889b_m.jpg",
    author: 'NgocTu123',
    date_taken: "2019-06-06T21:59:54-08:00",
    tags: ["t\u00fa", "anniversary"],
    link: "https://www.flickr.com/photos/146532146@N04/48029106921/",
  };

  it("generates image data from a Flickr item", () => {
    expect(parseFlickrItem(FlickrItem)).toEqual(imageItem);
  });
});

describe("Images.fromFlickr", () => {
  const imagesData = [
    {
      author: 'Antik - Bremen',
      date_taken: "2019-06-08T17:26:11-08:00",
      link: "https://www.flickr.com/photos/antik_walle/48029105786/",
      tags: [],
      thumbnail:
        "https://live.staticflickr.com/65535/48029105786_7e4d01a9d9_m.jpg"
    },
    {
      author: 'NgocTu123',
      date_taken: "2019-06-06T21:59:54-08:00",
      link: "https://www.flickr.com/photos/146532146@N04/48029106921/",
      tags: ["tú", "anniversary"],
      thumbnail:
        "https://live.staticflickr.com/65535/48029106921_525b33889b_m.jpg"
    }
  ];

  it("generate a colection of images from Flickr items", () => {
    expect(ImagesFromFlickr(FlickrData)).toEqual(imagesData);
  });
});
