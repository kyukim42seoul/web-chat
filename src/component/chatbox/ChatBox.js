import ChatInput from './ChatInput';
import ChatLogText from './ChatLogText';
import './ChatBox.css';
import { useState } from 'react';


const ChatBox = (props) => {
	const [newText, setNewText] = useState();


	const addLogHandler = (newChatLog) => {
		console.log(`addLogHandler: ${newChatLog}`);
		setNewText(newChatLog);
	}


	return (
		<div className='ChatBox_container'>
			<div className='ChatBox_main'>
				<div className='chatLog'>
					<ChatLogText nick='junselee' message={newText} />
					<ChatLogText nick='kyukim' message='hello'/>
					<ChatLogText nick='inshin' message='hi'/>
				</div>
				<ChatInput onAddLog={addLogHandler} UID={props.UID}/>
			</div>
		</div>
	);
}

export default ChatBox;