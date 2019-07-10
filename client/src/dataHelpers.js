

const paginateData = (data) => {
  let pages = [];
  let counter = 0;
  let numberOfPages = Math.ceil((data.length / 7));
  console.log('we will have ' + numberOfPages + 'pages!');
  for (let i = 0; i < numberOfPages; i++) {
    let page = [];
    for (let c = 0; c < 7; c++) {
      if (counter < data.length) {
        page.push(data[((i * 7) + c)]);
        counter += 1;
      }
    }
    console.log(page);
    pages.push(page);
  }
  return pages;
};

module.exports.paginateData = paginateData;