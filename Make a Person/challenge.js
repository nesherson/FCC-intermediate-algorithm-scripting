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
// TESTS
// Object.keys(bob).length should return 6.
// bob instanceof Person should return true.
// bob.firstName should return undefined.
// bob.lastName should return undefined.
// bob.getFirstName() should return the string Bob.
// bob.getLastName() should return the string Ross.
// bob.getFullName() should return the string Bob Ross.
// bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").
// bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").
// bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").
// bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").