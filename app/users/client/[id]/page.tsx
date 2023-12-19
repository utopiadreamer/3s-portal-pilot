import { getUserById } from "@/app/api/users/users";


export default async function Page({ params }: { params: { id: string } }) {
  const user = await getUserById(params.id);

  return (
    <main>
      <div>
        name: {`${user.firstname} ${user.lastname}`}
        <br />
        email: {user.email}
        <br />
        birthDate: {user.birthDate}
        <br />
        website: {user.website}
        <br />
        phone: {user.phone}
      </div>
    </main>
  );
}
