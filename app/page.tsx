import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Unleash the power of <span className="text-red">PriceWise</span>
            </h1>
            <p className="mt-6">
              Powerfull self-serve product and growth analytics to help you
              convert, engage, and retain more
            </p>
            <SearchBar />
          </div>
          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-6 gap-y-16">
          {["apple Iphone 15", "Book", "Sneakers"].map((item) => (
            <div>{item}</div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
