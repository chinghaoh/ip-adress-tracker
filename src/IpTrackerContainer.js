import { useEffect, useState } from 'react';
import './IpTracker.css'
import arrowIcon from './images/icon-arrow.svg'
import IpInformationComponent from './IpInformationComponent';




function IpTracker({ onResponseData }) {
    const apiKey = process.env.REACT_APP_GEO_IPIFY_KEY;

    const [isMobile, setIsMobile] = useState(false);

    const [ipAdress, setIpAdress] = useState()
    const [location, setLocation] = useState()
    const [timezone, setTimezone] = useState()
    const [isp, setIsp] = useState()

    const [ipAddress, setIpAddress] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                onResponseData(data)
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };
        fetchData();
    }, []);

    // Handle screensize
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 800);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function getIpInformation() {

        const inputElement = document.querySelector('.ip-text-input');
        const inputValue = inputElement.value;

        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${inputValue}`)
            .then(response => {
                // Check if response is successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse response JSON
                return response.json();
            })
            .then(data => {
                // Set response data in state
                onResponseData(data)
                setIpAdress(inputValue)
                setLocation(data.location.region + "\n" + data.location.city)
                setTimezone("UTC" + data.location.timezone)
                setIsp(data.isp)
            })
            .catch(error => {
                // Handle errors
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    return (
        <div className={`ip-tracker-container`}>
            <label for="ipTracker">Ip Address Tracker:</label>
            <form className='ip-input-container'>
                <input className='ip-text-input' type="text" id="ipTracker" name="ipTracker" placeholder='Search for any IP address or domain'></input>
                <div className='arrowIcon-container' onClick={getIpInformation}>
                    <img className='arrowIcon' src={arrowIcon} alt="arrow icon"></img>
                </div>
            </form>
            <div className='ip-information-container'>
                <IpInformationComponent title={"IP Adress"} value={ipAdress}></IpInformationComponent>
                <IpInformationComponent title={"Location"} value={location}></IpInformationComponent>
                <IpInformationComponent title={"Timezone"} value={timezone}></IpInformationComponent>
                <IpInformationComponent title={"ISP"} value={isp}></IpInformationComponent>
            </div>
        </div>
    );
}

export default IpTracker