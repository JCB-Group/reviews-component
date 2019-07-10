const checkPageAmount = (data) => {
  let numberOfPages = Math.ceil((data.length / 7));
  return numberOfPages;
};

const paginateData = (data) => {
  let pages = [];
  let counter = 0;
  let numberOfPages = checkPageAmount(data);
  console.log('we will have ' + numberOfPages + 'pages!');
  for (let i = 0; i < numberOfPages; i++) {
    let page = [];
    for (let c = 0; c < 7; c++) {
      if (counter < data.length) {
        page.push(data[((i * 7) + c)]);
        counter += 1;
      }
    }
    pages.push(page);
  }
  return pages;
};

module.exports.paginateData = paginateData;
module.exports.checkPageAmount = checkPageAmount;