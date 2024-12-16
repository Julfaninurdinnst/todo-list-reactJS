
export default function TodoInput(props) {
  const {handleAddTodos, setTodoValue, todoValue} = props
  return (
    <header>
      <input value={todoValue} onChange={(e)=>{
setTodoValue(e.target.value)
      }}
      placeholder="Enter todo ...."  />
      <button onClick={()=>{
        handleAddTodos(todoValue)
        setTodoValue('')
      }}
      >add</button>
    </header>
  )
}