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
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  
  