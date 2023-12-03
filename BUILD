load("@aspect_rules_ts//ts:defs.bzl", "ts_config", "ts_project")
load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_rules_swc//swc:defs.bzl", "swc")

npm_link_all_packages()

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    visibility = ["//visibility:public"],
)

js_library(
    name = "jest_config",
    srcs = ["jest.config.js"],
    visibility = ["//visibility:public"],
)
