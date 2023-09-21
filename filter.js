




function filterAnimal(filterAnimal,data){
    const transformedData = [];

    data.forEach(location => {
        location.people.forEach(person => {
          person.animals.forEach(animal => {
            if (animal.name.includes(filterAnimal)) {
                transformedData.push({
                    name: location.name,
                    people:[
                        {
                            name: person.name,
                            animals:[{
                                name: animal.name
                            }]
                        }
                    ]
                })
            }
          });
        });
      });

      return transformedData;

}

module.exports = {
    filterAnimal
}