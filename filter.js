
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

module.exports = {
    filterAnimal
}