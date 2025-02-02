# @reach-ui-fork/window-size

[![Stable release](https://img.shields.io/npm/v/@reach-ui-fork/window-size.svg)](https://npm.im/@reach-ui-fork/window-size) ![MIT license](https://badgen.now.sh/badge/license/MIT)

[Docs](https://reach.tech/window-size) | [Source](https://github.com/reach/reach-ui/tree/main/packages/window-size)

Measure the current window dimensions.

```jsx
import WindowSize, { useWindowSize } from "@reach-ui-fork/window-size";

function Example() {
	const { width, height } = useWindowSize();
	return (
		<div>
			<p>
				Looks like a pretty{" "}
				{width <= 400 ? "small" : width >= 1000 ? "large" : "normal"} screen!
			</p>
		</div>
	);
}
```
