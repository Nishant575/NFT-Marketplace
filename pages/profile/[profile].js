import React, { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useWeb3 } from '@3rdweb/hooks'
import { client } from '../../lib/sanityClient'
import { ThirdwebSDK } from '@3rdweb/sdk'
import Header from '../../components/Header'
import Nav from '../../components/profile/Nav'
import Info from '../../components/profile/Info'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'
import Footer from '../../components/Footer'
import Image from 'next/image'
import eth_logo from '../../assets/eth2.svg'
import edit_logo from '../../assets/edit.png'


const style = {
  bannerImageContainer: `h-[32vh] w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover`,
  infoContainer: `w-screen px-10`,
  startRow: `w-full flex justify-start text-white`,
  midRow: `w-full flex justify-center text-white`,
  endRow: `w-full flex justify-end text-white`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-7rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  userName: `text-3xl font-bold mb-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
  addressCopy: `hover:text-[#CCCCCC] cursor-pointer`,
  edit: 'px-4 mx-2 hover:cursor-pointer'
}

const Profile = () => {
    const { address } = useWeb3()
    const [user, setUser] = useState({})
   

    const fetchCollectionData = async (sanityClient = client) => {
        const query = `*[_type == "users" && walletAddress == "${address}" ] {
            userName,
            "profileImageUrl": profileImage.asset->url,
            "bannerImageUrl": bannerImage.asset->url,
            twitterHandle,
            igHandle
          }`
    
        const userData = await sanityClient.fetch(query)
    
        console.log(userData, '🔥')
    
        // the query returns 1 object inside of an array
        await setUser(userData[0])
      }

      useEffect(() => {
        fetchCollectionData()
      }, [address])

      console.log(typeof address,"dfadfa")
      console.log(address)
      let tempadd = address

      let shortAddress = tempadd.substring(4, 0) + "..."+  tempadd.substring(42, 38) 

      function copyAdress(){
        navigator.clipboard.writeText(address)
      }
    return (
        <div className="overflow-hidden">
            <Header />
            <div className={style.bannerImageContainer}>
                <img className={style.bannerImageContainer}
                src={
                    user?.bannerImageUrl
                      ? user.bannerImageUrl
                      : 'https://via.placeholder.com/200'
                  }
                alt="Picture of the author"
                />
            </div>
            <div className={style.infoContainer}>
                <div className={style.startRow}>
                  <img
                    className={style.profileImg}
                    src={
                        user?.profileImageUrl
                          ? user.profileImageUrl
                          : 'https://via.placeholder.com/200'
                      }
                    alt="profile image"
                  />
                </div>
                <div className={style.endRow}>
                  <div className={style.socialIconsContainer}>
                    <div className={style.socialIconsWrapper}>
                      <div className={style.socialIconsContent}>
                        <div className={style.socialIcon}>
                        <CgWebsite />
                        </div>
                        <div className={style.divider} />
                        <div className={style.socialIcon}>
                        <AiOutlineInstagram />
                        </div>
                        <div className={style.divider} />
                        <div className={style.socialIcon}>
                        <AiOutlineTwitter />
                        </div>
                        <div className={style.divider} />
                        <div className={style.socialIcon}>
                        <HiDotsVertical />
                        </div>
                      </div>
                      </div>
                  </div>
                </div>
                <div className={style.startRow}>
                  <div className={style.userName}>{user?.userName}</div>
                  <Link href="">
                    <div className={style.edit}>
                      <Image
                        src={edit_logo}
                        alt="edit"
                        
                      />
                    </div>
                  </Link>
                </div>
                <div className={style.startRow}>
                  <div className={style.createdBy} >
                    <Image
                            src={eth_logo}
                            alt="eth"
                            className={style.ethLogo}
                            width="15px"
                            height="15px"
                        />
                    <span title='copy' className={style.addressCopy} onClick={copyAdress}>{shortAddress}</span>
                  </div>
                </div>
                  <Nav/>
                 <Info/>    
            </div>
            <Footer/>
        </div>
    )
}
export default Profile 