import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { topics } from "../utils/contacts";

export const Discover = () => {
  const topicStyles =
    "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black";
  const activeTopicStyle =
    "xl:border-2 hover:bg-primary xl:border-[#f51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#f51997]";
  const fromJidNation =
    "flex flex-col items-center cursor-pointer hover:bg-[#f51997] p-2 rounded ";

  const router = useRouter();
  const { topic } = router.query;

  return (
    <>
      <div className="xl:border-b-2 xl:border-gray-200 pb-6">
        <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">
          Popular Topics
        </p>
        <div className="flex gap-3 flex-wrap">
          {topics.map((item) => (
            <Link href={`/?topic=${item.name}`} key={item.name}>
              <div
                className={topic === item.name ? activeTopicStyle : topicStyles}
              >
                <span className="font-bold text-2xl xl:text-md">
                  {item.icon}
                </span>
                <span className="font-medium text-md hidden xl:block capitalize">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
