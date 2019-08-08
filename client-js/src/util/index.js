var util = {};

util.toggleElement = id => {
  document.querySelector("#" + id).classList.toggle("u-display-none");
};

util.toggleElements = (id1, id2) => {
  document.querySelector("#" + id1).classList.toggle("u-display-none");
  document.querySelector("#" + id2).classList.toggle("u-display-none");
};

export default util;
