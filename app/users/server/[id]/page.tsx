async function getData(id: string) {
  debugger;
  const url = `${'https://jsonplaceholder.org/users/'}${id}`;
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const user = await getData(params.id);

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
