import * as React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach-ui-fork/tabs";
import "@reach-ui-fork/tabs/styles.css";

let name = "RTL with direction style (TS)";

function Example() {
	return (
		<div style={{ direction: "rtl" }}>
			<MyTabs />
		</div>
	);
}

Example.storyName = name;
export { Example };

function MyTabs() {
	return (
		<Tabs>
			<TabList>
				<Tab>First tab</Tab>
				<Tab>Second tab</Tab>
				<Tab>Third tab</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
					<h1>one!</h1>
				</TabPanel>
				<TabPanel>
					<h1>two!</h1>
				</TabPanel>
				<TabPanel>
					<h1>three!</h1>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}
