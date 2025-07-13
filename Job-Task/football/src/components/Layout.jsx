import { AiOutlineLineChart } from 'react-icons/ai';
import { FaRegUser, FaSearch, FaUserAlt } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { RiShieldUserFill, RiTeamFill } from 'react-icons/ri';
import { SiCoinmarketcap } from 'react-icons/si';
import logo from '../assets/images/logo.png';
import Chart from './Chart';
import Player from './Player';
import PrimaryButton from './PrimaryButton';
import Profile from './Profile';
import Rating from './Rating';
import Table from './Table';

const Layout = () => {
  return (
    <div>
      <div>
        <nav className="fixed z-30 w-full border-b border-gray-200 bg-white">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between bg-[#FCFFFE]">
              <div className="flex items-center justify-start">
                <button
                  id="toggleSidebarMobile"
                  aria-expanded="true"
                  aria-controls="sidebar"
                  className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 lg:hidden"
                >
                  <svg
                    id="toggleSidebarMobileHamburger"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                  </svg>
                  <svg
                    id="toggleSidebarMobileClose"
                    className="hidden h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                  </svg>
                </button>
                <a
                  href="#"
                  className="flex items-center text-xl font-bold lg:ml-2.5"
                >
                  <img src={logo} className="mr-2 h-11" alt="logo" />
                </a>
                <form className="hidden lg:block lg:pl-16">
                  <label htmlFor="topbar-search" className="sr-only ">
                    Search
                  </label>
                  <div className="relative mt-1 lg:w-64 ">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="email"
                      id="topbar-search"
                      className="block w-[650px] rounded-lg border border-gray-300 bg-[#F7F7F7] p-2.5 py-3.5 pl-10 text-xs font-medium text-[#A0AEC0] focus:border-cyan-600 focus:ring-cyan-600"
                      placeholder="Ronaldo Rafael Royero Zuniga"
                    />
                    <PrimaryButton
                      classes={`absolute top-[-2px] right-[-395px] bg-[#14314E] text-xs`}
                    >
                      Show Result
                    </PrimaryButton>
                  </div>
                </form>
              </div>
              <div className="flex items-center gap-1.5">
                <PrimaryButton classes={`bg-[#14314E] w-36 justify-center`}>
                  Login
                </PrimaryButton>
                <PrimaryButton
                  classes={`btn-outline text-[#14314E] w-36 justify-center`}
                >
                  Sign up
                </PrimaryButton>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex overflow-hidden bg-white pt-16">
          <aside
            id="sidebar"
            className="transition-width fixed left-0 top-0 z-20 hidden h-full w-64 flex-shrink-0 flex-col bg-[#FCFFFE] pt-16 duration-75 lg:flex"
            aria-label="Sidebar"
          >
            <div className="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white pt-0">
              <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
                <div className="flex-1 space-y-1 divide-y bg-white px-3">
                  <ul className="space-y-2 pb-2">
                    <li>
                      <a
                        href="#"
                        className="group flex items-center rounded-lg p-2 text-base font-bold text-gray-900 hover:bg-gray-100"
                      >
                        <PrimaryButton
                          classes={`bg-[#14314E] w-52 justify-start`}
                        >
                          <RiShieldUserFill size={24} />
                          <span className="ml-5">Name</span>
                        </PrimaryButton>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        className="group flex items-center rounded-lg p-2 py-3.5 text-base font-bold text-[#8C8C8C] hover:bg-gray-100 "
                      >
                        <AiOutlineLineChart size={24} />
                        <span className="ml-5">Metric</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        className="group flex items-center rounded-lg p-2 py-3.5 text-base font-bold text-[#8C8C8C] hover:bg-gray-100 "
                      >
                        <HiUsers size={24} />
                        <span className="ml-5">Create Team</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        className="group flex items-center rounded-lg p-2 py-3.5 text-base font-bold text-[#8C8C8C] hover:bg-gray-100 "
                      >
                        <SiCoinmarketcap size={24} />
                        <span className="ml-5">Player Market</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        className="group flex items-center rounded-lg p-2 py-3.5 text-base font-bold text-[#8C8C8C] hover:bg-gray-100 "
                      >
                        <FaUserAlt size={24} />
                        <span className="ml-5">Player Comparison</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        className="group flex items-center rounded-lg p-2 py-3.5 text-base font-bold text-[#8C8C8C] hover:bg-gray-100 "
                      >
                        <FaRegUser size={24} />
                        <span className="ml-5">Similar Player</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        className="group flex items-center rounded-lg p-2 py-3.5 text-base font-bold text-[#8C8C8C] hover:bg-gray-100 "
                      >
                        <FaSearch size={24} />
                        <span className="ml-5">GK Search</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        className="group flex items-center rounded-lg p-2 py-3.5 text-base font-bold text-[#8C8C8C] hover:bg-gray-100 "
                      >
                        <RiTeamFill size={24} />
                        <span className="ml-5">Team Plot</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <div
            className="fixed inset-0 z-10 hidden bg-gray-900 opacity-50"
            id="sidebarBackdrop"
          ></div>
          <div
            id="main-content"
            className="relative h-full w-full overflow-y-auto bg-gray-50 lg:ml-64"
          >
            <main>
              <div className="bg-[#F7F7F7] px-6 pt-12">
                <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-3 ">
                  <Player />

                  <div className="col-span-2">
                    <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-2">
                      <Profile />
                      <Chart />
                      <div className="col-span-2">
                        <Rating />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div>
                  <Table />
                </div>
              </div>
            </main>
          </div>
        </div>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
        <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
      </div>
    </div>
  );
};

export default Layout;
