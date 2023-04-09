import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import mintzoLogo from '../assets/mintzo2.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import footerLogo from '../assets/footer-logo.png'




const style = {
  wrapper: `bg-[#04111d] w-screen py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.1rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
  openseaFooterBg:`bg-[#2E4053] w-screen h-96 flex `,
  openseaFooterDiv: `text-white font-bold text-white hover:text-[#D7DBDD] cursor-pointer m-12`,
  textfooter: `text-white font-medium`,
}
//1868b7
const Footer = () => {
  return (
    <div className={style.openseaFooterBg}>
        <div className={style.openseaFooterBg}>
            
            <div id = "leftbox" className={style.openseaFooterDiv}>
                <Image src= {footerLogo} height={60} width={60} style={{paddingBottom:'4px'}}/>
                <h1 style={{fontSize:'20px'}}>Mintzo</h1>
                <text>
                    The worlds first NFT Marketplace with minimum 
                    per token charge and inbuilt uniswap feature.
                </text>
            </div>
             
            <div id = "middlebox" className={style.openseaFooterDiv}>
                <h2 style={{fontSize:'20px' ,paddingBottom:'10px'}}><u>Marketplace:</u></h2>
                <ul className={style.textfooter}>
                    <li><a>All Nfts</a></li>
                    <li><a>Art</a></li>
                    <li><a>Gaming</a></li>
                    <li><a>Memberships</a></li>
                    <li><a>PFPS</a></li>
                    <li><a>Photography</a></li>
                </ul>
            </div>
             
            <div id = "rightbox" className={style.openseaFooterDiv}>
                <h2 style={{fontSize:'20px' ,paddingBottom:'10px'}}><u>Account:</u></h2>
                <ul className={style.textfooter}>
                    <li><a>Profile</a></li>
                    <li><a>Favourites</a></li>
                    <li><a>Watchlist</a></li>
                    <li><a>My Collections</a></li>
                    <li><a>Create</a></li>
                    <li><a>Mintzo Pro</a></li>
                </ul>
            </div>

            <div id = "rightbox" className={style.openseaFooterDiv}>
                <h2 style={{fontSize:'20px' ,paddingBottom:'10px'}}><u>Resources:</u></h2>
                <ul className={style.textfooter}>
                    <li><a>Blog</a></li>
                    <li><a>Help Center</a></li>
                    <li><a>User Content FAQs</a></li>
                    <li><a>My Collections</a></li>
                </ul>
            </div>

            <div id = "rightbox" className={style.openseaFooterDiv}>
                <h2 style={{fontSize:'20px' ,paddingBottom:'10px'}}><u>Company:</u></h2>
                <ul className={style.textfooter}>
                    <li><a>About</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Ventures</a></li>
                    <li><a>Grants</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
