<script context="module" lang="ts">
  import { authGuard } from '$lib/models/guard';
  import type { LoadInput, LoadOutput } from '@sveltejs/kit';

  export async function load({ page, fetch, session }: LoadInput): Promise<LoadOutput> {
    return await authGuard({ page, fetch, session, stuff: {} });
  }
</script>

<script lang="ts">
  import '../../app.css';
  import Header from '$lib/components/Header.svelte';
  import Nav from '$lib/components/Navbar.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
</script>

<div class="flex flex-row w-screen h-screen dark:bg-slate-900 dark:text-white">
  <Nav />
  <div class="w-full">
    <Header leadingTitle={'Home'} />
    <div class="fixed w-full h-full p-5">
      <slot />
    </div>
  </div>
</div>
