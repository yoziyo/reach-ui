/**
 * Welcome to @reach-ui-fork/visually-hidden!
 *
 * Provides text for screen readers that is visually hidden.
 * It is the logical opposite of the `aria-hidden` attribute.
 *
 * @see https://snook.ca/archives/html_and_css/hiding-content-for-accessibility
 * @see https://a11yproject.com/posts/how-to-hide-content/
 * @see Docs     https://reach.tech/visually-hidden
 * @see Source   https://github.com/reach/reach-ui/tree/main/packages/visually-hidden
 */

import * as React from "react";
import type * as Polymorphic from "@reach-ui-fork/polymorphic";

/**
 * VisuallyHidden
 *
 * Provides text for screen readers that is visually hidden.
 * It is the logical opposite of the `aria-hidden` attribute.
 */
const VisuallyHidden = React.forwardRef<any, any>(function VisuallyHidden(
	{ as: Comp = "span", style = {}, ...props },
	ref
) {
	return (
		<Comp
			ref={ref}
			style={{
				border: 0,
				clip: "rect(0 0 0 0)",
				height: "1px",
				margin: "-1px",
				overflow: "hidden",
				padding: 0,
				position: "absolute",
				width: "1px",

				// https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
				whiteSpace: "nowrap",
				wordWrap: "normal",
				...style,
			}}
			{...props}
		/>
	);
}) as Polymorphic.ForwardRefComponent<"span", VisuallyHiddenProps>;
VisuallyHidden.displayName = "VisuallyHidden";

/**
 * @see Docs https://reach.tech/visually-hidden#visuallyhidden-props
 */
interface VisuallyHiddenProps {
	/**
	 * @see Docs https://reach.tech/visually-hidden#visuallyhidden-children
	 */
	children: React.ReactNode;
}

////////////////////////////////////////////////////////////////////////////////
// Exports

export type { VisuallyHiddenProps };
export { VisuallyHidden };
