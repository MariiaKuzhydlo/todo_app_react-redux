import {createSlice} from "@reduxjs/toolkit"

const initialState =[
   {id: 1, todo: 'walk the dog', completed: true},
   {id: 2, todo: 'authenticate with passport-js', completed: true},
   {id: 3, todo: 'validate register input', completed: true},
	{id: 4, todo: 'create reddit website', completed: false},
	{id: 5, todo: 'store session on mongodb', completed: false},
]

const todoSlice = createSlice({
	name:"todos",
	initialState,
	reducers:{
		addTodo:(state, action) =>{
			state.push(action.payload)
		},
		deleteTodo:(state,action) =>{
			return state.filter(todo => todo.id !== action.payload)
		},
		handleEditSubmit:(state, action) => {
			let data = action.payload;
			const updatedArray=[];
			const todo = state.find((item)=>{
				if(item.id === data.id){
					item.id = data.id;
					item.todo = data.todo;
					item.completed = data.completed
				}
				updatedArray.push(item);
			})
			return todo;
		},
		updateCheckbox:(state, action) =>{
			const todo = state.find((todo) => todo.id === action.payload)
			if (todo) {
			todo.completed =!todo.completed
			}
	   }
	}
})

export const {addTodo, handleEditSubmit, deleteTodo, updateCheckbox} = todoSlice.actions;
export default todoSlice.reducer