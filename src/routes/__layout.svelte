<script>
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
	import '../app.css';

	$: section = $page.path.split('/')[1];
	let darkMode = false;
</script>

<div class={`${darkMode ? 'dark' : ''}`}>
	<div class=" dark:bg-gray-900 bg-slate-50 min-h-screen pb-8">
		<NavBar {section} />
		<div class="flex flex-col items-center">
			<div class="p-8 max-w-screen-lg">
				<slot />
			</div>
		</div>
	</div>
	<DarkModeToggle bind:darkMode />
</div>
