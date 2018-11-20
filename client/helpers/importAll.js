export function importAll(r, path) {
  const images = {};
  r.keys().map(item => (images[item.replace(path, '')] = r(item)));
  return images;
}
