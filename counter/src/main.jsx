import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tailwind from './units/Tailwind.jsx'


createRoot(document.getElementById('root')).render(
    <Tailwind/>
)
