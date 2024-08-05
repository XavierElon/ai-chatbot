import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import DashboardPage from './routes/dashboardPage/DashboardPage'
import Homepage from './routes/homepage/Homepage'
import ChatPage from './routes/chatPage/Chatpage'
import SignInPage from './routes/signInPage/SignInPage'
import SignUpPage from './routes/signUpPage/SignUpPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/dashboard',
    
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/dashboard/chats/:id', element: <ChatPage /> }
    ]
  },
  {

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
