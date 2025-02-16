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

1. **Telephone class**: This class represents the telephone company, which is the subject.

- Properties:

  - customer: an array to store registered customers.
  - observers: an array to store observers.

- Methods:

  - addPhoneNumber(user): Registers a customer by adding them to the customer array.
  - removePhoneNumber(user): Removes a customer from the customer array.
  - addObserver(observer): Registers an observer by adding them to the observers array.
  - removeObserver(observer): Removes an observer from the observers array.
  - dialPhoneNumber(user): Dials a customer’s phone number and notifies observers if the customer exists in the customer array.
  - notifyObservers(user): Notifies all observers when a customer is dialed.

2. PhoneUser class: Represents a phone user.

- Properties:
  - name: the name of the user.
  - phoneNumber: the phone number of the user.

3. Observer class: Represents an observer who gets notified when a customer is dialed.

- Properties:

  - name: the name of the observer.
  - action: the action taken by the observer when notified.

- Methods:
  - notify(user): Logs the notification action when a user is dialed.

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
