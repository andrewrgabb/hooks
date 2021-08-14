import { Link } from "react-router-dom";

interface LinkButtonProps {
  title: string;
  to: string;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const { title, to } = props;

  return (
    <Link to={to}>
      <button className="border-2 p-2 rounded-md">{title}</button>
    </Link>
  );
};

export default LinkButton;
