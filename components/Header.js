import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {HomeIcon,LightningBoltIcon,BadgeCheckIcon,CollectionIcon,SearchIcon,UserIcon} from '@heroicons/react/outline'

function Header() {
    return (
        <header className="flex flex-col items-center sm:flex-row justify-between h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>
            
            <Image src="https://links.papareact.com/ua6"
            objectFit="contain"
            width={150}
            height={90}
            className="-pt-80"
            />
        </header>
    )
}

export default Header
