import "./todo-form.css";

const TodoForm = ({
	inputValue,
	setInputValue,
	isEditing,
	addTask,
	updateEditTask,
	showAlert,
}) => {
	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue === "") {
			showAlert("Input is empty", "danger", true);
		} else if (isEditing) {
			updateEditTask(inputValue);
		} else {
			addTask(inputValue);
		}
	};

	return (
		<section className="todo-form-wrapper">
			<form className="flex todo-form" onSubmit={handleSubmit}>
				<input
					type="text"
					className="round-6 input todo-form__input"
					placeholder="Submit client project"
					autoFocus
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button
					type="submit"
					className="round-6 btn btn--primary todo-form__btn--add"
				>
					{isEditing ? "Edit" : "Add"}
				</button>
			</form>
		</section>
	);
};

export default TodoForm;
