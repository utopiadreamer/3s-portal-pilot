import Link from "next/link"

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Page() {
    const data = await getData()
   
    return <main>{data.map((post: any) => {
        return (
          <Link
            key={post.id}
            href={`${'/dashboard/posts/'}${post.id}`}
          >
            <div>{post.title}</div>
          </Link>
        );
      })}</main>
  }