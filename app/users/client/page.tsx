/* eslint-disable @next/next/no-async-client-component */
'use client';

import { getUsers } from '@/app/api/users/users';
import { UserDto } from '@/app/models/users/User';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import UsersList from '../components/UsersList';

export default async function Page() {
  const [users, setUsers] = useState<UserDto[]>([]);

  useEffect(() => {
    const getData = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    getData();
  }, []);

  return (
    <div>
      <UsersList users={users} />
      {/* {users.map((user: any) => {
        return (
          <Link key={user.id} href={`${'/dashboard/users/'}${user.id}`}>
            <div>{`${user.firstname} ${user.lastname}`}</div>
          </Link>
        );
      })} */}
    </div>
  );
}
