'use strict';

function convertToObject(sourceString) {
  const result = {};
  const lines = sourceString.split(';');

  for (let line of lines) {
    line = line.trim();

    if (!line) {
      continue;
    }

    const [key, value] = line.split(':');

    if (!key || !value) {
      continue;
    }

    result[key.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
