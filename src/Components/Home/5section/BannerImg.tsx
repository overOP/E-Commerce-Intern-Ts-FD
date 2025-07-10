interface Props {
  img?: string;
}

const BannerImg = ({ img }: Props) => {
  return (
    <img className="w-full max-w-[720px] object-cover" src={img} alt="Banner" />
  );
};

export default BannerImg;
