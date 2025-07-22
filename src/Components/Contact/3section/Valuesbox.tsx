interface Props {
  logo: string;
  title: string;
  paragraph: string;
}

const ValuesBox = ({ logo, title, paragraph }: Props) => {
  return (
    <div className="w-full max-w-xs bg-[#F3F5F7] p-6 rounded-lg mx-auto flex flex-col  justify-start gap-4">
      <img src={logo} alt={title} className="w-12 h-12 object-contain" />
      <div className="flex flex-col gap-2">
        <h2 className="Poppins text-h7">{title}</h2>
        <p className="Poppins text-twxt7 text-gray-600">{paragraph}</p>
      </div>
    </div>
  );
};

export default ValuesBox;
