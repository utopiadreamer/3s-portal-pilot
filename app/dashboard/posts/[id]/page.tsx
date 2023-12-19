async function getData(id: string) {
  debugger;
  const url = `${'https://jsonplaceholder.typicode.com/posts/'}${id}`;
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
  const post = await getData(params.id);

  return (
    <main>
        <div>
            Title: {post.title}
            <br/>
            Body: {post.body}
        </div>
    </main>
  );
}
