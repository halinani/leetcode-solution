/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (t.length !== s.length) {
    return false;
  }

  const map1 = new Map();
  const map2 = new Map();

  for (let item of s) {
    map1[item] = map1[item] + 1 || 1;
  }

  for (let item of t) {
    map2[item] = map2[item] + 1 || 1;
  }

  for (let item of s) {
    if (map1[item] !== map2[item]) {
      return false;
    }
  }

  return true;
};
