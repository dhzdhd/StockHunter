<script lang="ts">
	import '../../app.css'
	import LoginForm from '$lib/components/LoginForm.svelte';
	import { fade } from 'svelte/transition';
</script>

<div class="fixed mt-5 ml-5 w-10 h-10 rounded-lg bg-white flex justify-center items-center">
	<span class="fas fa-arrow-left text-black"></span>
</div>
<div class="w-screen fixed h-screen flex justify-center items-center p-5 text-black">
	<LoginForm />
</div>
