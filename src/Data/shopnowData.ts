import img1 from "../assets/shopnow/Living Room/a1.png";
import img2 from "../assets/shopnow/Living Room/a2.png";
import img3 from "../assets/shopnow/Living Room/a3.png";
import img4 from "../assets/shopnow/Living Room/a1.png";
import img5 from "../assets/shopnow/Living Room/1R.png";
import img6 from "../assets/shopnow/Living Room/1Bl.png";
import img7 from "../assets/shopnow/Living Room/1B.png";
import img8 from "../assets/shopnow/Bedroom/b1.png";
import img9 from "../assets/shopnow/Bedroom/b2.png";
import img10 from "../assets/shopnow/Bedroom/b3.png";
import img11 from "../assets/shopnow/Bedroom/b1.png";
import img12 from "../assets/shopnow/Bedroom/2R.png";
import img13 from "../assets/shopnow/Bedroom/2Bl.png";
import img14 from "../assets/shopnow/Bedroom/2B.png";
import img15 from "../assets/shopnow/Kitchen/c1.png";
import img16 from "../assets/shopnow/Kitchen/c2.png";
import img17 from "../assets/shopnow/Kitchen/c3.png";
import img18 from "../assets/shopnow/Kitchen/c1.png";
import img19 from "../assets/shopnow/Kitchen/3R.png";
import img20 from "../assets/shopnow/Kitchen/3Bl.png";
import img21 from "../assets/shopnow/Kitchen/3B.png";

export const Data = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Shop",
    url: "/shop",
  },
];

export const shopnowData = [
  {
    id: 1,
    image: [
      { id: 1, image: img1 },
      { id: 2, image: img2 },
      { id: 3, image: img3 },
    ],
    title: "Living Room",
    paragraph:
      "Discover our collection of stylish and comfortable living room furniture, perfect for creating a cozy and inviting space.",
    price: "$199.00",
    old: "$299.00",
    Measurements: "Length: 200cm, Width: 100cm, Height: 80cm",
    variant: [
      { id: 1, name: "white", imageaddress: img4 },
      { id: 2, name: "red", imageaddress: img5 },
      { id: 3, name: "blue", imageaddress: img6 },
      { id: 4, name: "black", imageaddress: img7 },
    ],
  },
  {
    id: 2,
    image: [
      { id: 1, image: img8 },
      { id: 2, image: img9 },
      { id: 3, image: img10 },
    ],
    title: "Bedroom",
    paragraph:
      "Discover our collection of stylish and comfortable bedroom furniture, perfect for creating a cozy and inviting space.",
    price: "$159.00",
    old: "$299.00",
    Measurements: "Length: 200cm, Width: 100cm, Height: 80cm",
    variant: [
      { id: 1, name: "white", imageaddress: img11 },
      { id: 2, name: "red", imageaddress: img12 },
      { id: 3, name: "blue", imageaddress: img13 },
      { id: 4, name: "black", imageaddress: img14 },
    ],
  },
  {
    id: 3,
    image: [
      { id: 1, image: img15 },
      { id: 2, image: img16 },
      { id: 3, image: img17 },
    ],
    title: "Kitchen",
    paragraph:
      "Discover our collection of stylish and comfortable kitchen furniture, perfect for creating a cozy and inviting space.",
    price: "$99.00",
    old: "$199.00",
    Measurements: "Length: 200cm, Width: 100cm, Height: 80cm",
    variant: [
      { id: 1, name: "white", imageaddress: img18 },
      { id: 2, name: "red", imageaddress: img19 },
      { id: 3, name: "blue", imageaddress: img20 },
      { id: 4, name: "black", imageaddress: img21 },
    ],
  },
];
