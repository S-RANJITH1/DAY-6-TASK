// task 1 =>

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
const casinoroyale1 = new Movie("Casino Royale", "Eon Productions");
const movies = [
  new Movie("Movie 1", "Studio A", "PG"),
  new Movie("Movie 2", "Studio B", "PG-13"),
  new Movie("Movie 3", "Studio C", "R"),
  new Movie("Movie 4", "Studio D", "PG"),
  new Movie("Movie 5", "Studio E", "PG-13")
];
const pgMovies = Movie.getPG(movies);
console.log(pgMovies);

// QUESTION 2

class Circle{
    constructer(radius,color)
   {
      this.radius=radius
      this.color=color
  }
   get radiusCircle()
  {
      return this.radius
  }
   set radiusCircle(radius)
{
   this.radius=radius
} 
    get colorCircle()
{
  return this.color 
}
  set colorCircle (color)
{
  this.color=color
}
  get toString( )
{
  return `Circle[radius=${this.radius},color=${this.color}]`
}
  get Circlearea()
{
  return Math.PI*this.radius*this.radius 
}
  get circumference()
{
  return 2*Math.PI*this.radius
}
}
  var data= new Circle(2.0,"red")
  data.radiusCircle=2.0
  console.log(data.radiusCircle)
  data.colorCircle="green"
  console.log(data.colorCircle)
  console.log(data.toString)
  console.log(data.Circlearea)
  console.log(data.circumference)

  // QUESTION 3

  class Person{
    constructor(name,age,salary,gender){   
this.name=name
this.age=age
this.salary=salary
this.gender=gender
}
}
var obj1=new Person("Ranjith",30,40000,"Male")
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.salary);
console.log(obj1.gender);

// QUESTION 4

      class UberPrice{
        constructor(distance, time){
            this.distance = distance;
            this.time = time;
            this.baseFare = 80;
            this.costPerKm = 7;
            this.costPerMinute = 4;
        }
        calculate(){
            let distanceCost = this.distance * this.costPerKm;
            let timeCost = this.time * this.costPerMinute;
            let totalCost = this.baseFare + distanceCost + timeCost
            return totalCost
        }
    }
    const object1 = new UberPrice(3,3);
    console.log(object1.calculate());