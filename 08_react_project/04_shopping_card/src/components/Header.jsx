import { FaCartPlus } from "react-icons/fa";

const Header = ({cartSize,handleShow}) => {
    return (
        <>
            <header className="text-gray-600 body-font dark:bg-slate-900">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl dark:text-white">Tailblocks</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900 dark:text-white">Shop</a>
                    </nav>
                    <button onClick={handleShow} className="inline-flex items-center text-xl bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded mt-4 md:mt-0"><FaCartPlus /> <strong className="ml-2 mb-1">{cartSize}</strong></button>
                </div>
            </header>
        </>
    )
}
export default Header;