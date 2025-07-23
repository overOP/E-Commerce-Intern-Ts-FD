// Body.tsx
interface Props {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  }
  
  const Body = ({h1, h2, h3, h4, p1, p2, p3, p4}: Props) => {
    return (
      <div className="w-[707px] h-[310px]">
        <div className="w-[310px] h-[30px]">
          <h3 className="w-[160px] h-[22px] flex items-center justify-between text-[16px] font-[500] text-[#000000]">
            {h1}{h2}{h3}{h4}
          </h3>
          <p className="w-[707px] h-[70px] flex items-center justify-between text-[14px] font-[400] text-[#000000]">
            {p1}{p2}{p3}{p4}
          </p>
        </div>
      </div>
    );
  };
  
  export default Body;