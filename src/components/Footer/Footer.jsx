import './Footer.css';

import { Clock } from 'lucide-react';

const Footer = () => {
    const openingHour = 9;
    const closingHour = 17;
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay();
    const isWeekday = currentDay >= 1 && currentDay <= 5;
    const isOpen = isWeekday && currentHour >= openingHour && currentHour < closingHour;

    const openElement = (
        <>
            <div className='message'>
                <Clock className='icon' />
                <span className='status open'>We are open now!</span>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
                Call us at: <strong>(555) 123-4567</strong>
            </div>
        </>
    );

    const closedElement = (
        <>
            <div className='message'>
                <Clock className='icon' />
                <span className='status closed'>We are closed now.</span>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
                Opening hours: Monday to Friday, {openingHour}am to {closingHour}pm.
            </div>
        </>
    );

    return <footer className='footer'>{isOpen ? openElement : closedElement}</footer>;
};

export default Footer;
