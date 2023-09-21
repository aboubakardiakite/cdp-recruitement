const filters = require('./filter');
const counts = require('./count');

describe('filter',()=>{
    const data = [{
        name: 'Dillauti',
        people:
          [{
            name: 'Winifred Graham',
            animals:
              [{name: 'Anoa'},
                {name: 'Duck'},
                {name: 'Narwhal Cat'},]
          },
            {
              name: 'Blanche Viciani',
              animals:
                [{name: 'Barbet'},
                  {name: 'Rhea'},
                  {name: 'Guinea Fowl'},
                  {name: 'Deer Mouse'}]
            },
            ]
      },
        {
          name: 'Tohabdal',
          people:
            [
              {
                name: 'Alexander Fleury',
                animals:
                  [{name: 'Gelada'},
                    {name: 'Courser'},
                    {name: 'Woodpecker'}]
              },
              {
                name: 'Linnie Lamb',
                animals:
                  [{name: 'Burro'},
                    {name: 'African Wild Dog'},
                    {name: 'Rabbits  Cat'}]
              },
              {
                name: 'Randall Benoît',
                animals:
                  [{name: 'Chameleons'},
                    {name: 'Sand Cat'}]
              }]
        }
      ]

  const data2 = [
  ]

      
    it('should be an empty array',()=>{
        expect(filters.filterAnimal('ry',data).length).not.toEqual(1);
    })

    it('should return 1 element',()=>{
      console.log("++++++++++++++",filters.filterAnimal('Dog',data));
        expect(filters.filterAnimal('Dog',data).length).toEqual(1);
    })

    it('should return 2 element',()=>{
        expect(filters.filterAnimal('Cat',data).length).toEqual(2);
    })

    it('should return 0 element',()=>{
        expect(filters.filterAnimal('Cat',data2).length).toEqual(0);
    })

})

describe('count',()=>{
    const data = [{
        name: 'Dillauti',
        people:
          [{
            name: 'Winifred Graham',
            animals:
              [{name: 'Anoa'},
                {name: 'Duck'},
                {name: 'Narwhal'},]
          },
            {
              name: 'Blanche Viciani',
              animals:
                [{name: 'Barbet'},
                  {name: 'Rhea'},
                  {name: 'Guinea Fowl'},
                  {name: 'Deer Mouse'}]
            },
            ]
      },
        {
          name: 'Tohabdal',
          people:
            [
              {
                name: 'Alexander Fleury',
                animals:
                  [{name: 'Gelada'},
                    {name: 'Courser'},
                    {name: 'Woodpecker'}]
              },
              {
                name: 'Linnie Lamb',
                animals:
                  [{name: 'Burro'},
                    {name: 'African Wild Dog'},
                    {name: 'Rabbits  Cat'}]
              },
              {
                name: 'Randall Benoît',
                animals:
                  [{name: 'Chameleons'},
                    {name: 'Sand Cat'}]
              }]
        }
      ]

  const data2 = [
  ]
    
    it('should be equal',()=>{
        expect(counts.countChildren(data)[0].name).toEqual('Dillauti [2]');
    })

    it('should be equal',()=>{
        expect(counts.countChildren(data)[0].people[0].name).toEqual('Winifred Graham [3]');
    })

    it('should be not equal',()=>{

        expect(counts.countChildren(data)[0].name).not.toEqual('Dillauti [3]');
    })

    it('should be equal',()=>{
        expect(counts.countChildren(data)[0].people[0].name).not.toEqual('Winifred Graham [4]');
    })


    it('should be empty',()=>{
        expect(counts.countChildren(data2)).toEqual([]);
    })
})