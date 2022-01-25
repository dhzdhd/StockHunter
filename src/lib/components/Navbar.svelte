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
  <div class="header w-full h-20 flex flex-col items-center justify-center">
    <button
      on:click={handleMenuClick}
      class="fas fa-bars w-full h-full hover:bg-slate-200 dark:hover:bg-slate-700"
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

  <div class="-z-10 h-full fixed flex items-end justify-center pb-5">
    <ThemeButton />
  </div>
</nav>
