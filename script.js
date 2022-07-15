//c) Write a method getPG, which takes an array of base type Movie as its argument,
     // and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not full.

     class listmovies {
        constructor (object){
         this.object = object;
         
     }
        
    getPgRatedMovies() {
        return this.object.filter((movie)=>{return movie.rating !== undefined})
     }
}
const listOfMovies = [
    {title:"movie1",rating:"PG13"},
    {title:"movie2",studio:"studio2"},
    {title:"movie3",studio:"studio3",rating:"PG"}
]


console.log(listOfMovies.getPgRatedMovies())      