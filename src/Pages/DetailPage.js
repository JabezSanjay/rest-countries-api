import React from "react";
import { useSelector } from "react-redux";
import BrandButton from "../components/BrandButton";
import BrandNavbar from "../components/BrandNavbar";
import DetailPageCard from "../components/DetailPageCard";

const DetailPage = () => {
  const isDark = useSelector((state) => state.isDark);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-gray-veryLightGrayLMB dark:bg-blue-veryDarkDMB ">
        <BrandNavbar />
      </div>
      <div className="m-14">
        <BrandButton />
      </div>
      <div>
        <DetailPageCard />
      </div>
    </div>
  );
};

export default DetailPage;
