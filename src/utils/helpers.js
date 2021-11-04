export const arrayToFormData = (data) => {
  let formData = new FormData();

  for (let prop in data) {
    if (Array.isArray(data[prop])) {
      for (let index in data[prop]) {
        if (
          !(data[prop][index] instanceof File) &&
          typeof data[prop][index] == "object"
        ) {
          for (let p in data[prop][index]) {
            formData.append(
              prop + "[" + index + "][" + p + "]",
              data[prop][index][p]
            );
          }
        } else formData.append(prop + "[]", data[prop][index]);
      }
    } else {
      formData.append(prop, data[prop]);
    }
  }

  return formData;
};

export const getValueLabel = (data) => {
  return data.map((item) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
};

export const resetOfferSetting = (data) => {
  switch (data.tool_id) {
    case 2:
      return {
        name: data.name,
        source_trafic: data.source_trafic,
      };
    default:
      break;
  }
};

const filterByTwoDates = (date1, date2) => {};

const formatDate = (date) => {
  return `${date.day <= 9 ? "0" + date.day : date.day}.${
    date.month <= 9 ? "0" + date.month : date.month
  }.${date.year}`;
};
