load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_rules_swc//swc:defs.bzl", "swc")
load("@aspect_rules_js//js:defs.bzl", "js_binary")
load("@aspect_rules_jest//jest:defs.bzl", "jest_test")

npm_link_all_packages(name = "node_modules")

ts_project(
    name = "two_lib",
    srcs = [
        "part-one.ts",
        "part-two.ts",
        "two.ts",
    ],
    declaration = True,
    transpiler = swc,
    tsconfig = "//:tsconfig",
)

ts_project(
    name = "two_test_lib",
    testonly = True,
    srcs = ["two.test.ts"],
    declaration = True,
    transpiler = swc,
    tsconfig = "//:tsconfig",
    deps = [
        ":two_lib",
    ],
)

jest_test(
    name = "test",
    chdir = package_name(),
    config = "//:jest_config",
    data = [
        "package.json",  # for type=module
        ":two_lib",
        ":two_test_lib",
    ],
    node_modules = ":node_modules",
    node_options = [
        "--experimental-vm-modules",
    ],
)

js_binary(
    name = "part_one",
    chdir = package_name(),
    data = [
        "input.txt",
        "package.json",  # for type=module
        ":two_lib",
    ],
    entry_point = "part-one.js",
)

js_binary(
    name = "part_two",
    chdir = package_name(),
    data = [
        "input.txt",
        "package.json",  # for type=module
        ":two_lib",
    ],
    entry_point = "part-two.js",
)
