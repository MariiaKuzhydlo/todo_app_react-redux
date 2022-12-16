import styled from "styled-components"

export const SForm = styled.form`
   display:flex;
	flex-direction:column;
	justify-content:flex-start;
	width:100%;
	margin:0px 0px 10px 0px;
	@media (max-width: 500px) {
         width:440px;
			}
	@media (max-width: 450px) {
         width:340px;
			}
`;

export const SLabel = styled.label`
	display:flex;
	margin:0px 0px 15px 0px;
	font-size:20px;
	font-weight:bold;
`;

export const SInput = styled.div`
   display:flex;
	margin:0px 0px 10px 0px;

	& > input {
      width:80%;
		height:35px;
		border:1px solid lightgray;
		border-radius:3px;
		padding:5px 10px;
	}
	& > button {
		width:20%;
		background-color:dodgerblue;
		color:white;
		border-radius:3px;
		cursor: pointer;
		:hover{
				background-color:brown;
			}
	}
`;

export const SBackBtn = styled.button`
   width:100%;
	height:30px;
	background-color:	darkblue;
	color:white;
	border:1px solid lightgray;
	border-radius:3px;
	cursor: pointer;
	:hover{
				background-color:lightskyblue;
			}

`



