<script lang="ts">
	import '../../app.css'
	import LoginForm from '$lib/components/LoginForm.svelte';
	import { goto } from '$app/navigation';
</script>

<button 
	on:click={() => goto('/')} 
	class="z-10 mt-5 ml-5 w-10 h-10 rounded-lg bg-white flex justify-center items-center"
>
	<i class="fas fa-arrow-left text-black"></i>
</button>
<div class="w-screen fixed h-screen flex justify-center items-center p-5 text-black">
	<LoginForm />
</div>
