import React, { useState } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { useGetBall } from "./components";

function App() {
	const [state, setState] = useState({ x: 0, y: 0 });
	const [render, isDrag, _setisDrag, position, _setPosition] = useGetBall(
		setState,
		{
			ratioSpeed: { x: 0.5, y: 0.5 },
		}
	);

	return (
		<div className="App">
			<Draggable
				position={state}
				onStop={(e: DraggableEvent, data: DraggableData) => {
					setState({ x: data.x, y: data.y });
				}}
			>
				<div
					style={{
						width: "100px",
						height: "100px",
						backgroundColor: "red",
					}}
				></div>
			</Draggable>

			<div
				style={{
					width: "100px",
					height: "100px",
					backgroundColor: "blue",
					position: "relative",
					transform: `translate(${state.x}px,${state.y}px)`,
				}}
			></div>

			<div>{isDrag}</div>
			<div>
				{state.x},{state.y}
			</div>
			<div>
				{position.x},{position.y}
			</div>
			{render}
		</div>
	);
}

export default App;
