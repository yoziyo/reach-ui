import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
} from "@reach-ui-fork/accordion";
import { Alert } from "@reach-ui-fork/alert";
import {
	AlertDialog,
	AlertDialogLabel,
	AlertDialogDescription,
	AlertDialogOverlay,
	AlertDialogContent,
} from "@reach-ui-fork/alert-dialog";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@reach-ui-fork/disclosure";
import { useId } from "@reach-ui-fork/auto-id";
import {
	CustomCheckbox,
	CustomCheckboxContainer,
	CustomCheckboxInput,
	MixedCheckbox,
	useMixedCheckbox,
} from "@reach-ui-fork/checkbox";
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
	ComboboxOptionText,
	useComboboxContext,
} from "@reach-ui-fork/combobox";
import {
	Listbox,
	ListboxInput,
	ListboxButton,
	ListboxArrow,
	ListboxPopover,
	ListboxList,
	ListboxOption,
	ListboxGroup,
	ListboxGroupLabel,
} from "@reach-ui-fork/listbox";
import { Dialog, DialogOverlay, DialogContent } from "@reach-ui-fork/dialog";
import {
	Menu,
	MenuList,
	MenuButton,
	MenuItem,
	MenuItems,
	MenuPopover,
	MenuLink,
} from "@reach-ui-fork/menu-button";
import { Portal } from "@reach-ui-fork/portal";
import { useRect, Rect } from "@reach-ui-fork/rect";
import {
	Slider,
	SliderInput,
	SliderTrack,
	SliderRange,
	SliderHandle,
	SliderMarker,
} from "@reach-ui-fork/slider";
import {
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	useTabsContext,
} from "@reach-ui-fork/tabs";
import { useTooltip, TooltipPopup, Tooltip } from "@reach-ui-fork/tooltip";
import { VisuallyHidden } from "@reach-ui-fork/visually-hidden";
import { useWindowSize, WindowSize } from "@reach-ui-fork/window-size";
import { Link as GatsbyLink } from "gatsby";
import { matchSorter } from "match-sorter";
import { useTransition, animated } from "@react-spring/web";
import { Phased } from "recondition";
import { useThrottle } from "use-throttle";
import Layout from "./Layout";
import { Table, Caption } from "./Table";
import { PreComponent } from "./MdxPre";
import "../styles/app.scss";

let firstLoad = true;

function MyPageLayout({ children }) {
	let contentFocusRef = React.useRef(null);
	React.useEffect(() => {
		if (firstLoad) {
			firstLoad = false;
		} else if (contentFocusRef.current) {
			/*
			 * If it exists, focus the first H1 heading we find in the main content
			 * area instead of the content area itself.
			 * We could also consider injecting a "skip back" link component per the
			 * suggestions in the Gatsby blog which could be a cool POC
			 * https://www.gatsbyjs.org/blog/2019-07-11-user-testing-accessible-client-routing/
			 */
			let sectionHeading = contentFocusRef.current.querySelector("h1");
			let focusNode = sectionHeading || contentFocusRef.current;
			focusNode.tabIndex = -1;
			focusNode.focus();
		}
		// I dunno, I just made it global on window, whatever...
		import("./cities.js");
	}, []);

	let {
		// blerg es modules
		default: defaultReactExport,
		...allReactExports
	} = React;

	return (
		<Layout>
			<MDXProvider
				components={{
					pre: function (props) {
						return (
							<PreComponent
								{...props}
								theme={{ plain: {}, styles: [] }}
								scope={{
									...allReactExports,
									React: defaultReactExport,
									Accordion,
									AccordionButton,
									AccordionItem,
									AccordionPanel,
									Alert,
									AlertDialog,
									AlertDialogContent,
									AlertDialogDescription,
									AlertDialogLabel,
									AlertDialogOverlay,
									animated,
									Combobox,
									ComboboxInput,
									ComboboxList,
									ComboboxOption,
									ComboboxOptionText,
									ComboboxPopover,
									CustomCheckbox,
									CustomCheckboxContainer,
									CustomCheckboxInput,
									Dialog,
									DialogContent,
									DialogOverlay,
									Disclosure,
									DisclosureButton,
									DisclosurePanel,
									GatsbyLink,
									Listbox,
									ListboxInput,
									ListboxButton,
									ListboxArrow,
									ListboxPopover,
									ListboxList,
									ListboxOption,
									ListboxGroup,
									ListboxGroupLabel,
									matchSorter,
									Menu,
									MenuButton,
									MenuItem,
									MenuItems,
									MenuLink,
									MenuList,
									MenuPopover,
									MixedCheckbox,
									Phased,
									Portal,
									Rect,
									Slider,
									SliderHandle,
									SliderInput,
									SliderMarker,
									SliderTrack,
									SliderRange,
									Tab,
									TabList,
									TabPanel,
									TabPanels,
									Tabs,
									Tooltip,
									TooltipPopup,
									useComboboxContext,
									useId,
									useMixedCheckbox,
									useRect,
									useTabsContext,
									useThrottle,
									useTooltip,
									useTransition,
									useWindowSize,
									VisuallyHidden,
									WindowSize,
								}}
							/>
						);
					},
					table: Table,
					caption: Caption,
				}}
			>
				<main>
					<div ref={contentFocusRef}>{children}</div>
				</main>
			</MDXProvider>
		</Layout>
	);
}

export default MyPageLayout;
