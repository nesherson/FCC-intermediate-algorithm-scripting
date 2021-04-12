const getOrbitalPeriod = (radius, gm, avgAlt) => {
    const a = 2 * Math.PI;
    const semiMajorAxis = radius + avgAlt;
    const orbitalPeriod = Math.round(a * Math.sqrt(Math.pow(semiMajorAxis, 3) / gm));
    return orbitalPeriod;
  }
  
  function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;
    const newArr = arr.map(el => {
      const newObj = Object.assign({}, el);
      const orbitalPeriod = getOrbitalPeriod(earthRadius, GM, el.avgAlt);
      newObj['orbitalPeriod'] = orbitalPeriod;
      delete newObj['avgAlt'];
      return newObj;
    });
    
    return newArr;
  }
  
// TESTS
// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].  
// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].