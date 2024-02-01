export function getValue(item, keys) {
    if (keys.length === 1) {
        return (item)[keys[0]];
    }
    let value = item;

    keys.forEach((key) => {
        value = value[key];
    });

    return value;
}


// empty validor 
const isEmpty = (value) => {
    return value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0);
  };

export const isFormEmpty = (data) => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (isEmpty(data[key])) {
          return true;
        }
      }
    }
    return false;
  };


