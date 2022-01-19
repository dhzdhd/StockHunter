<script lang="ts">
    import { isLogin } from '../../models/route';
    import { user } from '../../models/auth';
    import { goto } from '$app/navigation';
    import { fade, fly,slide } from 'svelte/transition';

    export const login = (): void => {
        isLogin.update((e) => !e);
        goto('content/stocks');
    };

    const switchPage = (): void => {
        signUp = !signUp;
        title = signUp ? 'Sign Up' : 'Login';
        bottomText = signUp ? 'Already have an account?' : "Don't have an account?";
        bottomLink = signUp ? 'Login' : 'Sign Up'
    };

    let signUp = true;
    let title = 'Sign Up';
    let bottomText = 'Already have an account?';
    let bottomLink = 'Login';
</script>

<div in:slide|local={{ duration: 300 }} 
     class="bg-slate-100 dark:bg-slate-900 dark:text-white shadow-2xl
            flex flex-col gap-5 justify-center
            rounded-lg h-[10] w-96 p-7"
>
    <h1 class="text-3xl mb-1">{title}</h1>

    <form class="flex flex-col gap-5 w-full mt-5">
        {#if signUp}
            <input out:fly|local="{{ x: 100, duration: 300 }}" in:fly|local="{{ x: -100, duration: 300 }}"
                   placeholder=" Name" type="text" bind:value={$user.username} />
        {/if}
        <input placeholder=" Email" type="text" bind:value={$user.email} />
        <input placeholder=" Password" type="text" bind:value={$user.password} />
    </form>

    <button
        class="mt-7 rounded-lg w-full shadow-xl h-14 active:shadow-none 
             active:bg-black active:text-primary bg-primary text-white 
               border-none font-semibold text-xl"
        on:click={login}
    >Enter</button>

    <div class="flex flex-row justify-center text-sm">
        <span>{bottomText} 
            <button on:click={switchPage} class="text-primary">{bottomLink}</button>
        </span>
    </div>
</div>

<style lang="postcss">
    input {
        height: 2.5rem;
        border: none;
        border-radius: 0.1rem;
    }
</style>
