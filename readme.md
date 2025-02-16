# **Javascript Observer Pattern**

---

## **Table of Contents**

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Example Usage](#)

---

## **Overview**

This repository contains an implentation of javascript observer pattern using a telephone package. The projects demonstrates Observer pattern in javascript by modeling a real world telephone service company or service provider scenario such as mtn where users can get registered to the company to own phone numbers and be blocked from the company too. Security agencies such as interpol, fbi monitor what goes on and the company notifies them each time a registered number is dialled. The system is implemented as a console-based application and includes functionality for the telephone company (subject), security agencies (the observers).

---

## **Features**

**Classes and Their Functionality**

1. **Telephone**

- Attributes:

  - customer : An array that contains all the phone numbers and names of users registered to the telephone company
  - observer : An array that contains all the observers attached to the telephone company

- Methods :
  - addPhoneNumber : Adds/registers a user to the telephone company
  - removePhoneNumber : Removes/ blocks a user from the telephone company using their unique name.
  - addObserver : Adds an observer to the telephone company
  - removeObserver : Removes/ blocks an observer from the telephone company using their unique name.
  - dialPhoneNumber: make calls
  - notifyObservers : informs observers when ever a number is dialled

2. **phoneUser**

- Attributes:
  - name : the customer/users name
  - phoneNumber : the customer/users phone number

3. **Observer**

- Attributes:

  - name : the observers name
  - action : How/ what text do we display when notifying the observer

- Methods:
  - notify : informs the observer whenever a registered number is dialled

---

## **Technologies Used**

- **JavaScript** : handled the interactions and logic involved

---

## **Example Usage**

1. Create an instance of a telephone company

```bash
const telephone = new Telephone();
```

2. Create instance of phone users

```bash
const favour = new PhoneUser("Favour", 234567890);
const chidera = new PhoneUser("Chidera", 234567890);
const chioma = new PhoneUser("Chioma", 234567890);
const andrew = new PhoneUser("Andrew", 234567890);
```

3. Create instance of observers

```bash
const fbi = new Observer("Fbi", "");
const interpol = new Observer("Interpol", "Now Dialing");
const hacker = new Observer("Hacker");
```

4. Register phone users to the telephone company

```bash
telephone.addPhoneNumber(favour);
telephone.addPhoneNumber(chidera);
telephone.addPhoneNumber(chioma);
telephone.addPhoneNumber(andrew);
```

5. Add observers of phone users to the telephone company

```bash
telephone.addObserver(fbi);
telephone.addObserver(interpol);
telephone.addObserver(hacker);
```

6. Remove/unregister phone users from the company

```bash
telephone.removePhoneNumber(andrew);
telephone.removePhoneNumber(chioma);
```

7. Remove/block observers of phone users from the telephone company

```bash
telephone.removeObserver(hacker);
```

8. Dial number and notify observers

```bash
telephone.dialPhoneNumber(favour);
```

---

## **Installation**

1. Clone the repo

```bash
git clone https://github.com/Okpara202/js-observer-pattern.git
```

2. Press Alt + Alt + L + O to display the app using live server
