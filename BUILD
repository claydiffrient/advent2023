load("@aspect_rules_ts//ts:defs.bzl", "ts_config")
load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@npm//:defs.bzl", "npm_link_all_packages")

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
