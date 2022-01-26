<script lang="ts">
  import '../app.css';
  import AuthForm from '$lib/components/AuthForm.svelte';
  import { goto } from '$app/navigation';
</script>

<button
  on:click={() => goto('/')}
  class="absolute flex items-center justify-center w-10 h-10 mt-5 ml-5 bg-white rounded-lg dark:bg-slate-900"
>
  <i class="text-black fas fa-arrow-left dark:text-white" />
</button>
<div class="flex items-center justify-center w-screen h-full p-5 text-black">
  <AuthForm
    loginDetails={{
      register: true,
      title: 'Sign Up',
      bottomText: 'Already have an account?',
      link: 'Login'
    }}
  />
</div>
