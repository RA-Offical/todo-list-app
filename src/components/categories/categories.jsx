import { useCallback } from "react";
import "./categories.css";

const Categoires = ({ setCategory, category }) => {
	const handleCategoryClick = (e) => {
		if (e.target.matches(".btn")) {
			setCategory(e.target.textContent.toLowerCase());
		}
	};

	return (
		<section className="categories">
			<div
				className="flex align-ic justify-cc categories-list"
				onClick={handleCategoryClick}
			>
				<button
					className={`btn underline-slider categories-list__btn ${
						category === "all" ? "active" : ""
					}`}
				>
					All
				</button>
				<button
					className={`btn underline-slider categories-list__btn ${
						category === "pending" ? "active" : ""
					}`}
				>
					Pending
				</button>
				<button
					className={`btn underline-slider categories-list__btn ${
						category === "completed" ? "active" : ""
					}`}
				>
					Completed
				</button>
			</div>
		</section>
	);
};

export default Categoires;
