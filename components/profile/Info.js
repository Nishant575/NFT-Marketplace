import Image from 'next/image'

import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import CollectInfo from './collections/CollectInfo'




const style = {
  wrapper: `mb-12 mt-8 border border-[#151b22] rounded-xl bg-[#303339] overflow-hidden`,
  bodyText: `text-gray-300 text-2xl text-center my-40`,
  tableHeader: `flex w-full bg-[#262b2f] border-y border-[#151b22] px-4 py-1`,
  tableElement: `text-slate-400 text-lg`

}

const Info = () => {

    return(
        <div className={style.wrapper}>

            <div className={style.tableHeader}>
                <div className={`${style.tableHeaderElement} ${style.tableElement} flex-[3]`}>Collection</div>
                <div className={`${style.tableHeaderElement} ${style.tableElement} flex-[2]`}>Volume</div>
                <div className={`${style.tableHeaderElement} ${style.tableElement} flex-[3]`}>Floor Price</div>
                <div className={`${style.tableHeaderElement} ${style.tableElement} flex-[1]`}>No. Of Items</div>
            </div>
            
                <CollectInfo/>
        </div>
    )

}

export default Info