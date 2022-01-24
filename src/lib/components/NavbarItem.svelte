<script lang="ts">
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';

  export let navbarItemContents: {
    icon?: string;
    type?: 'fas' | 'fab';
    text?: string;
    href?: string;
  };
</script>

<a
  href="{navbarItemContents.href}"
  class="w-full h-20 hover:bg-slate-200 focus:bg-slate-300 flex flex-row gap-5 items-center"
>
  {#if $page.path === navbarItemContents.href}
    <div in:fly={{ x: -10 }} class="color-bar fixed h-14 w-1.5 bg-green-400 rounded-r-xl" />
  {/if}
  <div class="flex flex-row pl-5 items-center gap-5 w-full">
    <span class="{navbarItemContents.type} fa-{navbarItemContents.icon}" />
    <h2>{navbarItemContents.text}</h2>
  </div>
</a>
