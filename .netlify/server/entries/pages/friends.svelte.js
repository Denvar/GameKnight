var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => Friends
});
var import_index_e8bdc45f = __toModule(require("../../chunks/index-e8bdc45f.js"));
const Friends = (0, import_index_e8bdc45f.c)(($$result, $$props, $$bindings, slots) => {
  let friendList = [
    { name: "Jack", games: 10, id: 1 },
    { name: "Danyang", games: 10, id: 1 },
    { name: "Phil", games: 10, id: 1 },
    { name: "JC", games: 10, id: 1 },
    { name: "Alvin", games: 10, id: 1 }
  ];
  return `<h1 class="${"text-4xl dark:text-gray-200 text-gray-900"}">Your Game Collection</h1>

<div class="${"bg-green-200 gap-12"}"><h1 class="${"text-4xl"}">Friends</h1>
	<div class="${""}">${(0, import_index_e8bdc45f.f)(friendList, (friend) => {
    return `<div class="${"p-4"}"><p>${(0, import_index_e8bdc45f.e)(friend.name)}</p>
				<p>${(0, import_index_e8bdc45f.e)(friend.games)}</p>
			</div>`;
  })}</div></div>`;
});
