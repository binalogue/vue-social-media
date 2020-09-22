export const objectToGetParams = object =>
  `?${Object.keys(object)
    .filter(key => !!object[key])
    .map(key => `${key}=${encodeURIComponent(object[key])}`)
    .join('&')}`;

export default {
  objectToGetParams,
};
