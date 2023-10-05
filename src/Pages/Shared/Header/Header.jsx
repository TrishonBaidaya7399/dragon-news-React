// import PropTypes from 'prop-types';
import logo from "../../../assets/images/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className="text-center">
            <img src={logo} alt="" className="mx-auto pb-[20px]"/>
            <p className="text-xl font-normal text-gray-500 pb-[10px]">Journalism Without Fear or Favour</p>
            <p className="text-xl font-normal text-gray-500">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;