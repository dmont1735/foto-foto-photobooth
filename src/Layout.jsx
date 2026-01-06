import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="app-layout">
      <Header
        isDarkMode={darkMode}
        onDarkMode={()=>setDarkMode(!darkMode)}
      />
      <main className="content">
        <Outlet />
      </main>
      <Footer isDarkMode={darkMode} />
    </div>
  );
}

export default Layout;
