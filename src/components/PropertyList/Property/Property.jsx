import './Property.css';

import { Bath, Bed, Maximize } from 'lucide-react';

import IconWithText from './PropertyImage/PropertyIcon/IconWithText';
import PropertyAttribute from './PropertyAttribute/PropertyAttribute';
import PropertyBanner from './PropertyImage/PropertyBanner/PropertyBanner';
import PropertyImage from './PropertyImage/PropertyImage';
import PropertyTypeLabel from './PropertyImage/PropertyTypeLabel/PropertyTypeLabel';

const Property = ({ type, image, bedrooms, bathrooms, surface, address, rent, date, available }) => {
    return (
        <div className='property-card' style={{ opacity: !available ? '0.5' : '1' }}>
            <PropertyImage image={image}>
                <PropertyTypeLabel type={type} />
                {!available && <PropertyBanner />}
                <div className='property-info'>
                    <IconWithText Icon={Bed} text={bedrooms} />
                    <IconWithText Icon={Bath} text={bathrooms} />
                    <IconWithText Icon={Maximize} text={surface} />
                </div>
            </PropertyImage>
            <PropertyAttribute text={address} />
            <PropertyAttribute text={`£${rent} / month`} color='#2CDEB6' bold />
            <PropertyAttribute text={`Available from: ${date}`} />
        </div>
    );
};

export default Property;
