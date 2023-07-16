import "./task-action-button.css";

const TaskActionButton = ({ buttonText, tooltipText, icon, clickAction }) => {
	return (
		<button
			onClick={clickAction}
			className="btn btn--icon task-actions__btn"
		>
			<span>{buttonText}</span>
			{icon}
			<p className="tooltip">{tooltipText}</p>
		</button>
	);
};

export default TaskActionButton;
