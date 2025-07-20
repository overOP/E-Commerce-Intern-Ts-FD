import ProductMain from "./ProductMain";
import Header from "./Customer/Header";
import ReviewSummary from "./Customer/ReviewSummary";
import ReviewList from "./Customer/ReviewList";
import WriteReview from "./Customer/WriteReview";

const Shopnow = () => {
  return (
    <div className="flex flex-col gap-16 overflow-hidden">
        <ProductMain/>
        <div className="max-w-6xl mx-auto p-4 font-sans">
      <Header />
      <ReviewSummary />
      <WriteReview />
      <ReviewList />
    </div>
    </div>
  );
};

export default Shopnow;
