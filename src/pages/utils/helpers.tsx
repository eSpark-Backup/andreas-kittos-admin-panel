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

//image path splitter

export const splitImagePath = (imagePath) => {
    const splitIndex = imagePath?.indexOf(':$:');
    return imagePath?.substring(0, splitIndex);
}

//tag splitter
export const splitTags = (tags) => tags?.split(',')?.map(tag => tag?.trim()) || [];

