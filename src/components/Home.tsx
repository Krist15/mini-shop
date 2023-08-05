import womanShopping from '../assets/woman-shopping.png';

export default function Home() {
  return (
    <div className="h-screen w-full overflow-y-hidden">
      <img
        src={womanShopping}
        alt="Girls Shopping"
        className="object-contain"
      />
    </div>
  );
}
