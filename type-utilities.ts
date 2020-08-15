/*
List with all utilities: https://www.typescriptlang.org/docs/handbook/utility-types.html
*/

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const todo: Readonly<Todo> = {
  title: "Build a ship",
  description: "I know how to do that?",
  completed: false,
};

// todo.completed = true; <== Error, utilitie readonly block this

// Partial allows to use some fields from type
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

console.log(updateTodo(todo, { completed: true }));

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo2: TodoPreview = {
  title: "Build githubis",
  completed: false,
};

// Same like Pick but inverse
type TodoPreview2 = Omit<Todo, "description">;

const todo3: TodoPreview2 = {
  title: "Build githubis",
  completed: false,
};
