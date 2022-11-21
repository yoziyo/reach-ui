/* eslint-disable jsx-a11y/accessible-emoji */
import * as React from "react";
import { Dialog } from "@yoziyo/dialog";
import { Tooltip } from "@yoziyo/tooltip";
import "@yoziyo/tooltip/styles.css";

let name = "With Dialog";

function Example() {
	const [showDialog, setShowDialog] = React.useState(false);
	return (
		<div>
			<button onClick={() => setShowDialog(true)}>Show Dialog</button>
			<Dialog isOpen={showDialog}>
				<div>
					<Tooltip label="Notifications">
						<button style={{ fontSize: 25 }} aria-label="Notifications">
							<span aria-hidden>🔔</span>
						</button>
					</Tooltip>
					<Tooltip label="Settings">
						<button style={{ fontSize: 25 }} aria-label="Settings">
							<span aria-hidden>⚙️</span>
						</button>
					</Tooltip>
					<Tooltip label="Your files are safe with us">
						<button style={{ fontSize: 25 }}>
							<span aria-hidden>💾</span> Save
						</button>
					</Tooltip>

					<div style={{ float: "right" }}>
						<Tooltip label="Notifications" aria-label="3 Notifications">
							<button style={{ fontSize: 25 }} aria-label="3 Notifications">
								<span>🔔</span>
								<span>3</span>
							</button>
						</Tooltip>
					</div>
				</div>

				<button onClick={() => setShowDialog(false)}>Close Dialog</button>
			</Dialog>
		</div>
	);
}

Example.storyName = name;
export { Example };
