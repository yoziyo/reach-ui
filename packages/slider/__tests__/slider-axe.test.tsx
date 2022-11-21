/// <reference types="vitest-axe/extend-expect" />
/// <reference types="vitest-dom/extend-expect" />

import * as React from "react";
import { cleanup, render } from "@reach-ui-fork-internal/test/utils";
import { axe } from "vitest-axe";
import { Slider } from "@reach-ui-fork/slider";
import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(cleanup);

describe("<Slider /> with axe", () => {
	describe("a11y", () => {
		it("Should not have ARIA violations", async () => {
			vi.useRealTimers();
			const { container } = render(<Slider aria-label="basic slider" />);
			const results = await axe(container);
			expect(results).toHaveNoViolations();
		});
	});
});
