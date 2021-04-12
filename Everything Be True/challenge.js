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

// TESTS
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") should return false.
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat") should return true.
// truthCheck([{"single": "yes"}], "single") should return true.
// truthCheck([{"single": ""}, {"single": "double"}], "single") should return false.
// truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false.
// truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false.