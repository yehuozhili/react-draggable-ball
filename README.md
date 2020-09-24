## react-draggable-ball 拖拽控制小球

### 简介

-   有时候可能需要那种像手游一样的操作球来控制另一个物体的位置，所以我利用 react-draggable 封装起来做了个包。
-   控制的物体不一定要可拖动，不可拖动也可以的。

-   https://yehuozhili.github.io/react-draggable-ball/

### 快速上手

-   demo 中的示例为此示例

```tsx
import React, { useState } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { useGetBall } from "react-draggable-ball";

function App() {
	const [state, setState] = useState({ x: 0, y: 0 });
	const [render, isDrag, , position] = useGetBall(setState, {
		ratioSpeed: { x: 0.5, y: 0.5 },
	});

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
```

### api

```tsx
export interface IOptionsType {
	wrapperStyle?: CSSProperties; //这是外壳样式
	innerStyle?: CSSProperties; // 拖动的小球样式
	intervalDelay?: number; //interval延迟，越大，移动看起来越卡
	ratioSpeed?: IPositionState; //速度比率，用来控制state速度
	draggableProps?: Partial<DraggableProps>; //参考react-draggable属性
	innerContent?: ReactNode; //小球内容物，初始为null
}
export interface IPositionState {
	x: number;
	y: number;
}
//必传setState，用来控制
export function useGetBall(
	setState: React.Dispatch<React.SetStateAction<IPositionState>>,
	options?: IOptionsType
): [
	ReactNode, //这是渲染出来的拖拽小球
	boolean, //这是小球是否在拖拽状态
	React.Dispatch<React.SetStateAction<boolean>>, //这个可以改变是否拖拽状态
	IPositionState, //这是小球在壳里的位置
	React.Dispatch<React.SetStateAction<IPositionState>> //可以改变小球在壳里位置
];
```

### gif

<img src='https://github.com/yehuozhili/react-draggable-ball/blob/master/demo/demo.gif' />
