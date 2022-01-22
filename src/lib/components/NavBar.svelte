<script>
	export let section;
</script>

<nav class="flex justify-between p-8">
	<ul
		class="flex sm:flex-row flex-col sm:space-x-2 sm:space-y-0 space-y-6 sm:text-center text-right"
	>
		<li>
			<a
				sveltekit:prefetch
				href="/"
				class:border-b-4={section === ''}
				class="px-4 py-2 font-bold text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-600 border-purple-400 hover:border-purple-400"
			>
				Home
			</a>
		</li>
		<li>
			<a
				sveltekit:prefetch
				href="/friends"
				class:border-b-4={section === 'friends'}
				class="px-4 py-2 font-bold text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-600 border-purple-400 hover:border-purple-400"
			>
				Friends
			</a>
		</li>
		<li>
			<a
				sveltekit:prefetch
				href="/about"
				class:border-b-4={section === 'about'}
				class="px-4 py-2 font-bold text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-600 border-purple-400 hover:border-purple-400"
			>
				About
			</a>
		</li>
		<li>
			<a
				sveltekit:prefetch
				href="/changelog"
				class:border-b-4={section === 'changelog'}
				class="px-4 py-2 font-bold text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-600 border-purple-400 hover:border-purple-400"
			>
				Changelog
			</a>
		</li>
	</ul>
	<ul
		class="flex sm:flex-row flex-col sm:space-x-2 sm:space-y-0 space-y-6 sm:text-center text-right"
	>
		<li>
			<a
				sveltekit:prefetch
				href="/login"
				class="border-2 border-purple-600 px-4 py-2 rounded text-purple-600 dark:text-gray-100 dark:hover:text-purple-400"
			>
				Sign in
			</a>
		</li>
		<li>
			<a
				sveltekit:prefetch
				href="/register"
				class="border-2 border-purple-600 px-4 py-2 bg-purple-600 hover:bg-purple-800 rounded text-gray-100"
			>
				Sign up
			</a>
		</li>
	</ul>
</nav>
