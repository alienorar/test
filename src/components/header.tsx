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
        <div className="header">
            <nav className='bg-[#233a95] py-4 flex justify-center '>
                <p className='text-white font-sans'>Due to the <span className='font-bold'>COVID 19</span> epidemic, orders may be processed with a slight delay</p>
            </nav>
            <nav className='bg-[#fcfcfc] py-4 flex justify-center border-b-[1px] border-b-[#858282]' >
                <ul className='flex items-center gap-[20px] text-black'>
                    {
                        routes.map((item) => {
                            return <Link key={item.id} href={item.link}>{item.title}</Link>
                        })
                    }
                </ul>
                <div>
                    <div>
                        <p>100% Secure delivery without contacting the courier</p>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header