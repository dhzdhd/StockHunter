<script lang="ts">
  import '../app.css';
  import AuthForm from '$lib/components/AuthForm.svelte';
  import { goto } from '$app/navigation';
import Header from '$lib/components/Header.svelte';
</script>

<div class="absolute">
  <Header 
    leadingButton={{ icon: 'fas fa-arrow-left', func: () => goto('/') }}
  />
</div>

<!-- <button
  on:click={() => goto('/')}
  class="absolute flex items-center justify-center w-10 h-10 mt-5 ml-5 bg-white rounded-lg dark:bg-slate-900"
>
  <span
    class="fas fa-arrow-left active:scale-x-90 active:translate-x-[1px] ease-in-bounce text-black dark:text-white"
  />
</button> -->

<div class="flex items-center justify-center w-screen h-full p-5 text-black">
  <AuthForm
    loginDetails={{
      register: false,
      title: 'Login',
      bottomText: "Don't have an account?",
      link: 'Register'
    }}
  />
</div>
