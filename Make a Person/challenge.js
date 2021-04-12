var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let _fullName = firstAndLast;
    this.getFullName = function() {
      return _fullName;
    };
    this.getFirstName = function() {
      const firstName = _fullName.split(' ')[0];
      return firstName;
    }
    this.getLastName = function() {
      const lastName = _fullName.split(' ')[1];
      return lastName;
    }
    this.setFullName = function(firstAndLast) {
      _fullName = firstAndLast;
    }
    this.setFirstName = function(first) {
      const tempName = _fullName.split(' ');
      tempName[0] = first;
      _fullName = tempName.join(' ');
    }
    this.setLastName = function(last) {
      const tempName = _fullName.split(' ');
      tempName[1] = last;
      _fullName = tempName.join(' ');
    }
  };
  
  
  var bob = new Person('Bob Ross');
  bob.getFullName();