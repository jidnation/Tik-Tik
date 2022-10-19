import React from "react";
import { footerList1, footerList2, footerList3 } from "../utils/contacts";

export const Footer = () => {
  const List = ({ items , mt}: { items: string[], mt: boolean }) => (
    <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'} `}>
      {items.map((item: string) => (
        <p
          key={item}
          className="text-gray-400 text-sm hover:underline cursor-pointer"
        >
          {item}
        </p>
      ))}
    </div>
  );
  return (
    <>
      <div className="mt-6 hidden xl:block">
        <List items={footerList1} mt={false}/>
        <List items={footerList2} mt />
        <List items={footerList3} mt />
        <p className="text-gray-400 text-sm mt-5 flex font-semibold">
            2022 JidNation TikTik
        </p>
      </div>
    </>
  );
};
