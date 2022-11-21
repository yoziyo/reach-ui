# `@yoziyo/checkbox`

## 0.18.0

### BREAKING Changes

- All default exports have been removed. Replace all default imports with the appropriate documented named export.
- The output directory structure has changed slightly. Module files are now named `reach-<pkg>.mjs` instead of `reach-<pkg>.esm.js`.

### Minor Changes

- We have simplified our build setup to remove a boatload of dependencies. Build output for all packages may look slightly different, though functionally packages that don't have explicit changes marked in the release notes have not changed.

  This may affect you if you use `patch-package` to modify output code. If you need support for legacy browsers, the new bundle may not transpile the same ECMA features as before. In that case you may want to transpile Reach packages directly.

- We no longer check that our internal styles are included by looking for a defined CSS custom property. You can still include our base styles as before, but this removes the need to define `--reach-<pkg>` in your own stylesheets to silence dev warnings.
- Uncontrolled input fields inside of a form will now be reset to their default values or cleared on `form.reset`

### Patch Changes

- `useMixedCheckbox` mistakenly derived its `checked` value incorrectly. In practice this was unlikely to cause an issue, but it now derives the guaranteed value from the active component state.
- Updated dependencies:
  - `@yoziyo/auto-id@0.18.0`
  - `@yoziyo/machine@0.18.0`
  - `@yoziyo/utils@0.18.0`
  - `@yoziyo/polymorphic@0.18.0`
