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
</script>

<div class="flex flex-row w-screen h-screen">
  <Nav />
  <div class="w-full">
    <Header />
    <div class="fixed w-full h-full p-5">
      <slot />
    </div>
  </div>
</div>
