import { getUsers } from '@/app/api/users/users';
import UsersList from '../components/UsersList';

export default async function Page() {
  const users = await getUsers();

  return (
    <UsersList
      users={users}
      loadData={() => {
        return false;
      }}
    />
  );
}
