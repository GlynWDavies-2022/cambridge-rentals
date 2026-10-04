import './Property.css';

import PropertyImage from './PropertyImage/PropertyImage';

const Property = ({ type, image, bedrooms, bathrooms, surface, address, rent, date, available }) => {
    return (
        <div className='property-card'>
            <PropertyImage image={image}>Property Details</PropertyImage>
            <div>Property Attributes</div>
        </div>
    );
};

export default Property;
