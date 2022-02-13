<script lang="ts">
  import '../../app.css';

  export let leadingTitle = '';
  export let leadingButton: { text?: string, icon?: string, func?: any } = {};
  export let trailingButtonItems: { text?: string, func?: any }[] = [];
</script>

<header class="flex flex-row items-center justify-between w-full h-20 gap-5 p-5 ">
  {#if leadingTitle !== ''}
     <span>{leadingTitle}</span>
  {:else if leadingButton.func !== undefined}
    <button class="flex items-center justify-center w-10 h-10 bg-white rounded-lg dark:bg-slate-900" on:click={leadingButton.func}>
      <span class="{leadingButton.icon} active:scale-x-90 active:translate-x-[1px] ease-in-bounce text-black dark:text-white">{leadingButton.text ?? ''}</span>
    </button>
  {:else}
     <span></span>
  {/if}
  <div class="flex flex-row gap-5">
    {#each trailingButtonItems as item}
      <button
        on:click={item.func}
        class="w-20 h-10 text-black bg-white rounded-lg dark:text-white dark:bg-slate-900"
        >{item.text}</button
      >
    {/each}
  </div>
</header>
