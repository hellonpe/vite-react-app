import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./layout/Home";
import Blogs from "./layout/Blogs";
import Contact from "./layout/Contatc";
import NoPage from "./layout/NoPage";
import { FunctionComponent } from "react";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="*" element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;