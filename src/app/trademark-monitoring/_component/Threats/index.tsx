import React from "react";
import Card from "./Card";

interface IndexProps {
  // define props here
  title?: string;
  description?: string;
  content?: { avatar?: any; title: string; description: string }[];
}

const Threats: React.FC<IndexProps> = ({ title, description, content }) => {
  return (
    <div className="flex flex-col items-center justify-center  w-full">
      <div className="flex  items-center flex-col md:w-[90%] w-full p-6 md:p-10  border-b-[1px] border-dotted">
        <h4 className="text-[20px] md:text-[30px] font-semibold text-center">
          {title}
        </h4>
        <p className="md:w-[85%] w-full text-center text-[13px] md:text-[16px]   text-gray-700">
          {description}
        </p>
        <section className="px-4 md:px-16 mt-8 space-y-10">
          {/* First row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {content?.slice(0, 3).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>

          {/* Second row: 2 cards centered */}
          <div className="flex flex-col md:flex-row justify-center gap-10">
            {content?.slice(3).map((item, index) => (
              <Card key={index + 3} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Threats;
