import { useEffect, useState } from 'react';
import './IpTracker.css'
import arrowIcon from './images/icon-arrow.svg'
import IpInformationComponent from './IpInformationComponent';


function IpTracker() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 800);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`ip-tracker-container`}>
            <label for="ipTracker">Ip Address Tracker:</label>
            <form className='ip-input-container'>
                <input className='ip-text-input' type="text" id="ipTracker" name="ipTracker" placeholder='Search for any IP address or domain'></input>
                <div className='arrowIcon-container'>
                    <img className='arrowIcon' src={arrowIcon} alt="arrow icon"></img>
                </div>
            </form>

            <div className='ip-information-container'>
                <IpInformationComponent title={"IP Adress"} value={"test"}></IpInformationComponent>
                <IpInformationComponent title={"Location"} value={"test"}></IpInformationComponent>
                <IpInformationComponent title={"Timezone"} value={"test"}></IpInformationComponent>
                <IpInformationComponent title={"ISP"} value={"test"}></IpInformationComponent>
            </div>
        </div>
    );
}

export default IpTracker