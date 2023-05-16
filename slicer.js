function slice(data, start, end) {
    if (typeof data === 'string') {
      return data.slice(start, end === undefined ? data.length : end);
    } else if (Array.isArray(data)) {
      return data.slice(start, end);
    } else {
      throw new Error('Unsupported data type. Expected string or array.');
    }
  }
  