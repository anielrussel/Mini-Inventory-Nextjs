import React from "react";

const OverviewCard = ({ icon, title, quantity, tag }) => {
  return (
    <div className="w-[300px] border-2 border-gray-500 rounded-md px-5 py-3">
      <section className="flex flex-col gap-4">
        {icon}
        <h1 className="text-sm font-semibold">{title}</h1>
        <span>
          <h1 className="text-3xl font-semibold">{quantity}</h1>
          <p>{tag}</p>
        </span>
      </section>
    </div>
  );
};

export default OverviewCard;
