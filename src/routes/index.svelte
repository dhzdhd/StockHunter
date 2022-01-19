<script lang="ts">
	import '../app.css'
	import { goto } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';

	const func = async () => {
		await goto('/login');
	};
</script>

<Header items={[
	{name: "Login", func: () => {goto('/login')}},
	{name: "SignUp", func: () => {goto('/login')}}
]} />
<div class="h-full flex flex-col justify-center items-center">
	<h1 class="text-7xl md:text-8xl relative pl-5 pr-5">
		Stock Hunter
	</h1>
</div>
