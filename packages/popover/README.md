# @reach-ui-fork/popover

[![Stable release](https://img.shields.io/npm/v/@reach-ui-fork/popover.svg)](https://npm.im/@reach-ui-fork/popover) ![MIT license](https://badgen.now.sh/badge/license/MIT)

```jsx
import * as React from "react";
import { Popover, positionDefault } from "@reach-ui-fork/popover";

function Example() {
	const ref = React.useRef(null);
	const [value, setValue] = React.useState("");
	return (
		<div>
			<label>
				<span>Type for a special message</span>
				<input
					type="text"
					ref={ref}
					onChange={(event) => setValue(event.target.value)}
				/>
			</label>

			{value.length > 0 && (
				<Popover targetRef={ref} position={positionDefault}>
					<div>
						<p>Whoa! Look at me!</p>
					</div>
				</Popover>
			)}
		</div>
	);
}
```
