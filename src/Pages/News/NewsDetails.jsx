import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const NewsDetails = ({selectedNews}) => {
    const {title, image_url,details} = selectedNews;

    console.log(selectedNews);
    return (
        <div className='border-2 border-gray-100 rounded-lg mb-8 p-[30px]'>
            {/* Cover pic */}
            <div>
                <img className='w-full' src={image_url} alt="" />
                <h1 className='text-[25px] font-extrabold pt-[20px] pb-2'>{title}</h1>
                <p className='text-[16px] text-gray-400 pb-8'>{details}</p>
                <NavLink to="/"><button className='flex gap-2 items-center bg-[#D72050] py-2 px-8 rounded-lg text-white text-[20px] font-semibold'><AiOutlineArrowLeft className='text-[25px]'/>All news in this category</button></NavLink>
            </div>
        </div>
    );
};

NewsDetails.propTypes = {
    selectedNews: PropTypes.node,
    news: PropTypes.object,    
};

export default NewsDetails;