import { useState } from 'react';
import './ChatInput.css'

const ChatInput = (props) => {
	const [inputStates, setInputStates] = useState([
		{
		ID: `${props.UID}`,
		Text: '',
		Time: new Date('')
		},
	]);
	const [Text, setText] = useState('');
	const [newLog, setNewLog] = useState('');

	const inputSubmit_handler = (event) => {
		event.preventDefault();
		console.log(`inputSubmit_handler: ${inputStates[0].ID} ${Text} ${new Date().getSeconds().toString()}`);
		setNewLog(Text);
		props.onAddLog(Text);	// 여기서 Text 대신 newLog 를 넘기면 데이터가 한 박자 밀린다. set함수가 동일한 핸들러 아래에 있을 때 큐가 그런 식으로 처리되는 것 같다
		setText('');
	}
	
	const inputChange_handler = (event) => {
		setText(event.target.value);
	}


	return (
		<form className="chatForm" onSubmit={inputSubmit_handler}>
			<input className="chatInput" placeholder="Send message..." onChange={inputChange_handler} value={Text}></input>
			<button>Button</button>
		</form>
	);
}

export default ChatInput;