function getChildren(data,filterChildren){
    
    const transformedData = data.filter( (animal) => animal.name.includes(filterChildren)).map((animalName)=>{
        return {
            name: animalName.name
        }
    });

    return transformedData;

}


function filterChildren(data,filterAnimal){
    const transformedData = [];
    data.forEach(person =>{
        const res = [...getChildren(person.animals,filterAnimal)]
        if(res.length != 0){
            transformedData.push({
                name: person.name,
                animals: res
            })
        }
    })

    return transformedData;
}

function filterAnimal(filterAnimal,data){
    const transformedData = [];
    data.forEach(location => {
        const res = [...filterChildren(location.people,filterAnimal)]
        if(res.length != 0){
            transformedData.push({
                name: location.name ,
                people : res
            })
        }

    });

    return transformedData;

}



module.exports = {
    filterAnimal
}