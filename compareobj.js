var objects = [
    {
        x: 1 , y:1,
        
    }
];

// for (let i = 0; i < 5; i++) {
       
//     objects.push({x: +(1), y: +(1+1)});
// }
console.log(objects);

function getCount(objects) {
    var count = 0;
    
    objects.forEach(() => {
        //console.log(index, value);
        if(objects.x == objects.y) {
            //count++;
        }
    })
    
    objects.filter((obj) => {
        if(obj.x == obj.y ){
            count++;
        }
    }
        )
    console.log( count);
    
}

getCount(objects)

