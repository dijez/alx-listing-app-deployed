import { PropertyProps } from "@/interfaces"



const PropertyCard: React.FC<{property: PropertyProps}> = ({property}) => {

    return(
        <main>

        <div>
        <h1>{property.name}</h1>
        <h2>{property.rating}</h2>
        <h2>{property.address.country}</h2>
        </div>

        <div>
         <img src={property.image} alt="property image"></img>
        </div>

        <div>
            <h2>
                Descriptions
            </h2>
            <p>{property.offers.occupants}</p>
            <p>{property.offers.bed}</p>
        </div>

        <div>
            <p>
                what this place offers 
            </p>
            <ul>
                {property.category}
            </ul>
        </div>
        </main>
    )
}

export default PropertyCard;