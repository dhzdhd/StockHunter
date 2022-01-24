import { goto } from '$app/navigation';
import type { LoadInput, LoadOutput } from '@sveltejs/kit';
import { onDestroy } from 'svelte';
import { loggedInfo } from './auth';

export async function authGuard({ page }: LoadInput): Promise<LoadOutput> {
  let loggedIn = false;

  loggedInfo.subscribe((info) => {
    loggedIn = info.loggedIn;
  });

  return {};
  // if (loggedIn && (page.path === '/login' || page.path === '/register')) {
  //   return { status: 302, redirect: '/content' };
  // } else if (loggedIn && page.path === '/content') {
  //   return {};
  // } else {
  //   return { status: 302, redirect: '/login' };
  // }
}
