export const getOffsetLeft = function (obj) {
  let tmp = obj.offsetLeft;
  let node = obj.offsetParent;
  while (node != null) {
    tmp += node.offsetLeft;
    node = node.offsetParent;
  }
  return tmp;
};

export const getOffsetTop = function (obj) {
  let tmp = obj.offsetTop;
  let node = obj.offsetParent;
  while (node != null) {
    tmp += node.offsetTop;
    node = node.offsetParent;
  }
  return tmp;
};
