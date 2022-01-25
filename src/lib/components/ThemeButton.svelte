<script lang="ts">
  function changeTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
</script>

<button
  on:click={changeTheme}
  class="flex items-center h-10 w-10 justify-center shadow-md text-black bg-white dark:text-white dark:bg-slate-700 rounded-lg dark:hover:bg-slate-600"
>
  <span class="fas fa-adjust" />
</button>
