const { program } = require('commander');
const filters = require('./filter');
const counts = require('./count');
const {data}  = require('./data')





program
  .version('1.0.1')
  .option('--filter <filter>', 'Filter')
  .option('--count', 'count')
  .option('--countFilter <filter>',"Filter")
  .action((options) => {
      try {
          if(options.filter)
              console.log(JSON.stringify(filters.filterAnimal(options.filter,data),null,2));
          if(options.count)
              console.log(JSON.stringify(counts.countChildren(data),null,2));
          if(options.countFilter){
            const filterANimal = filters.filterAnimal(options.countFilter,data)
            const countRes = counts.countChildren(filterANimal);
            console.log(JSON.stringify(countRes,null,2));

          }
      }catch (error) {
          console.error("This command does not exist",error.message);
          process.exit(1);
      }

  });

program.parse(process.argv);