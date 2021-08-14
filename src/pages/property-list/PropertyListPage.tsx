import LinkButton from "../../components/LinkButton";
import Title from "../../components/Title";
import useProperties from "../../services/hooks/property/useProperties";
import PropertyFilters from "./components/PropertyFilters";
import PropertyList from "./components/PropertyList";

const PropertyListPage: React.FC = () => {
  const {
    properties,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    numProperties,
    numFilteredProperties,
  } = useProperties();

  if (loading && !properties && !error) {
    return (
      <div className="flex flex-col justify-start items-center">loading...</div>
    );
  }

  const renderPropertyFilters = (
    <PropertyFilters searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  );

  const renderPropertyList = properties ? (
    <PropertyList properties={properties} />
  ) : null;

  const renderPropertyCount = properties ? (
    <div>
      Showing {numFilteredProperties} of {numProperties} properties.
    </div>
  ) : null;

  return (
    <div className="flex flex-col justify-start items-center">
      <Title title={"Property List"} />
      <LinkButton title={"Back"} to={"/"} />
      {renderPropertyFilters}
      {renderPropertyList}
      {renderPropertyCount}
    </div>
  );
};

export default PropertyListPage;
