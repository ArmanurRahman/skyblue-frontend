import { IconButton } from "@material-ui/core";
import Logo from "../UI/Logo/logo";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import CategoryMenu from "./categorySelectMenu";
import CategoriesPanel from "../Category/category";

const Header = () => {
    return (
        <div className=' container mx-auto flex flex-col bg-white'>
            <div className='mt-5 w-full bg-white'>
                <div className='flex flex-row items-center justify-between'>
                    <div>
                        <Logo />
                    </div>
                    <div className='flex-grow desktop:max-w-3xl relative rounded-xl  overflow-hidden '>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6 absolute text-gray-400 top-2 left-2 focus:text-primaryDark'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                            />
                        </svg>
                        <input
                            className=' rounded-xl w-full h-10 pl-10 border-solid border 
                            border-gray-400 focus:border-primaryDark focus:border-2 focus:outline-none 
                            '
                            placeholder='Search for'
                        />

                        <div className='absolute top-0 right-0  h-10'>
                            <CategoryMenu />
                        </div>
                    </div>
                    <div>
                        <IconButton>
                            <AccountCircleIcon />
                        </IconButton>
                        <IconButton>
                            <ShoppingCartIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div>
                <CategoriesPanel />
            </div>
        </div>
    );
};

export default Header;
