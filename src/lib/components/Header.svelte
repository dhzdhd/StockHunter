<script lang="ts">
    import '../../app.css'

    export let items: any[] = [];
</script>

<header class="w-full h-14 relative flex flex-row justify-end items-center pr-8 shadow-md gap-5">
	{#each items as item}
         <button on:click={item.func} class="text-black bg-white rounded-lg w-20 h-10">{item.name}</button>
    {/each}
</header>
