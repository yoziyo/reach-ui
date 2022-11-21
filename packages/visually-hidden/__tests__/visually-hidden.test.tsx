/// <reference types="vitest-axe/extend-expect" />
/// <reference types="vitest-dom/extend-expect" />

import * as React from "react";
import { VisuallyHidden } from "@reach-ui-fork/visually-hidden";
import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@reach-ui-fork-internal/test/utils";

afterEach(cleanup);

describe("<VisuallyHidden />", () => {
	describe("rendering", () => {
		it("renders as any HTML element", async () => {
			let hiddenMessage = "Hidden Message";
			let { getByText } = render(
				<VisuallyHidden as="div">{hiddenMessage}</VisuallyHidden>
			);
			let visuallyHidden = getByText(hiddenMessage);
			expect(visuallyHidden.tagName).toBe("DIV");
		});
	});
});
