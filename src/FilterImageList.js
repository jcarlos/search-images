const FilterImageList = (list, searchTerm) => {
  if (searchTerm === "") {
    return list;
  }
  return list.filter(item => {
    const tags = item.tags.map(tag => {
      return tag.toLowerCase();
    });

    return (
      item.author.toLowerCase().includes(searchTerm) ||
      item.date_taken.toLowerCase().includes(searchTerm) ||
      tags.some(tag => tag.includes(searchTerm))
    );
  });
};

export default FilterImageList;
