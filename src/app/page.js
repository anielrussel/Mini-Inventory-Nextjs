"use client";

import OverviewCard from "./components/OverviewCard";

import { MdOutlineBookmarkAdded } from "react-icons/md";
import InventoryTable from "./components/InventoryTable";
import TopNavigation from "./components/TopNavigation";

const overviews = [
  {
    icon: (
      <MdOutlineBookmarkAdded
        size={25}
        color="green"
        className="border border-green-500 p-1 rounded-md"
      />
    ),
    title: "New inventory added",
    quantity: <p className="text-green-500">12,234</p>,
    tag: "",
  },
  {
    icon: (
      <MdOutlineBookmarkAdded
        size={25}
        color="blue"
        className="border border-blue-500 p-1 rounded-md"
      />
    ),
    title: "Updated items",
    quantity: <p className="text-blue-500">12,234</p>,
    tag: "",
  },
  {
    icon: (
      <MdOutlineBookmarkAdded
        size={25}
        color="red"
        className="border border-red-500 p-1 rounded-md"
      />
    ),
    title: "Deleted items",
    quantity: <p className="text-red-500">12,234</p>,
    tag: "",
  },
];

export default function Home() {
  return (
    <main className="mt-10">
      <TopNavigation />
      <div>
        <h1 className="text-gray-900 font-semibold text-2xl">
          INVENTORIES MANAGEMENT
        </h1>
        <section className="flex gap-5 mt-5">
          {overviews.map((overview) => (
            <OverviewCard
              key={overview.title}
              icon={overview.icon}
              title={overview.title}
              quantity={overview.quantity}
            />
          ))}
        </section>
      </div>
      <div className="mt-5">
        <h1>INVENTORY UPDATES</h1>
        <InventoryTable />
      </div>
    </main>
  );
}
