import { MdOutlineMoreHoriz, MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import TaskActionButton from "../task-action-button/task-action-button";

import "./task.css";

const useComponentVisble = (defaultVisibilty, outSideHandler) => {
	const [isVisible, setIsVisible] = useState(defaultVisibilty);
	const componentRef = useRef(null);

	useEffect(() => {
		document.addEventListener("click", outSideHandler);

		() => document.removeEventListener("click", outSideHandler);
	}, []);

	return { componentRef, isVisible, setIsVisible };
};

const Task = ({ id, title, deleteTask, completeTask, editTask }) => {
	const { isVisible, setIsVisible, componentRef } = useComponentVisble(
		false,
		outSideHandler
	);

	function outSideHandler(e) {
		if (componentRef.current && !componentRef.current.contains(e.target)) {
			setIsVisible(false);
		}
	}

	return (
		<article className="flex round-6 align-ic justify-btw task">
			<h2 className="task__title">{title}</h2>
			<button
				className="btn btn--icon task__btn--more"
				onClick={() => setIsVisible(!isVisible)}
				ref={componentRef}
			>
				{<MdOutlineMoreHoriz className="icon" />}
			</button>
			<div className={`flex task-actions ${isVisible ? "show" : ""}`}>
				<TaskActionButton
					clickAction={editTask.bind(null, id)}
					buttonText={"Edit"}
					icon={<BiSolidEdit className="icon" />}
					tooltipText={"Edit task"}
				/>
				<TaskActionButton
					clickAction={deleteTask.bind(null, id)}
					buttonText={"Delete"}
					icon={<MdDelete className="icon" />}
					tooltipText={"Delete task"}
				/>
				<TaskActionButton
					clickAction={completeTask.bind(null, id)}
					buttonText={"Mark Completed"}
					icon={<IoIosCheckmarkCircle className="icon" />}
					tooltipText={"Complete task"}
				/>
			</div>
		</article>
	);
};

export default Task;
