
const { program } = require('commander');

const {data}  = require('./data')
const sentence  = 'Hello WOrld';

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


function countChildren(data){

      return data.flatMap((location) =>
      location.people.flatMap((person) =>
        person.animals
          .map((perso) => ({
            name: location.name + " [" + location.people.length + "]",
            people: [
              {
                name: person.name+ " [" + person.animals.length + "]",
                animals: perso.name,
              },
            ],
          }))
      )
    );

}



module.exports = {
    sentence,
    filterAnimal,countChildren
}


program
  .version('1.0.0')
  .option('--filter <filter>', 'Filter')
  .option('--count', 'count')
  .action((options) => {
    if(options.filter)
        console.log(JSON.stringify(filterAnimal(options.filter,data)));
    if(options.count)
        console.log(JSON.stringify(countChildren()));

  });


program.parse(process.argv);