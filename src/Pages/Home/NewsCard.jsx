import PropTypes from 'prop-types';
import { BsBookmark, BsShare, BsEyeFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const {_id,title,author,image_url,details,rating,total_view}= news;
    const ratingNumber = (rating.number);
    console.log(ratingNumber);
 
    
    const renderRatingInputs = () => {
        const ratingInputs = [];
        for (let i = 0; i < ratingNumber; i++) {
            ratingInputs.push(
                <input
                    key={i}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 w-[20px] h-[20px]"
                    checked
                    readOnly
                />
            );
        }
        return ratingInputs;
    };

    return (
        <div className='border-2 border-gray-100 rounded-lg mb-8'>
            <div className='flex justify-between py-4 px-5 bg-gray-100 rounded-t-lg items-center'>
                <div className='flex gap-[15px]'>
                <img src={author.img} alt="" className='rounded-full w-[40px] h-[40px]'/>
                <div className='flex flex-col'>
                    <h1 className='text-[16px] font-semibold text-gray-700'>{author.name}</h1>
                    <p className='text-[14px] text-gray-500'>{author.published_date}</p>
                </div>
                </div>
                <div className='flex gap-[10px] text-[22px]'>
                <BsBookmark></BsBookmark>
                <BsShare></BsShare>
                </div>
            </div>
            <div className='m-4 pb-4 border-b-2 border-gray-100'>
                <h1 className='text-[20px] text-gray-700 font-bold '>{title}</h1>
                <div >
                    <img className='rounded-none pt-4 pb-8' src={image_url} alt="" />
                </div>
                {
                  details.length > 200 
                  ? <p className='text-gray-500 text-[16px]'>{details.slice(0, 200)} <Link to={`/news/${_id}`} className='text-[orange] text-[16px] font-semibold'>Read More...</Link></p>
                  : <p>{details}</p> 
                }
            </div>
            <div className='px-4 flex justify-between pb-4'>
                <div className="rating">
                    {renderRatingInputs()}<p className='pl-2 text-[16px] text-gray-500'>{ratingNumber}</p>
                </div>
                <div className="views flex items-center gap-2">
                    <BsEyeFill className='text-[20px] text-gray-500'></BsEyeFill><p className='text-[16px] text-gray-500'>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.node,
    details: PropTypes.string,
};

export default NewsCard;