'use strict';

'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .reduce((result, line) => {
      const [key, value] = line.split(':');

      if (key && value) {
        result[key.trim()] = value.trim();
      }

      return result;
    }, {});
}

module.exports = convertToObject;
