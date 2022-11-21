import * as React from "react";
import {
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	useTabsContext,
} from "@reach-ui-fork/tabs";
import { useRect } from "@reach-ui-fork/rect";
import "@reach-ui-fork/tabs/styles.css";

let name = "Animated Bar";

let HORIZONTAL_PADDING = 8;

function Example() {
	// Assign index props
	return (
		<ExampleAnimatedTabs color="red" style={{ width: 400 }}>
			<TabList style={{ justifyContent: "space-around" }}>
				<ExampleAnimatedTab index={0} style={{ flex: 1 }}>
					The First
				</ExampleAnimatedTab>
				<ExampleAnimatedTab index={1} style={{ flex: 2 }}>
					This has longer text
				</ExampleAnimatedTab>
				<ExampleAnimatedTab index={2} style={{ flex: 1 }}>
					Three
				</ExampleAnimatedTab>
			</TabList>
			<TabPanels style={{ padding: 10 }}>
				<TabPanel>
					<p>Check it out! It's ~animated~</p>
				</TabPanel>
				<TabPanel>
					<p>Yeah yeah. What's up?</p>
				</TabPanel>
				<TabPanel>
					<p>Oh, hello there.</p>
				</TabPanel>
			</TabPanels>
		</ExampleAnimatedTabs>
	);
}

Example.storyName = name;
export { Example };

////////////////////////////////////////////////////////////////////////////////

const AnimatedContext = React.createContext<React.Dispatch<
	React.SetStateAction<DOMRect | null>
> | null>(null);

function ExampleAnimatedTabs({ color, ...rest }: AnimatedTabsProps) {
	// some state to store the position we want to animate to
	const [activeRect, setActiveRect] = React.useState<DOMRect | null>(null);

	return (
		// put the function to change the styles on context so an active Tab
		// can call it, then style it up
		<AnimatedContext.Provider value={setActiveRect}>
			{/* make sure to forward props since we're wrapping Tabs */}
			<Tabs {...rest} style={{ ...rest.style, position: "relative" }} />
			<div
				style={{
					position: "absolute",
					height: 2,
					background: color,
					transition: "all 300ms ease",
					left: activeRect?.left ?? undefined,
					// subtract both sides of horizontal padding to center the div
					width: activeRect
						? activeRect.width - HORIZONTAL_PADDING * 2
						: undefined,
					top: activeRect ? activeRect.bottom - 2 : undefined,
				}}
			/>
		</AnimatedContext.Provider>
	);
}

function ExampleAnimatedTab({ index, ...props }: AnimatedTabProps) {
	// get the currently selected index from useTabsContext
	const { selectedIndex } = useTabsContext();
	const isSelected = selectedIndex === index;

	// measure the size of our element, only listen to rect if active
	const ref = React.useRef<HTMLButtonElement | null>(null);
	const rect = useRect(ref, { observe: isSelected });

	// get the style changing function from context
	const setActiveRect = React.useContext(AnimatedContext);

	// callup to set styles whenever we're active
	React.useLayoutEffect(() => {
		if (isSelected) {
			setActiveRect?.(rect);
		}
	}, [isSelected, rect, setActiveRect]);

	return (
		<Tab
			ref={ref}
			{...props}
			style={{
				...props.style,
				border: "none",
				padding: `4px ${HORIZONTAL_PADDING}px`,
			}}
		/>
	);
}

interface AnimatedTabsProps {
	color?: string;
	style?: React.CSSProperties;
	children: React.ReactNode;
}

interface AnimatedTabProps {
	index: number;
	style?: React.CSSProperties;
	children: React.ReactNode;
}
