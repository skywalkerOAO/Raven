export function sessionSet(key:any, value:any) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    sessionStorage.setItem(key, value)
}

export function sessionGet(key:any) {
    const value = sessionStorage.getItem(key) || '';
    try {
      const val = JSON.parse(value);
      if ('number' === typeof(val)){
          return value;
      } else {
          return val;
      }
    } catch (e) {
        return value;
    }
}

export function sessionRemove(key:any) {
    sessionStorage.removeItem(key)
}

export function sessionClearAll() {
    sessionStorage.clear();
}
