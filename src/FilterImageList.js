const FilterImageList = (list, searchTerm) => {
  if (searchTerm === "") {
    return list;
  }
  return list.filter(item => {
    return (
      item.author.includes(searchTerm) ||
      item.date_taken.includes(searchTerm) ||
      item.tags.includes(searchTerm)
    );
  });
};

export default FilterImageList;