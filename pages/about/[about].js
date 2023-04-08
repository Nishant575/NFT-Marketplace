import React, { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useWeb3 } from '@3rdweb/hooks'
import { client } from '../../lib/sanityClient'
import { ThirdwebSDK } from '@3rdweb/sdk'
import Header from '../../components/Header'
import LearnCard from '../../components/LearnCard'
import UniswapHero from '../../components/UniswapHero'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'
import NFTCard from '../../components/NFTCard'
import Image from 'next/image'
import eth_logo from '../../assets/eth2.svg'
import banner_img from '../../assets/banner.jpg'
import about_banner from '../../assets/about_banner.svg'
import Footer from '../../components/Footer'
import ReactPlayer from 'react-player'



const style = {
  bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover`,
  infoContainer: `w-screen px-4`,
  midRow: `w-full flex justify-center text-white`,
  endRow: `w-full flex justify-end text-white`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: `text-5xl font-bold mb-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
  videoplayer: `content-center margin m-10 p-10`,
  carouselDiv: `flex items-center`,
  aboutContainer:`flex items-center bg-white w-screen h-150 sm flex-inverse`,
  aboutDiv: `w-screen h-100 text-black font-bold m-12`,
}





const About = () => {
  return (
    <div>
      <Header />
      <div className={style.aboutContainer}>
             
            <div id = "leftbox" className={style.aboutDiv}>
                <h2 style={{fontSize:'30px' ,paddingBottom:'10px',color:'black'}}><span>Building an open digital<br></br>
                  economy</span></h2>

                  <span className={style.aboutDiv}>
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
             
            <div id = "rightbox" className={style.aboutDiv}>
                <Image src= {about_banner} height={550} width={550} style={{paddingBottom:'4px'}}/>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default About

