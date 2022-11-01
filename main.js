let poorCountry=['Bangladesh', 'Sri lanka'];
let richCountry=[...poorCountry,'China', 'Canada', 'America']; //separed operator
console.log(richCountry);

function calculation(...numbers){
    let sum=0;
    for(let i of numbers){
        sum=sum+i;
    }
console.log(sum);

}

calculation(10,20,30,40,5,8,);

function sleep(name, time ){
     console.log(name +" sleeping time " + time); //function dynamic
}
sleep("Rahim", "10pm");
sleep("Karim", "11pm");
sleep("Meena", "12pm");