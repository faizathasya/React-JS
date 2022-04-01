/** import semua pages yang akan kita tampilkan */
import Balok from "./pages/Balok"
import Books from "./pages/Books"
import JualTahu from "./pages/JualTahu"
import Student from "./pages/Student"
import School from "./pages/School"

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar"

export default function App() {
  return(
    <BrowserRouter basename="/reactku">
    {/** BrowserRouter adalah element yang digunakan untuk menggatur tampilan pada halaman web berdasarkan path atau URL yang ditentukan oleh user */}
    <Navbar />
      <Routes>
        {/** Routes -> grouping path path atau URL yang didefinisikan */}
        {/** Route -> pendefinisiannya */}
        <Route path ="/balok" element={<Balok />}/>
        <Route path ="/books" element={<Books />}/>
        <Route path ="/jualtahu" element={<JualTahu />}/>
        <Route path ="/student" element={<Student />}/>
        <Route path ="/school" element={<School />}/>
      </Routes>
    </BrowserRouter>
  )
}