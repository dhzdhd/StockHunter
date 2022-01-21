<script lang="ts">
  import '../app.css';
  import AuthForm from '$lib/components/AuthForm.svelte';
  import { goto } from '$app/navigation';
</script>

<button
  on:click={() => goto('/')}
  class="absolute mt-5 ml-5 w-10 h-10 rounded-lg bg-white flex justify-center items-center"
>
  <i class="fas fa-arrow-left text-black" />
</button>
<div class="w-screen h-full flex justify-center items-center p-5 text-black">
  <AuthForm
    loginDetails={{
      register: false,
      title: 'Login',
      bottomText: "Don't have an account?",
      link: 'Register'
    }}
  />
</div>
