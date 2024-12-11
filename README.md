# bazel-typescript

bazel build b/...

```
INFO: Analyzed 2 targets (0 packages loaded, 0 targets configured).
ERROR: /home/pscott/bazel-typescript/b/BUILD.bazel:6:11: Transpiling & type-checking TypeScript project @@//b:b [tsc -p b/tsconfig.json] failed: (Exit 1): tsc failed: error executing TsProject command (from target //b:b) bazel-out/k8-opt-exec-ST-d57f47055a04/bin/external/aspect_rules_ts~~ext~npm_typescript/tsc_/tsc --project b/tsconfig.json --rootDir b

Use --sandbox_debug to see verbose messages from the sandbox and retain the sandbox build root for debugging
b/index.tsx(6,14): error TS2742: The inferred type of 'Icon' cannot be named without a reference to '.aspect_rules_js/tailwind-variants@0.2.1_tailwindcss_3.4.16/node_modules/tailwind-variants'. This is likely not portable. A type annotation is necessary.
b/index.tsx(6,14): error TS2742: The inferred type of 'Icon' cannot be named without a reference to '.aspect_rules_js/tailwind-variants@0.2.1_tailwindcss_3.4.16/node_modules/tailwind-variants/dist/config.js'. This is likely not portable. A type annotation is necessary.
INFO: Found 2 targets...
Target //b:b failed to build
Target //b:b_types failed to build
Use --verbose_failures to see the command lines of failed build steps.
INFO: Elapsed time: 0.626s, Critical Path: 0.55s
INFO: 2 processes: 2 internal.
ERROR: Build did NOT complete successfully
```
