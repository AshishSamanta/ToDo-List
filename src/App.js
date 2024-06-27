import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';
import BTNmodule from './Button.module.css'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

function App() {
  let [todolist, settodolist] = useState([]);
  let saveTodoList = (event) => {

    let toName = event.target.toName.value;
    // alert(toName);
    if (!todolist.includes(toName)) {
      let finalTodoList = [...todolist, toName];
      settodolist(finalTodoList);
    }
    else {
      alert("already added....")
    }
    event.preventDefault();
  }
  let list=todolist.map((value,item)=>{
    return(
      <TodoListItem value={value} key={item}  indexNumber={item}
      todolist={todolist}
      setTodoList={settodolist}
      
      />
    )
  })
  return (
    <div className="App">
      <h1>ToDo LiSt</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name="toName"></input> <button>Save</button>
      </form>
      <div className='outerdiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;
function TodoListItem({value,indexNumber,todolist,setTodoList}){
  let deleterow=()=>{
    let finalData=todolist.filter((v,i)=>i!=indexNumber)
    setTodoList(finalData)

  }
  return (
    <li>{indexNumber+1}.    {value}<span onClick={deleterow}>&times;</span></li>
  )
}
