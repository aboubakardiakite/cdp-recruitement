
function myFunction(filterAnimal,data,name,func) {

    const transformedData = [];

    const res = [...func(filterAnimal,data)]

    if(res.length != 0){
        transformedData.push({
            name: name ,
            animals : res
        })
    }

    return transformedData;
    
}

function getChildren(filterChildren,data){

    const transformedData = data.filter( (animal) => animal.name.includes(filterChildren)).map((animalName)=>{
        return {
            name: animalName.name
        }
    });

    return transformedData;

}


function filterChildren(filterAnimal,data){
    const transformedData = [];
    data.forEach(person =>{
        transformedData.push(...myFunction(filterAnimal, person.animals,person.name, getChildren));

    })

    return transformedData;
}




function filterAnimal(filterAnimal,data){
    const transformedData = [];
    data.forEach(location => {
        transformedData.push(...myFunction(filterAnimal, location.people, location.name, filterChildren));
    });

    return transformedData;

}



module.exports = {
    filterAnimal
}