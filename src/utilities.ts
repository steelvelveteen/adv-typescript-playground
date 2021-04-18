// Partial<T>
/**************************************************/
interface Starship {
    name: string;
    enableHyperjump: boolean;
}

const intruder: Starship = { name: 'Intruder', enableHyperjump: false };
console.log(intruder);

// Partial<T> enables you to update one of the member fields without typescript forcing you to include all the other members. Behind the scenes Partial will make all the members optional temporarily
const updateStarship = (
    original: Starship,
    updatedStarship: Partial<Starship>
) => {
    // The power of spread operators: combine two arrays or objects into one
    return { ...original, ...updatedStarship };
};

const updatedStarship = updateStarship(intruder, { name: 'Explorer' });
console.log(updatedStarship);

interface Todo {
    title: string;
    description: string;
}

const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
    return { ...todo, ...fieldsToUpdate };
};

const todo1 = {
    title: 'organize desk',
    description: 'clear clutter',
};

console.log(todo1);

const todo2 = updateTodo(todo1, {
    description: 'throw out trash',
});

console.log(todo2);

// Required<T>
/**************************************************/
// The opposite of Partial. Properties that are optional become required
