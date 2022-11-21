import * as React from "react";
import { action } from "@storybook/addon-actions";
import {
	Menu,
	MenuList,
	MenuButton,
	MenuLink,
	MenuItem,
} from "@reach-ui-fork/menu-button";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import "@reach-ui-fork/menu-button/styles.css";

let name = "With Disabled Links";

function Example() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
		</Router>
	);
}

Example.storyName = name;
export { Example };

function Home() {
	let [disabled, setDisabled] = React.useState(true);
	return (
		<div>
			<Menu>
				<MenuButton>
					Actions <span aria-hidden="true">▾</span>
				</MenuButton>
				<MenuList>
					<MenuItem onSelect={action("Mark as Draft")}>Mark as Draft</MenuItem>
					<MenuLink as={Link} to="/settings" disabled={disabled}>
						View Settings
					</MenuLink>
					<MenuItem onSelect={action("Delete")}>Delete</MenuItem>
				</MenuList>
			</Menu>
			<button onClick={() => setDisabled(!disabled)}>
				{disabled ? "Enable" : "Disable"} the link
			</button>
		</div>
	);
}

function Settings() {
	return (
		<div>
			<h2>Settings</h2>
			<p>
				<Link to="/">Go Home</Link>
			</p>
		</div>
	);
}
