<script lang="ts">
  import { goto } from '$app/navigation';

  import '../app.css';
</script>

<div class="flex flex-col items-center justify-center h-full gap-5">
  <span class="text-3xl">404 Error</span>
  <span class="text-5xl text-center text-white md:text-7xl">Looks like you are lost !</span>
  <button
    on:click={() => goto('/')}
    class="h-10 mt-10 text-black bg-white rounded-lg dark:bg-slate-900 dark:text-white w-44"
  >
    Go back home
  </button>
</div>
