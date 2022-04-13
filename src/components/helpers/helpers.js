const getName = (data) => {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    const name = data[i].name.common;
    arr.push({ name: name });
  }
  return arr;
};

const moreInfo = (data) => {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    const name = data[i].name.common;
    const capital = data[i].capital;
    const area = data[i].area;
    const languages = data[i].languages;
    const flag = data[i].flags.png;
    arr.push({
      name: name,
      capital: capital,
      area: area,
      languages: languages,
      flag: flag,
    });
  }
  return arr;
};

export { getName, moreInfo };
