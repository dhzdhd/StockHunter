<script lang="ts">
  import '../app.css';
  import { goto } from '$app/navigation';
  import Header from '$lib/components/Header.svelte';

  const func = async () => {
    await goto('/login');
  };
</script>

<svelte:head>
  <title>Landing Page</title>
</svelte:head>

<div class="fixed w-full">
  
</div>
<div class="flex flex-col items-center justify-center h-full">
  <h1 class="relative pl-5 pr-5 text-7xl md:text-8xl">Stock Hunter</h1>
</div>
