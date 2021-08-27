import React, { useState, useEffect } from "react";
import BrandInput from "../BrandInput";
import HomePageCard from "../HomePageCard";
import BrandOption from "../BrandOption";
import BrandNavbar from "../BrandNavbar";
import { isDarkMode } from "../utils/darkModeFunction";

const HomePage = () => {
  const [isDark, setIsDark] = useState(isDarkMode());

  useEffect(() => {
    localStorage.setItem("isDark", false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-gray-veryLightGrayLMB dark:bg-blue-veryDarkDMB min-h-screen">
        <BrandNavbar dark={(value) => setIsDark(value)} />

        <div className="block justify-between lg:flex ">
          <div>
            <BrandInput />
          </div>
          <div>
            <BrandOption />
          </div>
        </div>
        <div>
          <HomePageCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
