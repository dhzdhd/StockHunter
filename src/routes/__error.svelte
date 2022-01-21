<script lang="ts">
	import { goto } from '$app/navigation';

	import '../app.css';
</script>

<div class="h-full flex flex-col gap-5 items-center justify-center">
	<span class="text-3xl">404 Error</span>
	<span class="text-7xl text-white">Looks like you are lost!</span>
	<button on:click={() => goto('/')} class="mt-10 bg-white text-black rounded-lg w-44 h-10">
		Go back home
	</button>
</div>
