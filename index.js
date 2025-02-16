// Create the blueprint of a Telephone company/subject
class Telephone {
  constructor() {
    this.customer = [];
    this.observers = [];
  }

  addPhoneNumber(user) {
    // Register customers
    this.customer.push(user);
    console.log(
      `Registered customer ${user.name} with phone number ${user.phoneNumber}`
    );
  }

  removePhoneNumber(user) {
    // Remove customer
    const index = this.customer.findIndex(
      (customer) => customer.phoneNumber === user.phoneNumber
    );
    if (index !== -1) {
      this.customer.splice(index, 1);
      console.log(
        `Blocked/Removed customer ${user.name} with phone number ${user.phoneNumber}`
      );
    } else {
      console.log(`Invalid user: ${user.phoneNumber} not found`);
    }
  }

  addObserver(observer) {
    // Register observers
    this.observers.push(observer);
  }

  removeObserver(observer) {
    // Remove observer
    const index = this.observers.findIndex((obs) => obs.name === observer.name);
    if (index !== -1) {
      this.observers.splice(index, 1);
      console.log(
        `${observer.name} has been removed/blocked from observer status`
      );
    } else {
      console.log(`Invalid observer: ${observer.name} not found`);
    }
  }

  dialPhoneNumber(user) {
    // Dial user / notify the user when dialing
    const foundUser = this.customer.find(
      (customer) => customer.phoneNumber === user.phoneNumber
    );
    if (foundUser) {
      this.notifyObservers(user);
    } else {
      console.log(
        `User with number ${user.phoneNumber} doesn't exist in our Phonebook`
      );
    }
  }

  notifyObservers(user) {
    this.observers.forEach((observer) => {
      observer.notify(user);
    });
  }
}

// create the blueprint of a user
class PhoneUser {
  constructor(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}

// Create the blueprint of the Observer class
class Observer {
  constructor(name, action = "monitoring") {
    this.name = name;
    this.action = action;
  }

  notify(user) {
    console.log(`${this.action} ${user.phoneNumber}- observer ${this.name}`);
  }
}

//Create an instance of a telephone company
const telephone = new Telephone();

// Creating instance of phone users
const favour = new PhoneUser("Favour", 2347023232);
const chidera = new PhoneUser("Chidera", 234567890);
const chioma = new PhoneUser("Chioma", 23492992049);
const andrew = new PhoneUser("Andrew", 23448204994);

// creating instance of observers
const fbi = new Observer("Fbi", "");
const interpol = new Observer("Interpol", "Now Dialing");
const hacker = new Observer("Hacker");

// Register phone users to the telephone company
telephone.addPhoneNumber(favour);
telephone.addPhoneNumber(chidera);
telephone.addPhoneNumber(chioma);
telephone.addPhoneNumber(andrew);

// Add observers of phone users to the telephone company
telephone.addObserver(fbi);
telephone.addObserver(interpol);
telephone.addObserver(hacker);

// Remove/unregister phone users from the company
telephone.removePhoneNumber(andrew);
telephone.removePhoneNumber(chioma);

// Remove/block observers of phone users from the telephone company
telephone.removeObserver(hacker);

// Dial number and notify observers
telephone.dialPhoneNumber(favour);

console.log(telephone);
