<script lang="ts">
	import '../../app.css'
	import LoginForm from '$lib/components/LoginForm.svelte';
</script>

<img class="w-full fixed h-full" src="2.jpg" alt="background">
<div class="w-full h-full fixed bg-opacity-30 backdrop-filter backdrop-blur-2xl flex flex-col items-center">
	<div class="w-screen fixed h-screen flex justify-center items-center p-5">
		<LoginForm />
	</div>
</div>
