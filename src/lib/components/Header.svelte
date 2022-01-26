<script lang="ts">
  import '../../app.css';

  export let items: { name: string; func: any }[] = [];
</script>

<header class="relative flex flex-row items-center justify-end w-full h-20 gap-5 pr-5 ">
  {#each items as item}
    <button
      on:click={item.func}
      class="w-20 h-10 text-black bg-white rounded-lg dark:text-white dark:bg-slate-900"
      >{item.name}</button
    >
  {/each}
</header>
