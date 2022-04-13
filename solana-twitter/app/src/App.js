import "./App.css";
import "./main.css";
import { useParams } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./components/PageHome";

function App() {
  const params = useParams();
  return (
    <BrowserRouter>
      <div className="w-full max-w-3xl lg:max-w-4xl mx-auto">
        {/* <the-sidebar class="py-4 md:py-8 md:pl-4 md:pr-8 fixed w-20 md:w-64"></the-sidebar> */}

        <main className="flex-1 border-r border-l ml-20 md:ml-64 min-h-screen">
          <header className="flex space-x-6 items-center justify-between px-8 py-4 border-b">
            <div className="text-xl font-bold">Header</div>
          </header>
          {/* <router-view></router-view> */}
          <Routes>
            <Route index path="/" element={<PageHome />}>
              {/* <Route path="/topics/:topic" element={<PageTopics />} />
              <Route path="/users/:author" element={<PageUsers />} />
              <Route path="/profile" element={<PageProfile />} />
              <Route path="/tweet/:tweet" element={<PageTweet />} />
              <Route path="*" element={<PageNotFound />} /> */}
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
