import LinkButton from "../components/LinkButton";
import Title from "../components/Title";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <Title title={"Welcome to the home page!"} />
      <div>
        View properties here:{" "}
        <LinkButton title={"View"} to={"/property-list"} />
      </div>
    </div>
  );
};

export default HomePage;
