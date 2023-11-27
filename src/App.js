import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const WithoutTransition = lazy(()=>import("./without-transition/app"));
const WithTransition = lazy(()=>import("./with-transition/app"));

const SearchWithoutTransition = lazy(()=>import("./serch-without-transition/app"));
const SearchWithTransition = lazy(()=>import("./serch-with-transition/app"));

const IndexPage = lazy(()=>import("./indexPage/app"));

function App() {
  return (<>
    <Suspense fallback={<p>Page is loading ...</p>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />

          <Route path="/without-transition" element={<WithoutTransition />} />
          <Route path="/with-transition" element={<WithTransition />} />

          <Route path="/search-with-transition" element={<SearchWithTransition />} />
          <Route path="/search-without-transition" element={<SearchWithoutTransition />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </>);
}

export default App;