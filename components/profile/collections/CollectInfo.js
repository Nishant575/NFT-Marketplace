import { BsFillCartFill } from 'react-icons/bs'
import col_logo from '../../../assets/GG_img.png'
import Image from 'next/image'
import Link from 'next/link'

const style = {
  eventItem: `flex px-4 py-5 font-medium cursor-pointer `,
  event: `flex items-center`,
  eventIcon: `mr-2 text-xl`,
  eventName: `text-lg font-semibold text-[white]`,
  eventPrice: `flex items-center text-[white]`,
  eventPriceValue: `text-lg`,
  ethLogo: `h-5 mr-2`,
  accent: `flex text-lg text-[white] items-center`,
}

const CollectInfo = ({ event }) => {
  return (
    <Link href="/collections/0xe4a4803e60d6FdF8749F2d27c4869b4b237f4c07">
    <div className={style.eventItem}>
      <div className={`${style.event} flex-[3]`}>
        <div className={style.eventIcon}>
        <Image
          src={col_logo}
          alt="eth"
          width="60px"
          height="60px"
          className={style.ethLogo}
        />
        </div>
        <div className={style.eventName}>GG's Club</div>
      </div>
      <div className={`${style.eventPrice} flex-[2]`}>
    
        <div className={style.eventPriceValue}>0.5K</div>
      </div>
      <div className={`${style.accent} flex-[3]`}>0.001ETH</div>
      <div className={`${style.accent} flex-[1]`}>3</div>
    </div>
    </Link>
  )
}

export default CollectInfo
