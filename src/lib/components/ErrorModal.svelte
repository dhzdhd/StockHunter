<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  import '../../app.css';
  export let message = '';
</script>

<div
  in:fly|local={{ y: -50, duration: 200 }}
  out:fade|local
  class="relative flex items-center justify-center p-1 text-center text-white bg-red-500 rounded-lg text-md"
>
  <span>{message}</span>
</div>
