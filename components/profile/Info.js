import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'



const style = {
  wrapper: `content-center w-full h-[35vh] mb-12 mt-8 border border-[#151b22] rounded-xl bg-[#303339] overflow-hidden`,
  bodyText: `text-gray-300 text-2xl text-center my-40`
}

const Info = () => {

    return(
        <div className={style.wrapper}>

            <div className={style.bodyText}>
                Nothing to show here...
            </div>  

        </div>
    )

}

export default Info