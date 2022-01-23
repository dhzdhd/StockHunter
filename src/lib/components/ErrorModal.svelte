<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  import '../../app.css';
  export let message = '';
</script>

<div
  in:fly={{ y: -50, duration: 200 }}
  out:fade
  class="relative flex justify-center items-center text-center rounded-lg bg-red-500 text-white text-md p-1"
>
  <span>{message}</span>
</div>
