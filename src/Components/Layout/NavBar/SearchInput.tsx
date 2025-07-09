interface Props {
  value: string;
  onChange: (v: string) => void;
}

const SearchInput = ({ value, onChange }: Props) => (
  <div className="absolute lg:right-[18rem] hidden lg:flex">
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search..."
      className="px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 w-40 transition-all duration-300"
    />
  </div>
);

export default SearchInput;
