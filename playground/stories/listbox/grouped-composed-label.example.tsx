import * as React from "react";
import { VisuallyHidden } from "@yoziyo/visually-hidden";
import {
	Listbox,
	ListboxGroup,
	ListboxGroupLabel,
	ListboxOption,
} from "@yoziyo/listbox";
import { Taco } from "./common";
import "@yoziyo/listbox/styles.css";

let name = "Grouped with Composed Label";

function GroupLabel({ icon, children, ...props }: any) {
	return (
		<ListboxGroupLabel {...props}>
			<span aria-hidden>{icon}</span> {children}
		</ListboxGroupLabel>
	);
}

function Example() {
	let [value, setValue] = React.useState("default");
	return (
		<div>
			<VisuallyHidden id="taco-label">Choose a taco</VisuallyHidden>
			<Listbox
				aria-labelledby="taco-label"
				value={value}
				onChange={(value) => setValue(value)}
			>
				<ListboxOption value="default" label="Choose a taco">
					<Taco /> Choose a taco
				</ListboxOption>
				<hr />
				<ListboxGroup>
					<GroupLabel icon="🍖">Meat</GroupLabel>
					<ListboxOption value="asada" label="Carne Asada">
						<Taco /> Carne Asada
					</ListboxOption>
					<ListboxOption value="pollo" label="Pollo">
						<Taco /> Pollo
					</ListboxOption>
					<ListboxOption value="pastor" label="Pastor">
						<Taco /> Pastor
					</ListboxOption>
					<ListboxOption value="lengua" label="Lengua">
						<Taco /> Lengua
					</ListboxOption>
				</ListboxGroup>
				<ListboxGroup>
					<GroupLabel icon="🥕">Veggie</GroupLabel>
					<ListboxOption value="hibiscus" label="Hibiscus">
						<Taco /> Hibiscus
					</ListboxOption>
					<ListboxOption value="portobello" label="Portobello">
						<Taco /> Portobello
					</ListboxOption>
					<ListboxOption value="fajita" label="Fajita">
						<Taco /> Fajita
					</ListboxOption>
				</ListboxGroup>
			</Listbox>
		</div>
	);
}

Example.storyName = name;
export { Example };
