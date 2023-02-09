import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import uniswap_img from '../assets/uniswap.png'


const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const UniswapHero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Swap and exchange cryptocurrency using Uniswap.
            </div>
            <div className={style.description}>
              Uniswap is the worlds leading decentralized crypto trading protocol.
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}><Link href = "https://uniswap.org/">Uniswap</Link></button>
              <button className={style.button}><Link href = "https://app.uniswap.org/#/swap">Convert to Ether</Link></button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <Image
                  src={uniswap_img}
                  alt="eth"
                  className={style.ethLogo}
                  width="350px"
                  height="400px"
                  border-radius= "2%"
                />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Uniswap</div>
                <a
                  className="text-[#1868b7]"
                  href="https://uniswap.org/"
                >
                  Click on explore to exchange.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniswapHero
