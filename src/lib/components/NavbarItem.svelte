<script lang="ts">
  import { page } from '$app/stores';
  import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let navbarItemContents: {
    icon?: string;
    type?: 'fas' | 'fab';
    text?: string;
    href?: string;
  };
</script>

<a
  href={navbarItemContents.href}
  class="flex flex-row items-center w-full h-20 gap-5 hover:bg-slate-200 dark:hover:bg-slate-700 focus:bg-slate-300 dark:focus:bg-slate-600"
>
  {#if $page.path === navbarItemContents.href}
    <div
      in:scale={{ easing: quintOut, duration: 700 }}
      class="color-bar fixed h-14 w-1.5 bg-green-400 rounded-r-xl"
    />
  {/if}
  <div class="flex flex-row items-center w-full gap-5 pl-5">
    <span class="{navbarItemContents.type} fa-{navbarItemContents.icon}" />
    <h2>{navbarItemContents.text}</h2>
  </div>
</a>
