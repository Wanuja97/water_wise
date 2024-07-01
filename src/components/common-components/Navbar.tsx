// import static contents
import Logo from '../../assets/logo1.jpeg';

function Navbar() {
    return (
        <div>
            <nav className="bg-white w-full flex relative justify-between items-center mx-auto px-8 pl-0 h-20 shadow-md text-cyan-900 font-semibold">
                {/* <!-- logo --> */}
                <div className="inline-flex">
                    <div>
                        <div className="md:block">
                            <img src={Logo} alt="aqua_auto" />
                        </div>
                    </div>
                </div>
                <div className="flex-initial">
                    <div className="flex justify-end items-center relative">
                        <div className="flex mr-4 items-center">
                            <div className="block relative">
                                <button type="button" className="inline-flex items-center py-2 px-3 hover:bg-gray-200 rounded-full border border-gray-300">
                                    <span className="mr-2">Logout</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                                        <polyline points="10 17 15 12 10 7" />
                                        <line x1="15" y1="12" x2="3" y2="12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
