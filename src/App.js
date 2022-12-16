import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import {useState} from 'react';

function App() {

   const [editFormVisibility, setEditFormVisibility]=useState(false);
   const [editTodo, setEditTodo]=useState('');
   const handleEditClick=(todo)=>{
      setEditFormVisibility(true);
      setEditTodo(todo);
   };

   const cancelUpdate=()=>{
      setEditFormVisibility(false);
   }



   return (
   <div className="App">
		<div className='wrapper'>
			<Header/>
			<Form editFormVisibility={editFormVisibility} editTodo={editTodo}
      		cancelUpdate={cancelUpdate} />
			<Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
		</div>
   </div>
   );
}

export default App;
