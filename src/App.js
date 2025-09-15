import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import About from './pages/About';
import Missing from './pages/Missing';
import NewPost from './pages/NewPost';
import RootLayout from './layout/RootLayout';
import "./styles/global.css";
import Post from './pages/Post';
import { Loader } from './components/Loader';

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      < Route path="/" element={<RootLayout />} >
        <Route index element={<Home />} loader={Loader} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<NewPost />} loader={Loader} />
        <Route path="/post/:id" element={<PostPage />} loader={Loader} >
        <Route index element={<Post />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Route>
  ))
  return (
    <RouterProvider router={router} />
  );
}

export default App;
