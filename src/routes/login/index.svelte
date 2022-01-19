<script lang="ts">
	import '../../app.css'
	import LoginForm from '$lib/components/LoginForm.svelte';
	import { fade } from 'svelte/transition';
</script>

<div in:fade|local class="w-screen fixed h-screen flex justify-center items-center p-5 text-black">
	<LoginForm />
</div>
