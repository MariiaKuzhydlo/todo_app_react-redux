import styled from "styled-components"

export const STodos = styled.div`
		border:1px solid lightgray;
      border-radius:3px;
		& > div{
			width:500px;
			display:flex;
			align-items:center;
			justify-content:space-between;
			border-bottom:1px solid lightgray;
			:last-child{
				border-bottom:none;
			}
			:nth-child(odd){
		   	background-color:gainsboro;
			}
			@media (max-width: 500px) {
         	width:440px;
			}
			@media (max-width: 450px) {
         	width:340px;
			}
		}
		

		
`

export const SContent = styled.div`
	display:flex;
	padding:10px;
		& > input{
			margin:0px 20px 0px 0px;
		}
`
export const SIcons = styled.div`
   	& > span{
			padding:5px;
			margin:0px 10px 0px 0px;
			border-radius:3px;
			cursor: pointer;
		}	
		& > span:first-child{
			background-color:green;
			:hover{
				background-color:gold;
			}
		}
		& > span:last-child{
			background-color:red;
			:hover{
				background-color:yellow;
			}
		}
`