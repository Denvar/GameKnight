import { writable } from "svelte/store";
import bggXmlApiClient from 'bgg-xml-api-client';

// export const currentUserGameList = writable([{
//   name: "My Game",
//   image: "",
//   length: [30, 50],
//   rating: 7.6,
//   playerCount: [4, 5, 6],
//   bestPlayerCount: [4]
// },
// {
//   name: "My Game",
//   image: "",
//   length: [30, 50],
//   rating: 7.6,
//   playerCount: [4, 5, 6],
//   bestPlayerCount: [4]
// },
// {
//   name: "My Game",
//   image: "",
//   length: [30, 50],
//   rating: 7.6,
//   playerCount: [4, 5, 6],
//   bestPlayerCount: [4]
// },
// {
//   name: "My Game",
//   image: "",
//   length: [30, 50],
//   rating: 7.6,
//   playerCount: [4, 5, 6],
//   bestPlayerCount: [4]
// },
// {
//   name: "My Game",
//   image: "",
//   length: [30, 50],
//   rating: 7.6,
//   playerCount: [4, 5, 6],
//   bestPlayerCount: [4]
// },
// {
//   name: "My Game",
//   image: "",
//   length: [30, 50],
//   rating: 7.6,
//   playerCount: [4, 5, 6],
//   bestPlayerCount: [4]
// },
// {
//   name: "My Game",
//   image: "",
//   length: [30, 50],
//   rating: 7.6,
//   playerCount: [4, 5, 6],
//   bestPlayerCount: [4]
// },
// {
//   name: "My Game",
//   image: "",
//   length: [30, 50],
//   rating: 7.6,
//   playerCount: [4, 5, 6],
//   bestPlayerCount: [4]
// },
// {
//   name: "My Game",
//   image: "",
//   length: [30, 50],
//   rating: 7.6,
//   playerCount: [4, 5, 6],
//   bestPlayerCount: [4]
// },
// {
//   name: "My Game",
//   image: "",
//   length: [30, 50],
//   rating: 7.6,
//   playerCount: [4, 5, 6],
//   bestPlayerCount: [4]
// }]);

export const currentUserGameList = writable([]);

export const importBggCollection = async (bggUsername, includeExpansions = false) => {
  console.log('Fetching collection from BGG...');

  let params = {};
  params.username = bggUsername;
  params.stats = 1;
  if (!includeExpansions) params.excludesubtype = 'boardgameexpansion';

  let { data } = await bggXmlApiClient.get('collection', params);  

  console.log("===== BGG COLLECTION");
  console.log(data)

  console.log("===== BGG GAMES");
  let fetchedGameList = !data.item ? [] : await Promise.all(data.item.map(async (game) => {
    let moreData = await bggXmlApiClient.get('thing', {id: game.objectid});

    let suggested_playercount = moreData.data.item.poll.find(element => element.name == 'suggested_numplayers');
    let bestPlayerCount = [];

    console.log("Fetching player counts for " + game.name.text)

    suggested_playercount.results.forEach(result => {
      let bestCount = parseInt(result.result.find(element => element.value === 'Best').numvotes);
      let recommendedCount = parseInt(result.result.find(element => element.value === 'Recommended').numvotes);
      let notRecommendedCount = parseInt(result.result.find(element => element.value === 'Not Recommended').numvotes);

      console.log("Player Count " + result.numplayers)
      console.log("Best("+ bestCount +") Recommended("+ recommendedCount +") NotRecommended("+ notRecommendedCount +")");

      if (bestCount > recommendedCount && bestCount > notRecommendedCount) {
        console.log("Add " + result.numplayers + " to best player count")
        bestPlayerCount.push(result.numplayers);
      }
    });

    return {
      name: game.name.text,
      image: game.image,
      length:
        game.stats.minplaytime != game.stats.playingtime && game.stats.minplaytime != game.stats.maxplaytime
          ? Array.of(game.stats.minplaytime, game.stats.maxplaytime)
          : Array.of(game.stats.minplaytime),
      rating: 7.6,
      playerCount: Array.from(
        { length: game.stats.maxplayers - game.stats.minplayers + 1 },
        (_, k) => k + parseInt(game.stats.minplayers)
      ),
      bestPlayerCount: bestPlayerCount
    }
  }));

  console.log("===== BGG COLLECTION (PROCESSED)");
  console.log(fetchedGameList)

  currentUserGameList.set(fetchedGameList);
}