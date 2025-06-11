//From L7
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes"
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";
import { CommentProvider } from "./context/comment/context";

const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
    <CommentProvider>
      <ProjectsProvider>
        <MembersProvider>
          <RouterProvider router={router} />
        </MembersProvider>
      </ProjectsProvider>
    </CommentProvider>
    </div>
  )
}
export default App;



//TILL L6

// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import TaskForm from "./TaskForm";
// // import TaskList from './TaskList'
// // import TaskApp from "./TaskApp";
// import './App.css'
// import {
//   createBrowserRouter,
//   // Navigate,
//   RouterProvider,
// } from "react-router-dom";
// // import ProtectedRoute from "./ProtectedRoute";
// // import Layout from "./Layout";
// import Notfound from "./pages/Notfound";
// // import ReactPlayground from './ReactPlayground';
// // import Form from './Form';
// import Signup from './pages/signup';
// import Signin from './pages/signin';
// import Dashboard from "./pages/dashboard";
// import ProtectedRoute from "./ProtectedRoute";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Signup />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/signin",
//     element: <Signin />,
//   },
//   {
//     path: "/notfound",
//     element: <Notfound />,
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <ProtectedRoute>
//         <Dashboard />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "*",
//     element: <Notfound />,
//   }
// ]);

// const App = () => {
//   return (
//     <>
//       {/* <Form /> */}
//       <RouterProvider router={router} />
//     </>
//   );
// };

// export default App;

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vitejs.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

