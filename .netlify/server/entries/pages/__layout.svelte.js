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
  default: () => _layout
});
var import_index_e8bdc45f = __toModule(require("../../chunks/index-e8bdc45f.js"));
const getStores = () => {
  const stores = (0, import_index_e8bdc45f.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const NavBar = (0, import_index_e8bdc45f.c)(($$result, $$props, $$bindings, slots) => {
  let { section } = $$props;
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  return `<nav class="${"flex justify-between p-8"}"><ul class="${"flex sm:flex-row flex-col sm:space-x-2 sm:space-y-0 space-y-6 sm:text-center text-right"}"><li><a sveltekit:prefetch href="${"/"}" class="${[
    "px-4 py-2 font-bold text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-600 border-purple-400 hover:border-purple-400",
    section === "" ? "border-b-4" : ""
  ].join(" ").trim()}">Home
			</a></li>
		<li><a sveltekit:prefetch href="${"/friends"}" class="${[
    "px-4 py-2 font-bold text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-600 border-purple-400 hover:border-purple-400",
    section === "friends" ? "border-b-4" : ""
  ].join(" ").trim()}">Friends
			</a></li>
		<li><a sveltekit:prefetch href="${"/about"}" class="${[
    "px-4 py-2 font-bold text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-600 border-purple-400 hover:border-purple-400",
    section === "about" ? "border-b-4" : ""
  ].join(" ").trim()}">About
			</a></li>
		<li><a sveltekit:prefetch href="${"/changelog"}" class="${[
    "px-4 py-2 font-bold text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-600 border-purple-400 hover:border-purple-400",
    section === "changelog" ? "border-b-4" : ""
  ].join(" ").trim()}">Changelog
			</a></li></ul>
	<ul class="${"flex sm:flex-row flex-col sm:space-x-2 sm:space-y-0 space-y-6 sm:text-center text-right"}"><li><a sveltekit:prefetch href="${"/login"}" class="${"border-2 border-purple-600 px-4 py-2 rounded text-purple-600 dark:text-gray-100 dark:hover:text-purple-400"}">Sign in
			</a></li>
		<li><a sveltekit:prefetch href="${"/register"}" class="${"border-2 border-purple-600 px-4 py-2 bg-purple-600 hover:bg-purple-800 rounded text-gray-100"}">Sign up
			</a></li></ul></nav>`;
});
const DarkModeToggle = (0, import_index_e8bdc45f.c)(($$result, $$props, $$bindings, slots) => {
  let { darkMode } = $$props;
  if ($$props.darkMode === void 0 && $$bindings.darkMode && darkMode !== void 0)
    $$bindings.darkMode(darkMode);
  return `<div class="${"flex fixed bottom-4 right-4"}">${darkMode ? `<a href="${"#"}" class="${"rounded-full bg-purple-600 hover:bg-purple-800 p-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" class="${"h-6 w-6 text-white"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}"${(0, import_index_e8bdc45f.a)("stroke-width", 2, 0)} d="${"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}"></path></svg></a>` : `<a href="${"#"}" class="${"rounded-full bg-purple-600 hover:bg-purple-800 p-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" class="${"h-6 w-6 text-white"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}"${(0, import_index_e8bdc45f.a)("stroke-width", 2, 0)} d="${"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}"></path></svg></a>`}</div>`;
});
var app = "";
const _layout = (0, import_index_e8bdc45f.c)(($$result, $$props, $$bindings, slots) => {
  let section;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_e8bdc45f.b)(page, (value) => $page = value);
  let darkMode = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    section = $page.path.split("/")[1];
    $$rendered = `<div${(0, import_index_e8bdc45f.a)("class", `${darkMode ? "dark" : ""}`, 0)}><div class="${"dark:bg-gray-900 bg-slate-50 min-h-screen pb-8"}">${(0, import_index_e8bdc45f.v)(NavBar, "NavBar").$$render($$result, { section }, {}, {})}
		<div class="${"flex flex-col items-center"}"><div class="${"p-8 lg:max-w-screen-lg max-w-sm"}">${slots.default ? slots.default({}) : ``}</div></div></div>
	${(0, import_index_e8bdc45f.v)(DarkModeToggle, "DarkModeToggle").$$render($$result, { darkMode }, {
      darkMode: ($$value) => {
        darkMode = $$value;
        $$settled = false;
      }
    }, {})}</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
