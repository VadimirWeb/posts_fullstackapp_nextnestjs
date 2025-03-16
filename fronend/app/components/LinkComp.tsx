interface LinksProps {
    title: string;
    link: string
  }
  
export const LinksComp: React.FC<LinksProps> = ({ title, link }) => {
    return (
      <a href={link} className="px-2 hover:text-gray-800">{title}</a>
    );
  };