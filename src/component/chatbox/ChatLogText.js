import './ChatLogText.css';

const ChatLogText = (props) => {
	return (
		<div className='ChatLogText'>
			<div className='NickName'>{props.nick}</div>
			<div className='Message'>{props.message}</div>
		</div>
	);
}

export default ChatLogText;