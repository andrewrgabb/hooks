import LinkButton from "../../components/LinkButton";
import Title from "../../components/Title";
import { fetchProperties } from "../../services/api/property/property-fetch";
import PropertyList from "./components/PropertyList";

const PropertyListPage: React.FC = () => {
  const properties = fetchProperties();

  return (
    <div className="flex flex-col justify-start items-center">
      <Title title={"Property List!"} />
      <LinkButton title={"Back"} to={"/"} />
      <PropertyList properties={properties} />
    </div>
  );
};

export default PropertyListPage;
