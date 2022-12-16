import {SForm, SInput, SLabel, SBackBtn} from "./styles"
import { useState,useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { addTodo, handleEditSubmit} from '../../redux/todoSlice';



export const Form = ( {editFormVisibility, editTodo, cancelUpdate}) => {
	const todos = useSelector((state)=>state.todos);

	const dispatch = useDispatch();

	const [todoValue, setTodoValue]=useState('');

	const [editValue, setEditValue]=useState('');

	useEffect(()=>{
		setEditValue(editTodo.todo);
	},[editTodo])

	const handleSubmit=(e)=>{
      e.preventDefault();
      let date = new Date();
      let time = date.getTime();
      let todoObj={
         id: time,
         todo: todoValue,
         completed: false
      }
      setTodoValue('');
      dispatch(addTodo(todoObj))
};
   const editSubmit = (e) => {
		e.preventDefault();
		let editedObj={
			id: editTodo.id,
	      todo: editValue,
	      completed: false
	}
	dispatch(handleEditSubmit(editedObj))
}


	return(
		<>
		   {editFormVisibility===false?(
			<SForm onSubmit={handleSubmit}>
			<SLabel>Todos ({todos.length})</SLabel>
			<SInput>
				<input placeholder="Enter todo here" required value={todoValue} 
				onChange={(e)=>setTodoValue(e.target.value)}/>
				<button>Add todo</button>
			</SInput> 
			</SForm>
		):(
		   <SForm onSubmit={editSubmit}>
			<SInput>
				<input required value={editValue||""} 
				onChange={(e)=>setEditValue(e.target.value)}/>
				<button>Update todo</button>
			</SInput>
			<SBackBtn type="button" onClick={cancelUpdate}>BACK</SBackBtn>
		   </SForm>
		)}
		</>
	)
}

export default Form