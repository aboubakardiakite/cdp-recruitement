
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

program
  .version('1.0.0')
  .description('Une CLI de démonstration en Node.js')
  .option('--filter <filter>', 'Filtre à appliquer')
  .action((options) => {
        console.log(JSON.stringify(filterAnimal(options)));
  });

program.parse(process.argv);