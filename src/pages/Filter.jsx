import { useEffect, useState } from "react";
import { images, btns } from "../Data";

const Filter = () => {
  const [filterImages, setFilterImages] = useState(null);
  const [active, setActive] = useState(false);
  console.log(filterImages);

  useEffect(() => {
    setFilterImages(images);
  }, []);

  const handleClick = (e) => {
    const btnValue = e.target.value;
    setActive(btnValue);
    const newFilterImages = images.filter((item) => item.category === btnValue);
    if (btnValue === "all") {
      setFilterImages(images);
    } else {
      setFilterImages(newFilterImages);
    }
  };

  return (
    <div className="wrapper">
      {/* heading */}
      <h1 className="text-4xl text-center font-bold text-primary mb-10 mt-20">
        Nuestros trabajos<p className="text-2xl"></p>
      </h1>


      {/* button */}
      <div className="grid grid-cols-3 md:grid-cols-5 mb-10 gap-4 bg-third border-[3px] rounded-md ">
        {btns.map((item, id) => {
          const { name, value } = item;
          return (
            <button
              onClick={handleClick}
              key={id}
              value={value}
              className={`${
                active === value ? "bg-fourth" : ""
              } py-3 px-5 inline-block rounded-full border-[3px] transition-all duration-300 hover:bg-primary border-solid border-fourth text-sm  md:text-lg font-bold text-white`}
            >
              {name}
            </button>
          );
        })}
      </div>

      {/* images */}
      <div className="grid md:grid-cols-3 gap-5">
        {filterImages &&
          filterImages.map((item, id) => {
            const { img } = item;
            return (
              <div
                className="overflow-hidden border-4 border-solid border-green rounded-md group"
                key={id}
              >
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 rounded-md"
                  src={img}
                  alt="demo-img"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Filter;