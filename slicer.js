function slice(data, start, end) {
    if (typeof data === 'string') {
      if (start < 0) {
        start = data.length + start;
      }
      if (end < 0) {
        end = data.length + end;
      }
      return data.substring(start, end);
    } else if (Array.isArray(data)) {
      if (start < 0) {
        start = data.length + start;
      }
      if (end < 0) {
        end = data.length + end;
      }
      return data.slice(start, end);
    } else {
      throw new Error('Unsupported data type. Expected string or array.');
    }
  }
  