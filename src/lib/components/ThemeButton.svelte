<script lang="ts">
import { fly, slide, fade } from "svelte/transition";
  //! Add onMount for selecting icon per localStorage
  let icon = 'moon';
  
  async function changeTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      icon = 'sun';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      icon = 'moon';
    }
  }
</script>


<button
  on:click={changeTheme}
  class="w-10 h-10 mx-auto text-black bg-white rounded-lg shadow-md dark:text-white dark:bg-slate-700 dark:hover:bg-slate-600"
>
  {#key icon}
    <span in:fly={{ x: 50 }} out:fly={{ x: -50 }} class="fas fa-{icon}" />
  {/key}
</button>
