import React from "react";

interface IndexProps {
  // define props here
  title?: string;
  description?: string;
  heading?: string;
  content?: { title: string; description: string }[];
}

const SilentThrets: React.FC<IndexProps> = ({
  title,
  description,
  content,
  heading,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-5  md:py-10 w-full ">
      <h4 className="text-[30px] font-semibold  text-center">{title}</h4>
      <p className="text-[16px] text-center">{description}</p>
      <div className="bg-[#202F5A] w-full p-10  mt-6">
        {heading && (
          <h5 className="text-[20px] text-white text-center">{heading}</h5>
        )}
        <section className="flex flex-col md:flex-row justify-between py-10">
          {content?.map((item, index) => (
            <div
            key={index}
              className={`${
                content?.length - 1 !== index && `border-r-[1px]`
              } border-gray-600 space-y-1  text-white flex items-center justify-center flex-col`}
            >
              <h6 className="text-[18px] text-white font-semibold">
              {item.title}
              </h6>
              <p className="text-[14px] text-center px-10">
                {item.description}
              </p>
            </div>
          ))}
        </section>
      </div>
      <span className="border-b-[1px] border-dotted w-[90%] pt-16"> </span>
    </div>
  );
};

export default SilentThrets;
