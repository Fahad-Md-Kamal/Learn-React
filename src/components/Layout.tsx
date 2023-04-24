import { ReactNode } from "react";
import Navbar from "./navbar/Navbar";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <div className="flex flex-row">
        <div className="w-1/3 bg-gray-200 p-4"></div>
        <div className="w-2/3 bg-gray-100 p-4">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
