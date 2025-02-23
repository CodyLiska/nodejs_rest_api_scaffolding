const getItemsLandingPage = (req, res) => {
  res.send(`/ITEMS PAGE`);
};

const getSearchPage = (req, res) => {
  res.send(`/ITEMS/SEARCH PAGE`);
};

module.exports = { getItemsLandingPage, getSearchPage };
