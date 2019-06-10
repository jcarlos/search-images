import FilterImageList from "../FilterImageList"

describe("FilterImageList", () => {
  const list = [{
    thumbnail: "https://live.staticflickr.com/65535/48029106921_525b33889b_m.jpg",
    author: 'nobody@flickr.com ("author1")',
    date_taken: "2019-06-06T21:59:54-08:00",
    tags: "anniversary",
    link: "https://www.flickr.com/photos/146532146@N04/48029106921/",
  },{
    thumbnail: "https://live.staticflickr.com/65535/48029106921_525b33889b_m.jpg",
    author: 'nobody@flickr.com ("author12")',
    date_taken: "2019-06-06T21:59:54-08:00",
    tags: "fa birthday",
    link: "https://www.flickr.com/photos/146532146@N04/48029106921/",
  },{
    thumbnail: "https://live.staticflickr.com/65535/48029106921_525b33889b_m.jpg",
    author: 'nobody@flickr.com ("author3")',
    date_taken: "2019-06-04T21:59:54-08:00",
    tags: "fa car",
    link: "https://www.flickr.com/photos/146532146@N04/48029106921/",
  }]

  it("returns whole list when searchTerm is ''", () => {
    expect(FilterImageList(list, '')).toBe(list);
  });

  it("returns 2 items when searchTerm is 'author1'", () => {
    expect(FilterImageList(list, 'author1').length).toBe(2);
  });

  it("returns 2 items when searchTerm is 'fa'", () => {
    expect(FilterImageList(list, 'fa').length).toBe(2);
  });

  it("returns 1 item when searchTerm is '2019-06-04'", () => {
    expect(FilterImageList(list, '2019-06-04').length).toBe(1);
  });

  it("returns empty list searchTerm 'doesnt exist' ", () => {
    expect(FilterImageList(list, "doesnt exist").length).toBe(0);
  });
});
