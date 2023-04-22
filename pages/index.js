import Head from 'next/head'
import Header from '../components/Header'
import indexHeader from '../components/indexHeader'
import indexCard from '../components/indexCard'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'
import about_banner from '../assets/about_banner.svg'
import Image from 'next/image'
import phone from '../assets/phone.webp'
import verification from '../assets/verification.svg'
import profile from '../assets/profile.svg'
import trading from '../assets/trading.svg'
import Script from 'next/script'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-white `,

  buttonMetamask: `border border-[#282b2f] bg-[#ee811a] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black my-4 w-1/2 hover:w-1/2 hover:bg-sky-700`,
  buttonCoinbase: `border border-[#282b2f] bg-[#ee811a] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black my-4 w-1/2 hover:w-1/2 hover:bg-sky-700`,
  buttonWalletconnect: `border border-[#282b2f] bg-[#ee811a] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black my-4 w-1/2 hover:w-1/2 hover:bg-sky-700`,
  buttonLedger: `border border-[#282b2f] bg-[#ee811a] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black my-4 w-1/2 hover:w-1/2 hover:bg-sky-700`,
  buttonPhantom: `border border-[#282b2f] bg-[#ee811a] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black my-4 w-1/2 hover:w-1/2 hover:bg-sky-700`,
  buttonBitkeep: `border border-[#282b2f] bg-[#ee811a] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black my-4 w-1/2 hover:w-1/2 hover:bg-sky-700`,

  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,

  indexCard: `flex items-center bg-white w-screen h-150 sm flex-inverse`,
  indexCardDiv: `w-screen h-100 text-black font-bold m-12`,
  indexCardDiv2: `w-screen h-100 text-black font-bold m-12  content-center`,
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
          <Footer />
        </>
      ) : (
        <div>
          <Header />

          <div className={style.indexCard}>
            <div id="leftbox" className={style.indexCardDiv}>
              <h2
                class="ml3"
                style={{
                  fontSize: '40px',
                  paddingBottom: '10px',
                  color: 'black',
                }}
              >
                <span>Build your crypto portfolio</span>
              </h2>
              <h4
                style={{
                  fontSize: '20px',
                  paddingBottom: '10px',
                  color: 'grey',
                  fontWeight: 'normal',
                }}
              >
                <span>Start your first trade with these easy steps.</span>
              </h4>

              <span className={style.indexCardDiv}>
                <h2
                  style={{
                    fontSize: '20px',
                    paddingBottom: '10px',
                    color: 'black',
                  }}
                >
                  <Image
                    src={verification}
                    height={80}
                    width={80}
                    style={{ paddingBottom: '4px' }}
                  />{' '}
                  Verify your identity.<span></span>
                </h2>
                <h4
                  style={{
                    fontSize: '18px',
                    paddingBottom: '10px',
                    color: 'grey',
                    fontWeight: 'normal',
                  }}
                >
                  <span>
                    Complete the identity verification process to secure your
                    account and transactions.
                  </span>
                </h4>

                <br></br>
                <br></br>
                <h2
                  style={{
                    fontSize: '20px',
                    paddingBottom: '10px',
                    color: 'black',
                  }}
                >
                  <span>
                    <Image
                      src={profile}
                      height={80}
                      width={80}
                      style={{ paddingBottom: '4px' }}
                    />{' '}
                    Fund your account
                  </span>
                </h2>
                <h4
                  style={{
                    fontSize: '18px',
                    paddingBottom: '10px',
                    color: 'grey',
                    fontWeight: 'normal',
                  }}
                >
                  <span>
                    Add funds to your crypto account to start trading crypto.
                    You can add funds with a variety of payment methods.
                  </span>
                </h4>
                <br></br>
                <br></br>
                <h2
                  style={{
                    fontSize: '20px',
                    paddingBottom: '10px',
                    color: 'black',
                  }}
                >
                  <span>
                    <Image
                      src={trading}
                      height={80}
                      width={80}
                      style={{ paddingBottom: '4px' }}
                    />{' '}
                    Start Trading
                  </span>
                </h2>
                <h4
                  style={{
                    fontSize: '18px',
                    paddingBottom: '10px',
                    color: 'grey',
                    fontWeight: 'normal',
                  }}
                >
                  <span>
                    You're good to go! Buy/sell crypto, set up recurring buys
                    for your investments, and discover what Binance has to
                    offer..
                  </span>
                </h4>
                <br></br>
                <br></br>
              </span>
            </div>
            <div id="rightbox" className={style.indexCardDiv2}>
              <Image
                src={phone}
                height={676}
                width={335}
                style={{ paddingBottom: '4px', alignContent: 'center' }}
              />
            </div>
          </div>
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
              <span style={{ color: 'black' }}>
                You are one step away from NFT Marketplace.
              </span>
              <br />{' '}
              <span style={{ color: 'black' }}>Connect Wallet to proceed.</span>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  )
}
