import { useState } from "react";
import "./App.css";
import { TodoForm, Categoires, TaskList, Alert } from "./components";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [taskList, setTaskList] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [editItemIndex, setEditItemIndex] = useState(null);
	const [category, setCategory] = useState("all");
	const [alert, setAlert] = useState({ msg: "", show: false, type: "" });

	const addTask = (inputValue) => {
		const newTask = {
			title: inputValue,
			id: new Date().getTime().toString(),
			status: "pending",
		};

		const newTaskList = [...taskList, newTask];
		setTaskList(newTaskList);
		setInputValue("");
		showAlert("Task added successfully", "success", true);
	};

	const deleteTask = (id) => {
		const newTaskList = taskList.filter((task) => task.id !== id);
		setTaskList(newTaskList);
		showAlert("Task deleted successfully", "success", true);
	};

	const completeTask = (id) => {
		const taskToUpdateIndex = taskList.findIndex((task) => task.id === id);

		const updatedTask = {
			...taskList[taskToUpdateIndex],
			status: "completed",
		};
		let newTaskList = [...taskList];

		console.log(newTaskList);
		newTaskList.splice(taskToUpdateIndex, 1, updatedTask);

		setTaskList(newTaskList);

		showAlert("Task marked completed successfully", "success", true);
	};

	const updateEditTask = (inputValue) => {
		const editItem = taskList[editItemIndex];
		const updatedTask = { ...editItem, title: inputValue };
		const partialUpdatedList = taskList.filter(
			(task) => task.id != editItem.id
		);
		const newTaskList = [...partialUpdatedList, updatedTask];

		setTaskList(newTaskList);
		setEditItemIndex(null);
		setIsEditing(false);
		setInputValue("");
		showAlert("Task updated successfully", "success", true);
	};

	const editTask = (id) => {
		const taskToEditIndex = taskList.findIndex((task) => task.id === id);
		const itemToEdit = taskList[taskToEditIndex];
		setInputValue(itemToEdit.title);
		setEditItemIndex(taskToEditIndex);
		setIsEditing(true);
	};

	const showAlert = (msg = "", type = "", show = false) => {
		console.log(msg, type, false);
		setAlert({ msg, type, show });
	};

	return (
		<>
			<Alert {...alert} taskList={taskList} showAlert={showAlert} />
			<main>
				<h1 className="app-title">Todo List App</h1>
				<TodoForm
					inputValue={inputValue}
					setInputValue={setInputValue}
					isEditing={isEditing}
					addTask={addTask}
					updateEditTask={updateEditTask}
					showAlert={showAlert}
				/>
				<Categoires setCategory={setCategory} category={category} />
				<TaskList
					taskList={taskList}
					deleteTask={deleteTask}
					completeTask={completeTask}
					editTask={editTask}
					category={category}
				/>
			</main>
		</>
	);
}

export default App;
