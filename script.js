/* OOPS Task */
// 1.Write a “person” class to hold all the details.
// 2.write a class to calculate the uber price.

// 1.Write a “person” class to hold all the details.


class person {
  constructor(name, age, qualification, salary, height, weight) {
    this.name = name;
    this.age = age;
    this.qualification = qualification;
    this.salary = salary;
    this.height = height;
    this.weight = weight;
  }
}

const person1 = new person("Natarajan", "30", "BE", "20000", "275", "75");
console.log(person1);
const person2 = new person("karikalan", "28", "Catering", "25000", "265", "75");
console.log(person2);



//  2.   write a class to calculate the uber price.
class travelFare {
  constructor(distance, ratePerUnitDistance) {
    this.distance = distance;
    this.ratePerUnitDistance = ratePerUnitDistance;
  }
  uberPrice() {
    return this.distance * this.ratePerUnitDistance;
  }
}

const traveller1 = new travelFare(10, 20);
console.log(traveller1.uberPrice());