export async function getUsers() {
  const res = await fetch('https://jsonplaceholder.org/users');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getUserById(id: string) {
    debugger;
    const url = `${'https://jsonplaceholder.org/users/'}${id}`;
    const res = await fetch(url);
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }