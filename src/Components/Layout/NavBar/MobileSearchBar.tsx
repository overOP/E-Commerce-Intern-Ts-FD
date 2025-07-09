interface Props {
  value: string;
  onChange: (v: string) => void;
}

const MobileSearchBar = ({ value, onChange }: Props) => (
  <div className="lg:hidden py-3 px-6 border-t">
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search..."
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
      autoFocus
    />
  </div>
);

export default MobileSearchBar;
