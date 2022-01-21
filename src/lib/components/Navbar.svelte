<script lang="ts">
	let showMenu = false;
	let isSelected = false;

	function handleMenuClick() {
		showMenu = !showMenu;
		console.log('he');
	}
</script>

<nav class="w-48 h-screen relative flex flex-col items-center backdrop-blur-3xl bg-slate-100">
	<div class="header w-full h-40 flex flex-col items-center justify-center">
		<h1>Header</h1>
	</div>
	<button
		on:click={() => {
			if (!isSelected) {
				isSelected = !isSelected;
			}
		}}
		class="w-full h-20 hover:bg-slate-200 focus:bg-slate-300 flex flex-row gap-5 items-center"
	>
		{#if isSelected}
			<div class="color-bar fixed h-20 w-2 bg-green-400 rounded-r-xl" />
		{/if}
		<div class="flex flex-row justify-center items-center gap-5 w-full">
			<h2>Icon</h2>
			<h2>Text</h2>
		</div>
	</button>
</nav>
