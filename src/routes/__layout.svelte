<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
</script>

<div>
  <img class="w-full fixed h-full" src="2.jpg" alt="background" />
  <div
    class="w-full absolute bg-opacity-30 text-white backdrop-filter backdrop-blur-2xl h-screen flex flex-col"
  >
    <slot />
  </div>

  <div class="">
  	<Footer />
  </div>
</div>
