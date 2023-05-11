import Image from "next/image"
import { Inter } from "next/font/google"
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaList } from "react-icons/fa"
import { BsSun, BsMoon} from "react-icons/bs"
import Link from "next/link"

const InterFont = Inter({ weight: "800", subsets: ["latin"] })

const Nav = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32" x-cloak x-data="appData()" x-init="appInit()">    
          <nav className="flex w-full fixed top-0 left-0 right-0 z-10 flex-col">
            <div className="flex red_bg justify-around py-5 backdrop-blur-md shadow-md w-full top-0 left-0 right-0 z-10">
                <div className="flex items-center flex-row">
                        <Image width={40} height={36} src="/cricket.svg" alt="Store Logo" />
                        <h3 className="text-2xl font-medium white ml-2">
                          Cricket
                        </h3>
                        <div className="w-0.5 opacity-50 h-6 mx-2 bg-white rounded"/>
                        <div className="w-11 h-6 bg-red-800 rounded-3xl">
                            <BsMoon size={11} className="ml-2 mt-1.5 overflow-visible" />
                        </div>
                </div>
    
                <div className="items-center hidden lg:flex">
                <form>   
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block p-2 w-96 px-12 text-sm text-gray-900 rounded-md" placeholder="Search by player, series etc..." required />
                    </div>
                </form>
                </div>
                <div className="flex items-center space-x-8">
                    <div className="cursor-pointer  hidden space-x-4 lg:flex">
                      <FaTwitter size={25}/>
                      <FaLinkedin size={25}/>
                      <FaInstagram size={25}/>
                      <FaYoutube size={25}/>
                      <FaFacebookSquare size={25} />
                    </div>
                    <button className="flex items-center justify-center text-black bg-white hover:bg-rose-200 rounded w-24 h-9 transition-colors duration-300">
                        Sign in
                    </button>
                </div>
            </div>
            <div className="flex white_bg justify-around py-4 backdrop-blur-md shadow-md w-full top-0 left-0 right-0 z-10">
              <ul className="flex text-sm flex-row font-medium text-black overflow-auto hide_scrollbar h-max space-x-8 mx-8">
                <Link href='/' className="whitespace-nowrap flex space-x-1">
                  <Image width={12} height={12} src="/live.svg" alt="Store Logo"/>
                  <p>Live Scores</p>
                </Link>
                <Link href='/' className="whitespace-nowrap">Fantasy Cricket Tips</Link>
                <Link href='/' className="whitespace-nowrap">Fantasy News</Link>
                <Link href='/' className="whitespace-nowrap">IPL Points Table</Link>
                <Link href='/' className="whitespace-nowrap">IPL</Link>
                <Link href='/' className="whitespace-nowrap">IPL Orange Cap</Link>
                <Link href='/' className="whitespace-nowrap">Match Prediction</Link>
                <Link href='/' className="whitespace-nowrap">Analysis</Link>
                <Link href='/' className="whitespace-nowrap">Fixtures</Link>
                <Link href='/' className="self-center"><FaList /></Link>
              </ul>
            </div>
          </nav>
        </div>

  )
}

export default Nav