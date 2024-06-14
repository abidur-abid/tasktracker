import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './authentication/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster toastOptions={{
        style: {
          background: '#1E4682',
          color: '#FF9EAA'
        }
      }}/>
  </React.StrictMode>,
)
