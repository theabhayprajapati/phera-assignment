

# Phera Assignment | Frontend Internship
----------
## Everything from start to end about this assignment.
## Technologies Used:
Next.js for Frontend
TailwindCSS for styling.
**Packages**
- [TailwindCSS](https://github.com/tailwindlabs/tailwindcss/)
<!-- - add recoil -->
TailwindCSS was used for adding styles to the project.
- [Recoil](https://github.com/facebookexperimental/Recoil)
<!-- - add react textarea area -->
I have used recoil for for useing value all over the project, when ever required.
- [React Textarea](https://github.com/Andarist/react-textarea-autosize)
- Textarea make every easy to have auto sizing textarea,
- as the user want's to write more the area will expand.
<!-- tailwindcss, recoil, react-textarea-autosize -->
### Implementation of Project.
####**File Systems:**
[`Index.tsx`](/pages/index.tsx)
--- this file is the entry point of the project,
like homepage.
[`Components Folder`](/components/)
--- this folder contains all the components of the project, like
<!-- [`Header`](/components/Header/Header.tsx) -->
[`User Input Todo`](/components/Newtodo.tsx)
The user input todo is the component which is used to add new todo, user can enter details like title, note to the project, and every item will be added to the list with the given details and unique id,
<!-- [`Todo List`](/components/TodoList/TodoList.tsx) -->
[`Todo List`](/components/TodoList/TodoList.tsx)
The todo list is the component which is used to display the list of todo's, the user have added;
**Action's like**
*Deleleing todo, update todo, takes place here.*  
[`Updatetodo`](/components/UpdateTodo.tsx)
The update todo is the component which is used to update the todo's, the user have added; when the user click on 📝. the update state become true and show the update form, after updating the form user click's on the update button. Todo gets updated.

----------

### State Management:
As you have seen here there are different different compnents which for **taking**, **showing**, **deleting** and **updating** the todo's, here we would have used pass the data from the top state here which is [`Index.tsx`](/pages/index.tsx)to lower states like [`TodoList`](/components/TodoList/TodoList.tsx) and [`UpdateTodo`](/components/UpdateTodo.tsx);
it's Not that **scale** nor **good as we can only pass to lower state what about state which are there Neighbour** **also what if we want to pass data from lowerest to uppper.** able.
<!-- add image here -->
![Props Drilling](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FUFjGKmtsbwgEz0wYVu0e4qcCzilLXd0Tb9i0YHGftBx__jMx30lmkooL6fJUlmhZ_w&usqp=CAU)

###Here Components State management tools,
- [`Recoil`](https://recoil.dev/)
<!-- - redux, React context api -->
- [`React Context API`](https://reactjs.org/docs/context.html)
<!-- - redux -->
- [`Redux`](https://redux.js.org/)


<!-- state management image -->
![State Management](https://miro.medium.com/max/1200/1*LEROK_E7fJWr4chqlN93Dg.jpeg)

Here as you can the graph is not like Steps, but it's like a **tree**, **web** which now make these components takin to any one easily.
<!-- quotes -->
> Now the lower level componets can easily access the data / talk to with the top level componets.
<!-- > i have used recoil write about recoil -->
<!-- talk about recoil -->
## [`Recoil`](https://recoil.dev/) is a library which is used to manage the state of the application.
- [`Recoil`](https://recoil.dev/)
Recoil runs of the concept of -[`Atoms`](https://recoiljs.org/docs/basic-tutorial/atoms) and[`Selectors`](https://recoiljs.org/docs/basic-tutorial/selectors)
- [`Atoms`](https://recoil.dev/docs/atoms) in Project.
- [`Atoms`](https://recoil.dev/docs/atoms) are like values wihch are out-side the components of the application, being outside gives them eliblity to be used by any [`Components`](components/) / [`Pages`](/pages/)
```Javascript
export const  todoList = atom<userNotes[]>({
    key: 'todoState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});
```
> Every atom is having **unique key** which makes it **unique**, and default value is the initial value of the atom, default value can be anything like an *empty array* ```[]```, or a *string* ```'String'```, or a *number*```0```, or a boolean ```true``` or ```false```.
#### Accessing the atoms:
Accessing the values of the atom is very easy. For example
```Javascript
const todoList = useRecoilValue(todoList);
```
[`useRecoilValue`](https://recoiljs.org/docs/api-reference/core/useRecoilValue) is a hook which is used to access the values of the atom. but what if we want to update the value of atom 
```Javascript
const [todolist, setTodolist] = useRecoilState(todoList)
```
[`useRecoilState`](https://recoiljs.org/docs/api-reference/core/useRecoilState) this help us to update the value of atoms and even access.

## Here now we have access to data in our application, now here comes adding, reading, updating and deleting the todo's.
#### Adding the todo's:
[`NewTodo`](/components/Newtodo.tsx)
if the file from where we can add data to state,
```Javascript
const Initailtodo = {
    id: '',
    title: '',
    notes: ''
}
```
> **id** is the unique id of the todo,
> **title** is the title of the todo,
> **notes** is the note of the todo.

<u>This is initail value of *specific todo*, which is liked to *Input* and *Textarea* fiels.</u>

After user updates the value of the input field, the value is stored in the state,
and the user click on the [`Add Todo`](/components/Newtodo.tsx), the data is added to the state which runs this function.
```javascript
const addTodo = () => {
        if (todo.title.trim() === '') {
            return
        }
        const newTodo = {
            id: new Date().getTime(),
            title: todo.title,
            notes: todo.notes
        }
        {

            todos.length > 0 ? setTodos([...todos, newTodo]) : setTodos([newTodo])

        }
    }
```
```javascript
const [todos, setTodos] = useRecoilState(todoList);
```
> setTodos is atom which creates values in Atoms.
#### Reading values from the state:
Now as the values are added in the states we access them any other components. [`TodoList`](/components/TodoList.tsx)
```Javascript
    const [todos, settodos] = useRecoilState<userNotes[]>(todoList)
```
> now with this we read values in any component.
```javascript
todos.length > 0 && todos.map((todo) => {
        return (
            <div key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.notes}</p>
            </div>
        )
    })
    : (
        <div>
            <h3>No Todo's</h3>
        </div>
    )
```
> This line make sure that if the values are *more than* **0** then it will render the values, if not it will render the **No Todo's**.
#### Deleleing the values in the state:
> Now we can delete the values from the state.
```javascript
const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
}
```
[`deleteTodo`](/components/TodoList.tsx)
Every values of todo that is fetched i also have has 💣, which run the above *function onClick* with the id:
```HTML
<span onClick={() => deleteTodo(todo.id)}>
🗑</span>
```
#### Updating the values in the state:
> Now we can update the values in the state, in [`TodoList`](/components/TodoList.tsx)
Every todo values in also value **editTodo** state
```Javascript
  const [editTodo, setEditTodo] = useRecoilState(currentTodo)
```
> Now we can update the values in the state, in [`TodoList`](/components/TodoList.tsx) update this state and then add this to the todos state.
```Javascript

    const updateTodo = (id: number | string, title: string, notes: string) => {
    setIsEditing(false)
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, title, notes } : todo)))
    }
```
> [`updateTodo`](/components/TodoList.tsx)

#### Here everything that i have used to make the application is explained, if I have missed something then please let me know, I will try to explain it.

<!-- connect me on twitter -->
Connect me on Twitter [`@AbhayPrajapati_`](https://twitter.com/AbhayPrajapati_)

<!-- checkout other repos -->
Checkout other repos/ And Build.
- [`Open Apple Store API`](https://oas.vercel.app/)
- [`Twitter Clone`](https://twitter-m-2.vercel.app/)
- [`Nike Clone`](https://cloneofnike.vercel.app/) *🚧*