/* eslint-disable jsx-a11y/accessible-emoji */

import * as React from "react";
import { action } from "@storybook/addon-actions";
import { Menu, MenuList, MenuButton, MenuItem } from "@reach-ui-fork/menu-button";
import { Tooltip } from "@reach-ui-fork/tooltip";
import "@reach-ui-fork/menu-button/styles.css";
import "@reach-ui-fork/tooltip/styles.css";

let name = "With Tooltip";

function Example() {
	return (
		<Menu>
			<Tooltip label="Hamburger">
				<MenuButton>
					<span>🍔</span>
				</MenuButton>
			</Tooltip>
			<MenuList>
				<MenuItem onSelect={action("Download")}>Download</MenuItem>
				<MenuItem onSelect={action("Copy")}>Create a Copy</MenuItem>
				<MenuItem onSelect={action("Mark as Draft")}>Mark as Draft</MenuItem>
				<MenuItem onSelect={action("Delete")}>Delete</MenuItem>
			</MenuList>
		</Menu>
	);
}

Example.storyName = name;
export { Example };
