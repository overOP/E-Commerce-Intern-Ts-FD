import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const links = [
  {
    id: 0,
    title: "Account Details",
    url: "/account",
  },
  {
    id: 1,
    title: "Address",
    url: "/account/address",
  },
  {
    id: 2,
    title: "Orders",
    url: "/account/orders",
  },
  {
    id: 3,
    title: "Wishlist",
    url: "/account/wishlist",
  },
  {
    id: 4,
    title: "Log Out",
    url: "", 
    onClick: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userData");
  
      toast.info("Logging out...", {
        position: "top-right",
        autoClose: 1500,
        onClose: () => {
          window.location.href = "/signin";
        },
      });
    },
    onClickOnly: true,
  }
  
];

  

  export const addressData = [
    {
      id: 1,
      h: "Billing Address",
      title: "Sofia Havertz",
      phone: "(+1) 234 567 890",
      p2: "345 Long Island, NewYork, United States",
    },
    {
      id: 2,
      h: "Shipping Address",
      title: "Sofia Havertz",
      phone: "(+1) 234 567 890",
      p2: "345 Long Island, NewYork, United States",
    },
  ]


  interface Order {
    id: string;
    date: string;
    status: string;
    price: string;
  }

  export     const ordersData: Order[] = [
    {
      id: '#3456_768',
      date: 'October 17, 2023',
      status: 'Delivered',
      price: '$1234.00'
    },
    {
      id: '#3456_980',
      date: 'October 11, 2023',
      status: 'Delivered',
      price: '$345.00'
    },
    {
      id: '#3456_120',
      date: 'August 24, 2023',
      status: 'Delivered',
      price: '$2345.00'
    },
    {
      id: '#3456_030',
      date: 'August 12, 2023',
      status: 'Delivered',
      price: '$845.00'
    }
  ];
