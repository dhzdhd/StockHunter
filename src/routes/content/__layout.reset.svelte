<script lang="ts">
	import '../../app.css';
	import Header from '$lib/components/Header.svelte';
	import Nav from '$lib/components/Navbar.svelte';
</script>

<div class="flex flex-row w-screen h-screen">
	<Nav />
	<div class="w-full">
		<Header />
		<div class="fixed w-full h-full">
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">
	.content {
		@apply text-lg text-gray-600;
	}
</style>
