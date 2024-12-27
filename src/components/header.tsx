import { link } from 'fs'
import Link from 'next/link'
import { title } from 'process'
import React from 'react'

const routes = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Contact", link: "/contact" },
]


const Header = () => {
    return (
        <div className='bg-green-800 py-4 flex justify-center' >
            <ul className='flex items-center gap-[20px] text-white'>
                {
                    routes.map((item) => {
                        return <Link key={item.id} href={item.link}>{item.title}</Link>
                    })
                }
            </ul>
        </div>
    )
}

export default Header