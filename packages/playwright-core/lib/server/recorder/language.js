"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var language_exports = {};
__export(language_exports, {
  sanitizeDeviceOptions: () => sanitizeDeviceOptions,
  toSignalMap: () => toSignalMap
});
module.exports = __toCommonJS(language_exports);
function sanitizeDeviceOptions(device, options) {
  const cleanedOptions = {};
  for (const property in options) {
    if (JSON.stringify(device[property]) !== JSON.stringify(options[property]))
      cleanedOptions[property] = options[property];
  }
  return cleanedOptions;
}
function toSignalMap(action) {
  let popup;
  let download;
  let dialog;
  for (const signal of action.signals) {
    if (signal.name === "popup")
      popup = signal;
    else if (signal.name === "download")
      download = signal;
    else if (signal.name === "dialog")
      dialog = signal;
  }
  return {
    popup,
    download,
    dialog
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sanitizeDeviceOptions,
  toSignalMap
});
