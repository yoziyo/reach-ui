import type { defineConfig } from "tsup";
import { getTsupConfig, getPackageInfo } from "@reach-ui-fork-internal/dev/tsup.js";

type TsupConfig = ReturnType<typeof defineConfig>;

let { name: packageName, version: packageVersion } = getPackageInfo(
	// @ts-expect-error
	__dirname
);
let cfg: TsupConfig = getTsupConfig(`src/reach-skip-nav.tsx`, {
	packageName,
	packageVersion,
});
export default cfg;
