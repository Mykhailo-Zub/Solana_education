import "./App.css";
import "./main.css";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router";
import TheSidebar from "./components/TheSidebar";

function App() {
  const location = useLocation();
  const header = location.pathname === "/" ? "Home" : location.pathname.split("/")[1][0].toUpperCase() + location.pathname.split("/")[1].slice(1);
  return (
    <div className="w-full flex flex-row max-w-3xl lg:max-w-4xl mx-auto">
      <TheSidebar class="py-4 md:py-8 md:pl-4 md:pr-8 fixed w-20 md:w-64" />
      <main className="flex-1 border-r border-l ml-20 md:ml-10 min-h-screen">
        <header className="flex space-x-6 items-center justify-between px-8 py-4 border-b">
          <div className="text-xl font-bold">{header}</div>
        </header>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
