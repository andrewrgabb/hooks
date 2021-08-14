//import { Property } from "../../../services/api/property/property-types";

interface PropertyFiltersProps {
  searchTerm: string;
  setSearchTerm: (newSearchTerm: string) => void;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = (props) => {
  const { searchTerm, setSearchTerm } = props;

  return (
    <div className="flex items-center my-4">
      Search by Title:
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="ml-4 px-2 py-1 border-2 min-h-full w-20 "
      ></input>
    </div>
  );
};

export default PropertyFilters;
