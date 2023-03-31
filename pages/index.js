import Head from 'next/head'
import Header from '../components/Header'
import indexHeader from '../components/indexHeader'
import Hero from '../components/Hero'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'


const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3423] `,

  buttonMetamask: `border border-[#282b2f] bg-[#ee811a] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black my-4 w-1/2 hover:w-1/2 hover:bg-sky-700`,
  buttonCoinbase: `border border-[#282b2f] bg-[#ee811a] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black my-4 w-1/2 hover:w-1/2 hover:bg-sky-700`,
  buttonWalletconnect: `border border-[#282b2f] bg-[#ee811a] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black my-4 w-1/2 hover:w-1/2 hover:bg-sky-700`,
  buttonLedger: `border border-[#282b2f] bg-[#ee811a] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black my-4 w-1/2 hover:w-1/2 hover:bg-sky-700`,
  buttonPhantom: `border border-[#282b2f] bg-[#ee811a] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black my-4 w-1/2 hover:w-1/2 hover:bg-sky-700`,
  buttonBitkeep: `border border-[#282b2f] bg-[#ee811a] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black my-4 w-1/2 hover:w-1/2 hover:bg-sky-700`,

  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

export default function Home() {
  const { address, connectWallet } = useWeb3()

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: 'red',
          color: '#fff',
        },
      }
    )
  }

  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc)

      welcomeUser(result.userName)
    })()
  }, [address])

  return (
    <div className={style.wrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div>
        <Header/>
        <div className={style.walletConnectWrapper}>
          <button
            className={style.buttonMetamask}
            onClick={() => connectWallet('injected')}
          >
            <span>Connect Metamask</span>
          </button>
          <button
            className={style.buttonCoinbase}
            onClick={() => connectWallet('injected')}
          >
            Connect Coinbase Wallet
          </button>
          <button
            className={style.buttonWalletconnect}
            onClick={() => connectWallet('injected')}
          >
            Connect WalletConnect
          </button>
          <button
            className={style.buttonLedger}
            onClick={() => connectWallet('injected')}
          >
            Connect Ledger
          </button>
          <button
            className={style.buttonPhantom}
            onClick={() => connectWallet('injected')}
          >
            Connect Phantom
          </button>
          <button
            className={style.buttonBitkeep}
            onClick={() => connectWallet('injected')}
          >
            Connect BitKeep
          </button>
          <div className={style.details}>
            You need Chrome to be
            <br /> able to run this app.
          </div>
        </div>
        </div>
      )}
    </div>
  )
}
