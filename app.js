
const { program } = require('commander');

const {data}  = require('./data')

function filterAnimal(filterAnimal,data) {
    return data.flatMap((location) =>
      location.people.flatMap((person) =>
        person.animals
          .filter((animal) => animal.name.includes(filterAnimal))
          .map((filteredAnimal) => ({
            name: location.name,
            people: [
              {
                name: person.name,
                animals: [{ name: filteredAnimal.name }],
              },
            ],
          }))
      )
    );
  }

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
    filterAnimal,countChildren
}


program
  .version('1.0.1')
  .option('--filter <filter>', 'Filter')
  .option('--count', 'count')
  .action((options) => {
      try {
          if(options.filter)
              console.log(JSON.stringify(filterAnimal(options.filter,data),null,2));
          if(options.count)
              console.log(JSON.stringify(countChildren(data),null,2));
      }catch (error) {
          console.error("This command does not exist",error.message);
          process.exit(1);
      }

  });

program.parse(process.argv);