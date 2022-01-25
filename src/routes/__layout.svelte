<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';
  import '../app.css';

  onMount(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
</script>

<div>
  <div class="w-full fixed h-full bg-[url('2.png')] dark:bg-[url('2_dark.png')] dark:bg-black"></div>
  <div
    class="w-full absolute bg-opacity-30 text-white backdrop-filter backdrop-blur-2xl h-screen flex flex-col"
  >
    <slot />
  </div>

  <Footer />
</div>
