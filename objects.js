var iPhone = {

    model : 13,
    ios: 12.5,
    price: "54$",
    release_year: 2021,
    chip: "A15",
    rating: [],
    getRating: function (newRating) {
        this.rating.push(newRating);
    },
    getRatingCount: function (){
        return `So far we've received, ${this.rating.length} ratings from our users!`;
    }
}; //optional semi-colon

console.table(iPhone);

iPhone.getRating(5);
iPhone.getRating(4);
iPhone.getRating(3);

console.table(iPhone);
console.log( iPhone.getRatingCount());

