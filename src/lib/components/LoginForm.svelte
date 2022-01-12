<script lang="ts">
	import { isLogin } from '../../models/route';
	import { user } from '../../models/auth';

	export const login = (): void => {
		isLogin.update((e) => !e);
	};

	const switchPage = (): void => {
		signUp = !signUp;
		title = signUp ? 'Sign Up' : 'Login';
		bottom = signUp ? 'Login' : 'Sign Up';
	};

	let signUp = true;
	let title = 'Sign Up';
	let bottom = 'Login';
</script>

<div
	class="bg-slate-100 shadow-2xl
            flex flex-col gap-5 items-center justify-center 
            rounded-3xl h-96 w-96"
>
	<h1 class="text-3xl mb-1">{title}</h1>

	<form class="flex flex-col gap-5">
		{#if signUp}
			<input placeholder=" Name" type="text" bind:value={$user.username} />
		{/if}
		<input placeholder=" Email" type="text" bind:value={$user.email} />
		<input placeholder=" Password" type="text" bind:value={$user.password} />
	</form>

	<button
		class="mt-7 rounded-3xl shadow-xl w-40 h-14 active:shadow-none active:bg-black active:text-green-500 duration-75 border-gray-900 border-2 border-solid font-semibold text-2xl"
		on:click={login}
	>Enter
	</button>

	<button on:click={switchPage}>{bottom} -></button>
</div>

<style lang="postcss">
	.content {
		@apply font-mono;
	}

	input {
		height: 2rem;
		border: solid;
		border-width: 0.1rem;
		border-radius: 0.5rem;
	}
</style>
