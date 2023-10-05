// import PropTypes from 'prop-types';

import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins">
            <Outlet>
                
            </Outlet>
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;