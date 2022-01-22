<script>
	let friendList = [
		{
			name: 'Jack',
			games: 10,
			id: 1
		},
		{
			name: 'Danyang',
			games: 10,
			id: 1
		},
		{
			name: 'Phil',
			games: 10,
			id: 1
		},
		{
			name: 'JC',
			games: 10,
			id: 1
		},
		{
			name: 'Alvin',
			games: 10,
			id: 1
		}
	];
</script>

<h1 class="text-4xl dark:text-gray-200 text-gray-900">Your Game Collection</h1>

<div class="bg-green-200 gap-12">
	<h1 class="text-4xl">Friends</h1>
	<div class="">
		{#each friendList as friend}
			<div class="p-4">
				<p>{friend.name}</p>
				<p>{friend.games}</p>
			</div>
		{/each}
	</div>
</div>
