<script>
	import Game from '$lib/components/GameListItem.svelte';
	import { currentUserGameList, importBggCollection } from '$lib/stores/CurrentUserStore.js';

	const maxPartySize = 20;

	let partySize = '0';
	let bggUsername = 'radnire';
	let includeExpansions = false;

	$: {
		importBggCollection(bggUsername, includeExpansions);
	}
</script>

<h1 class="text-4xl dark:text-gray-200 text-gray-900">Your Game Collection</h1>

<div class="bg-purple-100 p-8 mt-10 mb-8 rounded-lg">
	<div class="flex flex-row items-center">
		<p class="mr-4 text-xl text-gray-700">Import your collection from BGG:</p>
		<input
			type="text"
			name="bgg-username"
			id="bgg-username"
			value={bggUsername}
			class="pt-2 focus:ring-purple-600 focus:border-purple-600 border-gray-300 shadow-sm rounded"
		/>
		<button
			on:click={() => importBggCollection(bggUsername, includeExpansions)}
			class="ml-2 border-2 border-purple-600 px-4 py-2 bg-purple-600 hover:bg-purple-800 rounded text-gray-100"
			>Import</button
		>
	</div>

	<div class="flex flex-row pt-2 items-center">
		<p class="mr-4 text-xl text-gray-700">Choose your party size:</p>
		<select
			name="party-size"
			id="party-size"
			bind:value={partySize}
			class="pt-2 focus:ring-purple-600 focus:border-purple-600 border-gray-300 shadow-sm rounded"
		>
			<option value="0">Any</option>
			{#each Array(maxPartySize) as _, i}
				<option>{i + 1}</option>
			{/each}
		</select>
	</div>

	<div class="flex flex-row pt-2 items-center">
		<p class="mr-4 text-xl text-gray-700">Include expansions:</p>
		<input
			type="checkbox"
			name="party-size"
			id="party-size"
			bind:checked={includeExpansions}
			class="pt-2 focus:ring-purple-600 focus:border-purple-600 border-gray-300 shadow-sm rounded"
		/>
	</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
	{#each $currentUserGameList as game}
		{#if parseInt(partySize) == 0 || game.playerCount.includes(parseInt(partySize))}
			<Game {game} />
		{/if}
	{/each}
</div>
