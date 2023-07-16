import { useEffect } from "react";
import "./alert.css";

const Alert = ({ show, msg, type, taskList, showAlert }) => {
	useEffect(() => {
		const alertTimeout = setTimeout(() => {
			showAlert();
		}, 3000);

		return () => clearTimeout(alertTimeout);
	}, [taskList, show]);

	return (
		<div className={`alert alert--${type} ${show ? "show" : ""}`}>
			<p>{msg}</p>
		</div>
	);
};

export default Alert;
