interface Props {
    type: string;
    className?: string;
    placeholder?: string;
}

const Input = ({type, className, placeholder, ...data}: Props) => {
  return (
    <>
    <input 
    type={type} 
    placeholder={placeholder}
    {...data}
    className= {`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-white ${className}`} />
    </>
  )
}

export default Input