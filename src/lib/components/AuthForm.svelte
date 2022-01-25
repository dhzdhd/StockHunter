<script lang="ts">
  import { Auth, user } from '$lib/models/auth';
  import { goto } from '$app/navigation';
  import { fade } from 'svelte/transition';
  import { Circle } from 'svelte-loading-spinners';
  import { getContext } from 'svelte';
  import ErrorModal from './ErrorModal.svelte';

  let error = false;
  let errMessage = '';
  let busy = false;

  const showErr = (message: string) => {
    error = true;
    errMessage = message;
    setTimeout(() => {
      error = false;
    }, 1500);
  };

  const emailRegex = (): RegExpMatchArray | null => {
    return $user.email.match(
      new RegExp(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      )
    );
  };

  const validate = async (): Promise<void> => {
    busy = true;

    if (
      $user.password === '' ||
      $user.email === '' ||
      (loginDetails.register && $user.username === '')
    ) {
      showErr('Field(s) are empty!');
    } else if (!emailRegex()) {
      showErr('Invalid email address entered!');
    } else if ($user.password.length < 6) {
      showErr('Password should be atleast 6 characters in length!');
    } else {
      const res = await authenticate();
      if (res !== '') {
        showErr(res);
      } else {
        await goto('content');
      }
    }

    busy = false;
  };

  const authenticate = async (): Promise<string> => {
    let result: string;

    if (loginDetails.register) {
      result = await Auth.register($user.email, $user.password, $user.username);
    } else {
      result = await Auth.login($user.email, $user.password);
    }

    return result;
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
      <input
        class="dark:placeholder:text-white dark:bg-slate-800"
        placeholder="Name"
        type="text"
        bind:value={$user.username}
      />
    {/if}
    <input
      class="dark:placeholder:text-white dark:bg-slate-800"
      placeholder="Email"
      type="email"
      bind:value={$user.email}
    />
    <input
      class="dark:placeholder:text-white dark:bg-slate-800"
      placeholder="Password"
      type="password"
      bind:value={$user.password}
    />
  </form>

  <button
    class="mt-7 rounded-lg w-full shadow-xl h-14 active:shadow-none 
        bg-primary text-white
          flex justify-center items-center
          border-none font-semibold text-xl"
    on:click={validate}
  >
    {#if busy}
      <Circle size="30" color="white" unit="px" duration="1s" />
    {:else}
      {loginDetails.title}
    {/if}
  </button>

  <div class="flex flex-row justify-center text-sm">
    <span
      >{loginDetails.bottomText}
      <button on:click|preventDefault={() => switchRoute(loginDetails.link)} class="text-primary"
        >{loginDetails.link}</button
      >
    </span>
  </div>

  {#if error}
    <ErrorModal message={errMessage} />
  {/if}
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
