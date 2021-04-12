const isTruthy = (obj, prop) => {
    if (obj.hasOwnProperty(prop)) {
      return obj[prop] ? true : false;
    } else {
      return false;
    }
  }
  
  function truthCheck(collection, pre) {
    return collection.every(el => isTruthy(el, pre));
  }

  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");