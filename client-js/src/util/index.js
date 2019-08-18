var util = {};

util.toggleElement = id => {
  document.querySelector("#" + id).classList.toggle("u-display-none");
};

util.toggleElements = (id1, id2) => {
  document.querySelector("#" + id1).classList.toggle("u-display-none");
  document.querySelector("#" + id2).classList.toggle("u-display-none");
};

util.convertToHttps = url => {
  return url.replace(/^http:\/\//i, "https://");
};

util.showLoading = text => {
  document
    .querySelector("#js--loading-modal")
    .classList.remove("u-display-none");
  document.querySelector("#js--loading-modal__text").innerHTML = text;
};

util.hideLoading = () => {
  document.querySelector("#js--loading-modal").classList.add("u-display-none");
};

export default util;
