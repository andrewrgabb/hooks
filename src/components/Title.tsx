interface LinkButtonProps {
  title: string;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const { title } = props;

  return <h1 className="text-xl font-bold mb-10">{title}</h1>;
};

export default LinkButton;
