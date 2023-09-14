const app = require('./app');

describe('filter',()=>{
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
      
      
    it('should be an empty array',()=>{
        expect(app.filterAnimal('ry',data).length).toEqual(0);
    })

    it('should return 1 element',()=>{
        expect(app.filterAnimal('Dog',data).length).toEqual(1);
    })

    it('should return 2 element',()=>{
        expect(app.filterAnimal('Cat',data).length).toEqual(2);
    })

    it('should return 0 element',()=>{
        expect(app.filterAnimal('Cat',data2).length).toEqual(0);
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
      const dataRes = [{
        name: 'Dillauti [2]',
        people:
          [{
            name: 'Winifred Graham [3]',
            animals:
              [{name: 'Anoa'},
                {name: 'Duck'},
                {name: 'Narwhal'},]
          },
            {
              name: 'Blanche Viciani [4]',
              animals:
                [{name: 'Barbet'},
                  {name: 'Rhea'},
                  {name: 'Guinea Fowl'},
                  {name: 'Deer Mouse'}]
            },
            ]
      },
        {
          name: 'Tohabdal [3]',
          people:
            [
              {
                name: 'Alexander Fleury [3]',
                animals:
                  [{name: 'Gelada'},
                    {name: 'Courser'},
                    {name: 'Woodpecker'}]
              },
              {
                name: 'Linnie Lamb[3]',
                animals:
                  [{name: 'Burro'},
                    {name: 'African Wild Dog'},
                    {name: 'Rabbits  Cat'}]
              },
              {
                name: 'Randall Benoît [3]',
                animals:
                  [{name: 'Chameleons'},
                    {name: 'Sand Cat'}]
              }]
        }
      ]

      const dataRes1 = [{
        name: 'Dillauti [2]',
        people:
          [{
            name: 'Winifred Graham [3]',
            animals:
              [{name: 'Anoa'},
                {name: 'Duck'},
                {name: 'Narwhal'},]
          },
            {
              name: 'Blanche Viciani [4]',
              animals:
                [{name: 'Barbet'},
                  {name: 'Rhea'},
                  {name: 'Guinea Fowl'},
                  {name: 'Deer Mouse'}]
            },
            ]
      },
        {
          name: 'Tohabdal [3]',
          people:
            [
              {
                name: 'Alexander Fleury [3]',
                animals:
                  [{name: 'Gelada'},
                    {name: 'Courser'},
                    {name: 'Woodpecker'}]
              },
              {
                name: 'Linnie Lamb[3]',
                animals:
                  [{name: 'Burro'},
                    {name: 'African Wild Dog'},
                    {name: 'Rabbits  Cat'}]
              },
              {
                name: 'Randall Benoît [4]',
                animals:
                  [{name: 'Chameleons'},
                    {name: 'Sand Cat'}]
              }]
        }
      ]
      const data2 = [
      ]
      
      
    it('should be equal',()=>{
        expect(app.countChildren(data)[0].name).toEqual('Dillauti [2]');
    })

    it('should be equal',()=>{
        expect(app.countChildren(data)[0].people[0].name).toEqual('Winifred Graham [3]');
    })

    it('should be not equal',()=>{

        expect(app.countChildren(data)[0].name).not.toEqual('Dillauti [3]');
    })

    it('should be equal',()=>{
        expect(app.countChildren(data)[0].people[0].name).not.toEqual('Winifred Graham [4]');
    })


    it('should be empty',()=>{
        expect(app.countChildren(data2)).toEqual([]);
    })
})