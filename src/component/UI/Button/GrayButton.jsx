import { AiOutlineCaretRight } from "react-icons/ai";
const ViewAllButton = () => {
    return (
        <div className='flex items-center cursor-pointer'>
            <button className='text-gray-400'>View All</button>
            <AiOutlineCaretRight className='text-gray-400' />
        </div>
    );
};

export default ViewAllButton;
