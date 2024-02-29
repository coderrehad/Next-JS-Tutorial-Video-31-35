import React from 'react';
import Link from "next/link";

const Page = async ({params}) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.Id}`)
    let data = await response.json()
    return (
        <div className='card shadow m-10 p-10'>
            <h1>{data['id']}</h1>
            <h3>{data['title']}</h3>
            <h3>{data['body']}</h3>
            <Link className='btn btn-neutral' href='/news'>Back</Link>
        </div>
    );
};

export default Page;