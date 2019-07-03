module.exports.getDataFromKey = (object, key) => {
  const keys = Object.keys(object);

  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    console.log(k);

    if (String(k) === String(key)) return object[k];
  }

  return null;
};
