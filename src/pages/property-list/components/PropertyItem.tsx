import { Property } from "../../../services/api/property/property-types";

interface PropertyItemProps {
  property: Property;
}

const PropertyItem: React.FC<PropertyItemProps> = (props) => {
  const { title, price, numBedrooms, hasDriveway } = props.property;

  return (
    <div className="flex px-2 mb-4 border-2 justify-between items-center w-full h-20">
      <div className="px-2">Title: {title},</div>
      <div className="px-2">Price: ${price},</div>
      <div className="px-2">Number of Bedrooms: {numBedrooms},</div>
      <div className="px-2">Has a driveway: {hasDriveway ? "Yes" : "No"}</div>
    </div>
  );
};

export default PropertyItem;
