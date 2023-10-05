// import PropTypes from 'prop-types';
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex bg-gray-200 p-4 my-8">
            <button className="btn text-white px-6 py-2 mr-[20px] rounded-none bg-[#D72050]">Latest</button>
            <Marquee speed={100} pauseOnHover={true}>
                <Link className="ml-8" to="/">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, iusto</Link>
                <Link className="ml-8" to="/">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, iusto</Link>
                <Link className="ml-8" to="/">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, iusto</Link>
                <Link className="ml-8" to="/">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, iusto</Link>
                <Link className="ml-8" to="/">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, iusto</Link>
            </Marquee>
        </div>
    );
};

BreakingNews.propTypes = {
    
};

export default BreakingNews;