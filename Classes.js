/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 *
 * 2. Add the constructor that initializes all properties
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 *
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
 *   and returns the age of the person
 *
 * after you are done with the class, create at least 3 objects of type Person.
 * print every person's name using the method printName of each object
 * print out the sum of their ages using calculateAge() method
 */
class Person {
  // continue the code here

  constructor(firstName, LastName, gender, birthyear) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.gender = gender;
    this.birthyear = birthyear;
  }

  printName = () => {
    console.log(this.firstName, this.LastName);
  };

  calcuateage = (currentYear) => {
    return currentYear - this.birthyear;
  };
}

const person1 = new Person("abdullah", "fahad", "male", 1995);
person1.printName();

const person2 = new Person();
console.log(person1.calcuateage(2023));

const person3 = new Person("Ali", "Mohammed", "male", 1999);
person3.printName();

const person4 = new Person();
console.log(person3.calcuateage(2023));

const person5 = new Person("Jaber", "Khaled", "male", 2000);
person5.printName();

const person6 = new Person();
console.log(person5.calcuateage(2023));

const sum =
  person1.calcuateage(2023) +
  person3.calcuateage(2023) +
  person5.calcuateage(2023);
console.log(sum);

/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array, you should not pass it in the constructor method, and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  // continue the code here
}

/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here
