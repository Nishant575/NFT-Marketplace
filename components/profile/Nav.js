import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'



const style = {
  wrapper: ` w-screen px-[0rem] py-[0rem] flex mt-[0.5rem] mb-[3rem] h-[4vh] border-gray-600 border-b `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.1rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex justify-start `,
  headerItem: `text-white text-xl mr-12 font-bold text-[#c8cacd] hover:text-white hover:border-b cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`
}

const Nav = () => {

    return(
        <div className={style.wrapper}>
            <div className={style.headerItems}>
                <Link href="#">
                    <div className={style.headerItem}> Collected </div>
                </Link>
                <Link href="#">
                    <div className={style.headerItem}> Created </div>
                </Link>
                <Link href="#">
                    <div className={style.headerItem}> Favourite </div>
                </Link>
                <Link href="#">
                    <div className={style.headerItem}> Activity </div>
                </Link>
                <div className={style.headerItem}> Create </div>
            </div>
            
        </div>
    )

}

export default Nav