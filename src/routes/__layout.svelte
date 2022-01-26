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
  <div class="fixed w-full h-full bg-light-image dark:bg-dark-image dark:bg-black" />
  <div
    class="absolute z-20 flex flex-col w-full h-screen text-white bg-opacity-30 backdrop-filter backdrop-blur-2xl"
  >
    <div class="absolute z-10 justify-end w-screen">
      <Header
        items={[
          {
            name: 'Login',
            func: () => {
              goto('/login');
            }
          },
          {
            name: 'SignUp',
            func: () => {
              goto('/register');
            }
          }
        ]}
      />
    </div>
      <slot />
    <div class="absolute flex items-end h-screen pb-3 -z-10">
      <Footer />
    </div>
  </div>

  
</div>
