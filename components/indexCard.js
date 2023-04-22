import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import mintzoLogo from '../assets/mintzo2.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'



const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.1rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
  indexCard:`flex items-center bg-white w-screen h-150 sm flex-inverse`,
  indexCardDiv: `w-screen h-100 text-black font-bold m-12`,
}

const indexCard = () => {
  return (
      <div className={style.indexCard}>
             
            <div id = "leftbox" className={style.indexCardDiv}>
                <h2 style={{fontSize:'30px' ,paddingBottom:'10px',color:'black'}}><span>Building an open digital<br></br>
                  economy</span></h2>

                  <span className={style.indexCardDiv}>
                    At Mintzo, we're excited about a brand new type of digital good called a non-fungible token, 
                    or NFT. NFTs have exciting new properties: they’re unique, provably scarce, tradeable
                    , and usable across multiple applications. Just like physical goods, you can do whatever you 
                    want with them! You could throw them in the trash, gift them to a friend across the world, or go 
                    sell them on an open marketplace. But unlike physical goods, they're armed with all the programmability 
                    of digital goods.<br></br><br></br>

                    A core part of our vision is that open protocols like Ethereum and interoperable 
                    standards like ERC-721 and ERC-1155 will enable vibrant new economies. 
                    We're building tools that allow consumers to trade their items freely, creators to 
                    launch new digital works, and developers to build rich, integrated marketplaces for 
                    their digital items.
                    <br></br><br></br>
                    We’re proud to be the first and largest marketplace for NFTs.
                  </span>
            </div>
            <div id = "rightbox" className={style.indexCardDiv}>
                <Image src= {about_banner} height={550} width={550} style={{paddingBottom:'4px'}}/>
            </div>
        </div>
  )
}

export default indexCard
