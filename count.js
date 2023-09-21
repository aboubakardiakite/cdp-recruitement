function countPeople(data){
    const transformedData = [];
    data.forEach(person =>{
        transformedData.push({
            name: person.name+ " [" + person.animals.length + "]",
            animals: person.animals
        })
    })

    return transformedData;
}

function countChildren(data){
    const transformedData = [];
    data.forEach(location => {
        transformedData.push({
            name: location.name + " [" + location.people.length + "]",
            people : [...countPeople(location.people)]
        })

    });

    return transformedData;

}

module.exports = {
  countChildren
}