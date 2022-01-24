<script lang="ts">
  import { goto } from '$app/navigation';
  import Footer from '$lib/components/Footer.svelte';
  import '../../app.css';
</script>

<div>
  <img class="w-full fixed h-full" src="1.jpg" alt="background" />
  <div
    class="w-full absolute bg-opacity-30 text-white backdrop-filter backdrop-blur-2xl h-screen flex flex-col"
  >
    <div class="h-full flex flex-col gap-5 items-center justify-center">
      <span class="text-3xl">404 Error</span>
      <span class="text-5xl text-center md:text-7xl text-white">Looks like you are lost !</span>
      <button on:click={() => goto('/')} class="mt-10 bg-white text-black rounded-lg w-44 h-10">
        Go back home
      </button>
    </div>
  </div>

  <div class="">
    <Footer />
  </div>
</div>
