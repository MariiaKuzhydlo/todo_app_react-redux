import {STodos, SContent,SIcons } from "./styles"
import {Icon} from "react-icons-kit"
import {trash} from 'react-icons-kit/feather/trash'
import {edit} from 'react-icons-kit/feather/edit'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateCheckbox } from '../../redux/todoSlice';


export const Todos = ({handleEditClick,editFormVisibility }) => {


	const todos = useSelector((state)=>state.todos);
	const dispatch = useDispatch();
	return(
		<STodos>
			{todos.map((todo)=>(
			<div key={todo.id}>
				<SContent>
					{editFormVisibility===false&&(
						<input type="checkbox" checked={todo.completed}
						onChange={()=>dispatch(updateCheckbox(todo.id))}></input>
					)}
					<p>{todo.todo}</p>
				</SContent>
				<SIcons>
					{editFormVisibility===false&&(
						<>
							<span onClick={()=>handleEditClick(todo)}><Icon icon={edit}/></span>
            			<span onClick={()=>dispatch(deleteTodo(todo.id))}><Icon icon={trash}/></span>
						</>
					)}
				</SIcons>
			</div>
		))}
		</STodos>

	)
}

export default Todos;