import { Property } from "../../../services/api/property/property-types";
import PropertyItem from "./PropertyItem";

interface PropertyListProps {
  properties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = (props) => {
  const { properties } = props;

  return (
    <div className="py-4">
      {properties.map((property: Property) => (
        <PropertyItem property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
