/* eslint-disable jsx-a11y/accessible-emoji */
import * as React from "react";
import { positionTooltip, useTooltip } from "@reach-ui-fork/tooltip";
import type { TooltipProps } from "@reach-ui-fork/tooltip";
import { useRect } from "@reach-ui-fork/rect";
import { Portal } from "@reach-ui-fork/portal";
import "@reach-ui-fork/tooltip/styles.css";

let name = "Custom Tooltip";

function Example() {
	let containerRef = React.useRef<HTMLDivElement>(null);
	return (
		<div ref={containerRef}>
			<CustomTooltip id="wow" label="Notifications" containerRef={containerRef}>
				<button style={{ fontSize: 25 }} aria-label="Notifications">
					<span aria-hidden>🔔</span>
				</button>
			</CustomTooltip>
		</div>
	);
}

function CustomTooltip({
	children,
	label,
	id,
	containerRef,
	...props
}: CustomTooltipProps) {
	let child = React.Children.only(children);
	if (!child || !React.isValidElement(child)) {
		throw Error("Tooltup must have a child element");
	}

	let [trigger, tooltip] = useTooltip({
		...child.props,
		id,
		// @ts-expect-error
		ref: child.ref,
	});

	let tooltipRef = React.useRef<HTMLDivElement>(null);
	let tooltipRect = useRect(tooltipRef, { observe: tooltip.isVisible });
	let haventMeasuredTooltipYet = !tooltipRect;
	let tooltipStyle: React.CSSProperties;
	if (haventMeasuredTooltipYet) {
		tooltipStyle = { visibility: "hidden" };
	} else {
		tooltipStyle = positionTooltip(tooltip.triggerRect, tooltipRect);
	}

	return (
		<React.Fragment>
			{React.cloneElement(child, trigger)}
			{tooltip.isVisible ? (
				<Portal containerRef={containerRef}>
					<React.Fragment>
						<div
							role="tooltip"
							{...props}
							ref={tooltipRef}
							data-reach-tooltip=""
							id={id}
							style={tooltipStyle}
						>
							{label}
						</div>
					</React.Fragment>
				</Portal>
			) : null}
		</React.Fragment>
	);
}

interface CustomTooltipProps
	extends TooltipProps,
		Omit<React.ComponentPropsWithoutRef<"div">, keyof TooltipProps> {
	containerRef?: React.RefObject<Node>;
	id: string;
}

Example.storyName = name;
export { Example };
