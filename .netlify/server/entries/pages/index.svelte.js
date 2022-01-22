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
  default: () => Routes
});
var import_index_e8bdc45f = __toModule(require("../../chunks/index-e8bdc45f.js"));
var import_bgg_xml_api_client = __toModule(require("bgg-xml-api-client"));
function toRanges(values, separator = "-") {
  return values.slice().sort((p, q) => p - q).reduce((acc, cur, idx, src) => {
    if (idx > 0 && cur - src[idx - 1] === 1)
      acc[acc.length - 1][1] = cur;
    else
      acc.push([cur]);
    return acc;
  }, []).map((range) => range.join(separator));
}
const GameListItem = (0, import_index_e8bdc45f.c)(($$result, $$props, $$bindings, slots) => {
  let { game } = $$props;
  if ($$props.game === void 0 && $$bindings.game && game !== void 0)
    $$bindings.game(game);
  return `<div class="${"flex flex-col w-72 rounded shadow-md hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-white/40 bg-white border-white border"}"><img class="${"w-full h-60 object-cover object-top bg-purple-50 text-purple-50 rounded-t"}"${(0, import_index_e8bdc45f.a)("src", game.image, 0)} alt="${(0, import_index_e8bdc45f.e)(game.name) + " box art"}">
	<div class="${"px-6 py-4"}"><p class="${"font-bold text-lg line-clamp-2 text-gray-700"}">${(0, import_index_e8bdc45f.e)(game.name)}</p></div>
	<div class="${"px-6 pb-4 mt-auto"}"><div class="${"flex flex-row justify-between"}"><div class="${"flex flex-col w-full"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 text-gray-700 m-auto"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}"${(0, import_index_e8bdc45f.a)("stroke-width", 2, 0)} d="${"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
				<p class="${"text-gray-700 text-sm m-auto"}">${(0, import_index_e8bdc45f.e)(game.length.length > 1 ? Math.min(...game.length) + "-" + Math.max(...game.length) : game.length)}m
				</p></div>
			<div class="${"flex flex-col w-full"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 text-gray-700 m-auto"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"}"></path></svg>
				<p class="${"text-gray-700 text-sm m-auto"}">${(0, import_index_e8bdc45f.e)(game.playerCount.length > 1 ? Math.min(...game.playerCount) + "-" + Math.max(...game.playerCount) : game.playerCount)}</p></div>
			<div class="${"flex flex-col w-full"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5 m-auto text-yellow-500"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"}"></path></svg>
				<p class="${"m-auto text-yellow-500 text-sm"}">${(0, import_index_e8bdc45f.e)(game.bestPlayerCount.length == 0 ? "?" : toRanges(game.bestPlayerCount).join(", "))}</p></div></div></div></div>`;
});
const subscriber_queue = [];
function writable(value, start = import_index_e8bdc45f.n) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, import_index_e8bdc45f.d)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_e8bdc45f.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_e8bdc45f.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const currentUserGameList = writable([]);
const importBggCollection = async (bggUsername2, includeExpansions = false) => {
  console.log("Fetching collection from BGG...");
  let params = {};
  params.username = bggUsername2;
  params.stats = 1;
  if (!includeExpansions)
    params.excludesubtype = "boardgameexpansion";
  let { data } = await import_bgg_xml_api_client.default.get("collection", params);
  console.log("===== BGG COLLECTION");
  console.log(data);
  console.log("===== BGG GAMES");
  let fetchedGameList = !data.item ? [] : await Promise.all(data.item.map(async (game) => {
    let moreData = await import_bgg_xml_api_client.default.get("thing", { id: game.objectid });
    let suggested_playercount = moreData.data.item.poll.find((element) => element.name == "suggested_numplayers");
    let bestPlayerCount = [];
    console.log("Fetching player counts for " + game.name.text);
    suggested_playercount.results.forEach((result) => {
      let bestCount = parseInt(result.result.find((element) => element.value === "Best").numvotes);
      let recommendedCount = parseInt(result.result.find((element) => element.value === "Recommended").numvotes);
      let notRecommendedCount = parseInt(result.result.find((element) => element.value === "Not Recommended").numvotes);
      console.log("Player Count " + result.numplayers);
      console.log("Best(" + bestCount + ") Recommended(" + recommendedCount + ") NotRecommended(" + notRecommendedCount + ")");
      if (bestCount > recommendedCount && bestCount > notRecommendedCount) {
        console.log("Add " + result.numplayers + " to best player count");
        bestPlayerCount.push(result.numplayers);
      }
    });
    return {
      name: game.name.text,
      image: game.image,
      length: game.stats.minplaytime != game.stats.playingtime && game.stats.minplaytime != game.stats.maxplaytime ? Array.of(game.stats.minplaytime, game.stats.maxplaytime) : Array.of(game.stats.minplaytime),
      rating: 7.6,
      playerCount: Array.from({ length: game.stats.maxplayers - game.stats.minplayers + 1 }, (_, k) => k + parseInt(game.stats.minplayers)),
      bestPlayerCount
    };
  }));
  console.log("===== BGG COLLECTION (PROCESSED)");
  console.log(fetchedGameList);
  currentUserGameList.set(fetchedGameList);
};
const maxPartySize = 20;
let bggUsername = "radnire";
const Routes = (0, import_index_e8bdc45f.c)(($$result, $$props, $$bindings, slots) => {
  let $currentUserGameList, $$unsubscribe_currentUserGameList;
  $$unsubscribe_currentUserGameList = (0, import_index_e8bdc45f.b)(currentUserGameList, (value) => $currentUserGameList = value);
  let partySize = "0";
  let includeExpansions = false;
  let onlyRecommended = false;
  let filteredGameList = [];
  {
    {
      importBggCollection(bggUsername, includeExpansions);
    }
  }
  {
    {
      filteredGameList = $currentUserGameList.filter((game) => {
        {
          if (parseInt(partySize) == 0 || game.playerCount.includes(parseInt(partySize))) {
            return true;
          }
        }
        return false;
      });
    }
  }
  $$unsubscribe_currentUserGameList();
  return `<h1 class="${"text-2xl md:text-4xl dark:text-gray-200 text-gray-900 "}">Your Game Collection</h1>

<div class="${"bg-purple-100 p-8 mt-10 mb-8 rounded-lg"}"><div class="${"flex flex-col sm:flex-row sm:items-center"}"><p class="${"mr-4 text-xl text-gray-700"}">Import your collection from BGG</p>
		<input type="${"text"}" name="${"bgg-username"}" id="${"bgg-username"}"${(0, import_index_e8bdc45f.a)("value", bggUsername, 0)} class="${"pt-2 sm:mt-0 mt-4 focus:ring-purple-600 focus:border-purple-600 border-gray-300 shadow-sm rounded"}">
		<button class="${"sm:ml-2 sm:mt-0 mt-4 border-2 border-purple-600 px-4 py-2 bg-purple-600 hover:bg-purple-800 rounded text-gray-100"}">Import</button></div>

	<div class="${"flex flex-row pt-2 items-center"}"><p class="${"sm:mt-0 mt-8 text-xl text-gray-700"}">Choose your party size</p>
		<select name="${"party-size"}" id="${"party-size"}" class="${"pt-2 sm:ml-4 sm:mt-0 mt-8 focus:ring-purple-600 focus:border-purple-600 border-gray-300 shadow-sm rounded"}"><option value="${"0"}">Any</option>${(0, import_index_e8bdc45f.f)(Array(maxPartySize), (_, i) => {
    return `<option${(0, import_index_e8bdc45f.a)("value", i + 1, 0)}>${(0, import_index_e8bdc45f.e)(i + 1)}</option>`;
  })}</select></div>

	<div class="${"flex flex-row pt-2 items-center"}"><p class="${"sm:mt-0 mt-8 mr-4 text-xl text-gray-700"}">Include expansions</p>
		<input type="${"checkbox"}" name="${"party-size"}" id="${"party-size"}" class="${"pt-2 sm:mt-0 mt-8 focus:ring-purple-600 focus:border-purple-600 border-gray-300 shadow-sm rounded"}"${(0, import_index_e8bdc45f.a)("checked", includeExpansions, 1)}></div>

	<div class="${"flex flex-row pt-2 items-center"}"><p class="${"mr-4 text-xl text-gray-700"}">Only recommended</p>
		<input type="${"checkbox"}" name="${"only-recommended"}" id="${"only-recommended"}" class="${"pt-2 focus:ring-purple-600 focus:border-purple-600 border-gray-300 shadow-sm rounded"}"${(0, import_index_e8bdc45f.a)("checked", onlyRecommended, 1)}></div></div>

<p class="${"text-xl pt-4 pb-8"}">${(0, import_index_e8bdc45f.e)(filteredGameList.length)} games found</p>

<div class="${"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4"}">${(0, import_index_e8bdc45f.f)(filteredGameList, (game) => {
    return `${(0, import_index_e8bdc45f.v)(GameListItem, "Game").$$render($$result, { game }, {}, {})}`;
  })}</div>`;
});
