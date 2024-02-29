import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <Link href='/'>Home</Link><br/>
            <Link href='/news'>News</Link><br/>
        </div>
    );
};

export default Navbar;