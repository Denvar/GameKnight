<script>
	export let game;

	function toRanges(values, separator = '-') {
		return values
			.slice()
			.sort((p, q) => p - q)
			.reduce((acc, cur, idx, src) => {
				if (idx > 0 && cur - src[idx - 1] === 1) acc[acc.length - 1][1] = cur;
				else acc.push([cur]);
				return acc;
			}, [])
			.map((range) => range.join(separator));
	}
</script>

<div
	class="flex flex-col w-72 rounded shadow-md hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-white/40 bg-white border-white border"
>
	<img
		class="w-full h-60 object-cover object-top bg-purple-50 text-purple-50 rounded-t"
		src={game.image}
		alt="{game.name} box art"
	/>
	<div class="px-6 py-4">
		<p class="font-bold text-lg mb-2 line-clamp-2 text-gray-700">{game.name}</p>
	</div>
	<div class="px-6 py-4 mt-auto">
		<div class="flex flex-row pt-2 justify-between">
			<p class="flex flex-row text-gray-700 text-sm">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 mr-1"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width={2}
						d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				{game.length.length > 1
					? Math.min(...game.length) + '-' + Math.max(...game.length)
					: game.length}m
			</p>
			<p class="flex flex-row text-gray-700 text-sm">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 mr-1"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
				{game.playerCount.length > 1
					? Math.min(...game.playerCount) + '-' + Math.max(...game.playerCount)
					: game.playerCount}
			</p>
			<p class="text-yellow-500 flex flex-row text-sm">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 mr-1"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
				{game.bestPlayerCount.length == 0 ? '?' : toRanges(game.bestPlayerCount).join(', ')}
			</p>
		</div>
	</div>
</div>
