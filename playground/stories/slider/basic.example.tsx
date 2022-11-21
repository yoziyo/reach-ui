import * as React from "react";
import { Slider, SliderMarker } from "@reach-ui-fork/slider";
import "@reach-ui-fork/slider/styles.css";
import "./examples.css";

let name = "Basic (TS)";

function Example() {
	return (
		<Slider id="gee-whiz">
			<SliderMarker value={10}>
				<span>10</span>
			</SliderMarker>
			<SliderMarker value={90}>
				<span>90</span>
			</SliderMarker>
		</Slider>
	);
}

Example.storyName = name;
export { Example };
