import * as React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@yoziyo/tabs";
import "@yoziyo/tabs/styles.css";

let name = "Basic";

function Example() {
	return (
		<div>
			<Tabs>
				<TabList>
					<Tab>One</Tab>
					<Tab>Two</Tab>
					<Tab>Three</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<h1>one!</h1>
						<button>yo</button>
					</TabPanel>
					<TabPanel>
						<h1>two!</h1>
					</TabPanel>
					<TabPanel>
						<h1>three!</h1>
					</TabPanel>
				</TabPanels>
			</Tabs>
			<div style={{ marginTop: 800 }}>
				<p>Yo!</p>
			</div>
		</div>
	);
}

Example.storyName = name;
export { Example };
