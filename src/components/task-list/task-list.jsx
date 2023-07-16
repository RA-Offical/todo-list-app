import { useEffect, useState } from "react";
import Task from "../task/task";
import "./task-list.css";

const TaskList = ({
	taskList,
	deleteTask,
	completeTask,
	editTask,
	category,
}) => {
	const [categoryList, setCategoryList] = useState([]);

	useEffect(() => {
		if (category !== "all") {
			const newCategoryList = taskList.filter(
				(task) => task.status === category
			);
			setCategoryList(newCategoryList);
		} else {
			setCategoryList(taskList);
		}
	}, [taskList, category]);

	if (categoryList.length === 0) {
		return (
			<section className="task-list">
				<p className="task-list__info">
					{category !== "all"
						? `No ${category} task to display here`
						: "Add new tasks..."}
				</p>
			</section>
		);
	}
	return (
		<section className="grid task-list">
			{categoryList.map((task) => {
				return (
					<Task
						key={task.id}
						{...task}
						deleteTask={deleteTask}
						completeTask={completeTask}
						editTask={editTask}
					/>
				);
			})}
		</section>
	);
};

export default TaskList;
