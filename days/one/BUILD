load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_rules_swc//swc:defs.bzl", "swc")
load("@aspect_rules_js//js:defs.bzl", "js_binary")
load("@aspect_rules_jest//jest:defs.bzl", "jest_test")

npm_link_all_packages(name = "node_modules")

ts_project(
    name = "one_lib",
    srcs = [
        "one.ts",
        "run-one.ts",
        "run-two.ts",
    ],
    declaration = True,
    transpiler = swc,
    tsconfig = "//:tsconfig",
    deps = [
        ":node_modules/yargs",
    ],
)

ts_project(
    name = "one_test_lib",
    testonly = True,
    srcs = ["one.test.ts"],
    declaration = True,
    transpiler = swc,
    tsconfig = "//:tsconfig",
)

jest_test(
    name = "test",
    chdir = package_name(),
    config = "//:jest_config",
    data = [
        "package.json",  # for type=module
        ":one_lib",
        ":one_test_lib",
    ],
    node_modules = ":node_modules",
    node_options = [
        "--experimental-vm-modules",
    ],
)

js_binary(
    name = "part_one",
    args = [
        "--file",
        "input.txt",
    ],
    chdir = package_name(),
    data = [
        "input.txt",
        "package.json",  # for type=module
        ":one_lib",
    ],
    entry_point = "run-one.js",
)

js_binary(
    name = "part_two",
    args = [
        "--file",
        "input.txt",
    ],
    chdir = package_name(),
    data = [
        "input.txt",
        "package.json",  # for type=module
        ":one_lib",
    ],
    entry_point = "run-two.js",
)
