# @reach-ui-fork/skip-nav

[![Stable release](https://img.shields.io/npm/v/@reach-ui-fork/skip-nav.svg)](https://npm.im/@reach-ui-fork/skip-nav) ![MIT license](https://badgen.now.sh/badge/license/MIT)

[Docs](https://reach.tech/skip-nav) | [Source](https://github.com/reach/reach-ui/tree/main/packages/skip-nav) | [WAI-ARIA](https://webaim.org/techniques/skipnav/)

Skip navigation link for screen reader and keyboard users. Because the main content is not usually the first thing in the document, it's valuable to provide a shortcut for keyboard and screen reader users to skip to the content.

If the user does not navigate with the keyboard, they won't see the link.

```jsx
import { SkipNavLink, SkipNavContent } from "@reach-ui-fork/skip-nav";
import "@reach-ui-fork/skip-nav/styles.css";

ReactDOM.return(
	<React.Fragment>
		{/* put the link at the top of your app */}
		<SkipNavLink />
		<div>
			<YourNav />
			{/* and the content next to your main content */}
			<SkipNavContent />
			<YourMainContent />
		</div>
	</React.Fragment>,
	rootNode
);
```
