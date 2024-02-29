import React from 'react';
import Link from "next/link";

const Page = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()
    return (
        <>
            <h1>Home Page</h1>
            <div className='grid grid-cols-5 gap-3'>
                {
                    data.map((item,i)=>{
                        return(
                            <Link href={`/news/${item['id']}`} className='card shadow p-4' key={i}>
                                <h3>{item['id']}</h3>
                                <h3>{item['title']}</h3>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Page;