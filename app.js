
const { program } = require('commander');

const {data}  = require('./data')


program
  .version('1.0.0')
  .description('Une CLI de démonstration en Node.js')
  .option('--filter <filter>', 'Filtre à appliquer')
  .action((options) => {
    data.forEach(location => {
        location.people.forEach(person => {
          person.animals.forEach(animal => {
            if (animal.name.includes(options.filter)) {
                console.log(`Animal: ${animal.name}`);
            }
          });
        });
      });
    


  });

program.parse(process.argv);