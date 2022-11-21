import * as React from "react";
import { Dialog } from "@reach-ui-fork/dialog";
import { Tooltip } from "@reach-ui-fork/tooltip";
import "@reach-ui-fork/dialog/styles.css";
import "@reach-ui-fork/tooltip/styles.css";

let name = "With Tooltip";

function Example() {
	const [showDialog, setShowDialog] = React.useState(false);
	return (
		<div>
			<Tooltip label="Hamburger">
				<button onClick={() => setShowDialog(true)}>
					<span role="img" aria-label="open dialog">
						🍔
					</span>
				</button>
			</Tooltip>
			<Dialog
				aria-label="Announcement"
				isOpen={showDialog}
				onDismiss={() => setShowDialog(false)}
				allowPinchZoom
			>
				<button onClick={() => setShowDialog(false)}>Close Dialog</button>
				<p>This is killer!</p>
				<input type="text" />
				<br />
				<input type="text" />
				<button>Ayyyyyy</button>
			</Dialog>
		</div>
	);
}

Example.storyName = name;
export { Example };
