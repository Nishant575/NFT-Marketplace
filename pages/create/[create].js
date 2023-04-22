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
import our_story from '../../assets/story.webp'
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
  aboutContainer2: `flex items-center bg-[#f3fbfe] w-screen h-150 sm flex-inverse`
}





const Create = () => {
  return (
    <div>
      <Header />
      <div className={style.aboutContainer}>
        
       </div>
      <Footer/>
    </div>
  )
}

export default Create

