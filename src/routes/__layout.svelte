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
  <div class="w-full fixed h-full bg-light-image dark:bg-dark-image dark:bg-black" />
  <div
    class="z-20 w-full absolute bg-opacity-30 text-white backdrop-filter backdrop-blur-2xl h-screen flex flex-col"
  >
    <div class="z-10 absolute w-screen justify-end">
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
    <div class="-z-10 absolute h-screen flex items-end pb-3">
      <Footer />
    </div>
  </div>

  
</div>
