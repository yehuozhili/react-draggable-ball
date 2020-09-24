import React, {
	CSSProperties,
	ReactNode,
	useEffect,
	useMemo,
	useState,
} from "react";
import Draggable, {
	DraggableData,
	DraggableEvent,
	DraggableProps,
} from "react-draggable";

const wrapperStyle: CSSProperties = {
	width: "50px",
	height: "50px",
	boxShadow: "inset 2px 2px 4px #d5d5d5, inset -2px -2px 4px #fff",
	borderRadius: "50%",
	position: "relative",
	padding: "5px",
	backgroundColor: "#fff",
	background: "linear-gradient(145deg, #fff, #fafafa)",
};

const innerStyle: CSSProperties = {
	width: "20px",
	height: "20px",
	borderRadius: "50%",
	boxShadow: "2px 2px 4px #3690d9",
	backgroundColor: "#40a9ff",
	background: "linear-gradient(145deg, #4ac2ff, #40a9ff)",
	position: "relative",
	top: "15px",
	left: "15px",
};

export interface IOptionsType {
	wrapperStyle?: CSSProperties;
	innerStyle?: CSSProperties;
	intervalDelay?: number;
	ratioSpeed?: IPositionState;
	draggableProps?: Partial<DraggableProps>;
	innerContent?: ReactNode;
}
export interface IPositionState {
	x: number;
	y: number;
}

export function useGetBall(
	setState: React.Dispatch<React.SetStateAction<IPositionState>>,
	options?: IOptionsType
): [
	ReactNode,
	boolean,
	React.Dispatch<React.SetStateAction<boolean>>,
	IPositionState,
	React.Dispatch<React.SetStateAction<IPositionState>>
] {
	const [isDrag, setIsDrag] = useState(false);
	const [controlState, setControlState] = useState({ x: 0, y: 0 });

	const defaultOption: Required<IOptionsType> = useMemo(() => {
		return {
			wrapperStyle: wrapperStyle,
			innerStyle: innerStyle,
			intervalDelay: 20,
			ratioSpeed: { x: 1, y: 1 },
			draggableProps: {
				position: { x: 0, y: 0 },
				bounds: "parent",
				onStart: () => {
					setIsDrag(true);
				},
				onDrag: (e: DraggableEvent, data: DraggableData) => {
					setControlState({ x: data.x, y: data.y });
				},
				onStop: () => {
					setIsDrag(false);
				},
			},
			innerContent: null,
		};
	}, []);

	const mergedOption: Required<IOptionsType> = useMemo(() => {
		const userDraggableProps = options?.draggableProps;
		const newDraggableProps = {
			...defaultOption.draggableProps,
			userDraggableProps,
		};
		const userWstyle = options?.wrapperStyle;
		const userIstyle = options?.innerStyle;
		const newWstyle = { ...defaultOption.wrapperStyle, ...userWstyle };
		const newIstyle = { ...defaultOption.innerStyle, ...userIstyle };
		return {
			wrapperStyle: newWstyle,
			innerStyle: newIstyle,
			intervalDelay: options?.intervalDelay
				? options.intervalDelay
				: defaultOption.intervalDelay,
			ratioSpeed: options?.ratioSpeed
				? options.ratioSpeed
				: defaultOption.ratioSpeed,
			draggableProps: newDraggableProps,
			innerContent: options?.innerContent ? options.innerContent : null,
		};
	}, [
		defaultOption.draggableProps,
		defaultOption.innerStyle,
		defaultOption.intervalDelay,
		defaultOption.ratioSpeed,
		defaultOption.wrapperStyle,
		options,
	]);

	useEffect(() => {
		let timer: number;
		if (isDrag) {
			const fn = () => {
				setState((v) => {
					let extraX = controlState.x;
					let extraY = controlState.y;
					if (mergedOption.ratioSpeed.x) {
						extraX = extraX * mergedOption.ratioSpeed.x;
					}
					if (mergedOption.ratioSpeed.y) {
						extraY = extraY * mergedOption.ratioSpeed.y;
					}
					return {
						x: v.x + extraX,
						y: v.y + extraY,
					};
				});
			};
			timer = window.setInterval(() => {
				fn();
			}, mergedOption.intervalDelay);
		}
		return () => {
			window.clearInterval(timer);
		};
	}, [
		controlState,
		isDrag,
		mergedOption.intervalDelay,
		mergedOption.ratioSpeed,
		setState,
	]);

	const render = (
		<div style={mergedOption.wrapperStyle}>
			<Draggable {...mergedOption.draggableProps}>
				<div style={mergedOption.innerStyle}>
					{mergedOption.innerContent}
				</div>
			</Draggable>
		</div>
	);
	return [render, isDrag, setIsDrag, controlState, setControlState];
}

export default useGetBall;
