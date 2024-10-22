import{Header} from "./components/Header"
import{Tabs} from "./components/Tabs"
import {TodoList} from "./components/TodoList"
import {TodoInput} from "./components/TodoInput"

function App(){

  const todos = [
    {input : "Hello , Add your first todo !" , complete: true},
    {input : "Get the groceries!" , complete : false},
    {input : "Get the dick!" , complete : false},
    {input : "Get the cock!" , complete : true},

  ]


  let x = 3
  return (
    <>
      <Header todos = {todos}/>
      <Tabs todos = {todos}/>
      <TodoList todos = {todos}/>
      <TodoInput/>
    </>
  )
}

export default App;