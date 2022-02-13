<script lang="ts">
  import { goto } from '$app/navigation';

  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import { onMount } from 'svelte';
  import '../app.css';
  

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

<div>
  <div class="absolute w-screen h-screen bg-light-image dark:bg-dark-image dark:bg-black">
    <div
      class="flex flex-col w-screen h-screen text-white bg-opacity-30 backdrop-filter backdrop-blur-2xl"
    >
      <slot />
      <div class="absolute flex items-end h-screen pb-3 -z-10">
        <Footer />
      </div>
    </div>
  </div>  
</div>
