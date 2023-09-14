
const { program } = require('commander');

const {data}  = require('./data')


function filterAnimal(filterAnimal){
    const transformedData = [];

    data.forEach(location => {
        location.people.forEach(person => {
          person.animals.forEach(animal => {

            if (animal.name.includes(filterAnimal.filter)) {
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


function countChildren(){
    const transformedData = [];

    data.forEach(location => {
        location.people.forEach(person => {
            transformedData.push({
                name: location.name + " [" + location.people.length + "]",
                people:[
                    {
                        name: person.name+ " [" + person.animals.length + "]",
                        animals: person.animals
                    }
                ]
            })
        });
      });
      
      return transformedData;

}




program
  .version('1.0.0')
  .option('--filter <filter>', 'Filter')
  .action((options) => {
        console.log(JSON.stringify(filterAnimal(options)));
  })
  .option('--count', 'count')
  .action(() => {
    console.log(JSON.stringify(countChildren()));

})
  ;

program.parse(process.argv);