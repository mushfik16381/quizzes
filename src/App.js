
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Main from './Layout/Main';
import Questions from './components/Questions/Questions';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async() => {
           return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element: <Topics></Topics>,
          
        },
        {
          path: '/statistics',
          loader: async() => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
           },
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path:'/questions/:questionsId',
          loader: async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.questionsId}`)
          },
          element: <Questions></Questions>

        }
      ]
    },
    {path: '*', element: <div>This is not found</div>}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
