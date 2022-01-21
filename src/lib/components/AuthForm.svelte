<script lang="ts">
  import { user } from '$lib/models/auth';
  import { goto } from '$app/navigation';
  import { fade } from 'svelte/transition';
  import { Circle } from 'svelte-loading-spinners';

  const login = (): void => {
    goto('content/stocks');
  };

  const switchRoute = (link: string): void => {
    goto(`/${link.toLowerCase()}`);
  };

  export let loginDetails: {
    register: boolean;
    title: string;
    bottomText: string;
    link: string;
  };
</script>

<div
  in:fade|local={{ duration: 200 }}
  class="bg-slate-100 dark:bg-slate-900 dark:text-white shadow-2xl
            flex flex-col gap-5 justify-center
            rounded-lg h-[10] w-96 p-7"
>
  <h1 class="text-3xl mb-1">{loginDetails.title}</h1>

  <form class="flex flex-col gap-5 w-full mt-5">
    {#if loginDetails.register}
      <input placeholder="Name" type="text" bind:value={$user.username} />
    {/if}
    <input placeholder="Email" type="email" bind:value={$user.email} />
    <input placeholder="Password" type="password" bind:value={$user.password} />
  </form>

  <button
    class="mt-7 rounded-lg w-full shadow-xl h-14 active:shadow-none 
             active:bg-black active:text-primary bg-primary text-white
               flex justify-center items-center
               border-none font-semibold text-xl"
    on:click={login}><Circle size="30" color="white" unit="px" duration="1s" /></button
  >

  <div class="flex flex-row justify-center text-sm">
    <span
      >{loginDetails.bottomText}
      <button on:click={() => switchRoute(loginDetails.link)} class="text-primary"
        >{loginDetails.link}</button
      >
    </span>
  </div>
</div>

<style lang="postcss">
  input {
    height: 2.5rem;
    border: none;
    border-radius: 0.1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
</style>
