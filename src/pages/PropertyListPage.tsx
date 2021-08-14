import LinkButton from "../components/LinkButton";
import Title from "../components/Title";

const PropertyListPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <Title title={"Property List!"} />
      <LinkButton title={"Back"} to={"/"} />
    </div>
  );
};

export default PropertyListPage;
