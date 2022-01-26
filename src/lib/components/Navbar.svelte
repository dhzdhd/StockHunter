<script lang="ts">
  import { fly } from 'svelte/transition';
  import NavbarItem from './NavbarItem.svelte';
  import ThemeButton from './ThemeButton.svelte';

  let showMenu = false;

  function handleMenuClick() {
    showMenu = !showMenu;
  }
</script>

<nav
  class="{showMenu
    ? 'w-[14rem]'
    : 'w-[4rem]'} duration-200 h-screen flex flex-col items-center backdrop-blur-3xl bg-slate-100 dark:bg-slate-800 dark:text-white"
>
  <div class="flex flex-col items-center justify-center w-full h-20 header">
    <button
      on:click={handleMenuClick}
      class="w-full h-full fas fa-bars hover:bg-slate-200 dark:hover:bg-slate-700"
    />
  </div>

  <NavbarItem
    navbarItemContents={{
      icon: 'home',
      type: 'fas',
      text: showMenu ? 'Home' : '',
      href: '/content'
    }}
  />
  <NavbarItem
    navbarItemContents={{
      icon: 'cog',
      type: 'fas',
      text: showMenu ? 'Settings' : '',
      href: '/content/settings'
    }}
  />

  <div class="fixed flex items-end justify-center h-full pb-5 -z-10">
    <ThemeButton />
  </div>
</nav>
