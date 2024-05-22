import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//importar createRouterDom
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

//import paginas
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'

/*vamos criar objeto de configuração de roteamento, nesse componente tera a 
responsabilidade de abrigar as paginas, ou seja um elemento que pode repetir
alguns recursos como barra de navegação e rodapé
*/

const router = createBrowserRouter([
  {
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/new',
        element:<NewPost></NewPost>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    
  </React.StrictMode>,
)
