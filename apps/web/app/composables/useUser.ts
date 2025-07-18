import type { User } from '@ecom-template/types';

const user = ref<User | null>(null);

export function useUser() {
  const login = async () => {
    const result = await $fetch<User>('http://localhost:3000/api/login', {
      method: 'post',
      body: {},
    });

    user.value = result;
  };

  const logout = () => {
    user.value = null;
  };

  return { user, login, logout };
}
