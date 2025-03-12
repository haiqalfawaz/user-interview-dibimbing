import { usePathname } from "next/navigation";
import React from "react";

const TitlePage = () => {
  const pathname = usePathname();
  const getTitle = (path: string) => {
    switch (path) {
      case "/":
        return "Products";
      case "/man":
        return "Man";
      case "/woman":
        return "Women";
      case "/kids":
        return "Kids";
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold">{getTitle(pathname)}</h3>
    </div>
  );
};

export default TitlePage;
