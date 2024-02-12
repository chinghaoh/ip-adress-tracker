import "./IpInformation.css"

function IpInformationComponent({title, value}) {

    return (
        <div className="ip-information-section">
            <p>{title}</p>
            <p>{value}</p>
        </div>

    )
}

export default IpInformationComponent