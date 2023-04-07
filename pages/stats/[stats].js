import React, { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useWeb3 } from '@3rdweb/hooks'
import { client } from '../../lib/sanityClient'
import { ThirdwebSDK } from '@3rdweb/sdk'
import Header from '../../components/Header'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'
import NFTCard from '../../components/NFTCard'
import Image from 'next/image'
import eth_logo from '../../assets/eth2.svg'
import banner_img from '../../assets/banner.jpg'
import StatsHeader from '../../components/StatsHeader'
import StatsEventItem from '../../components/nft/itemActivity/StatsEventItem'
import { dummyEvents } from '../../static/dummyEvents'
import StatsItemActivity from '../../components/nft/StatsItemActivity'
import Footer from '../../components/Footer'


const Stats = () => {
  return (
    <div>
    <Header/>
    <StatsHeader/>
    <StatsItemActivity />
    <Footer/>
    </div>
  )
}

export default Stats
