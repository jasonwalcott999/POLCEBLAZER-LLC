import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import './App.css'
import './logo.css'
import './theme.css'
import './real-images.css'
import './band-images.css'
import './team.css'

const Pages = lazy(() => import('./pages'))

export default function App() {
  return <BrowserRouter><Layout><Suspense fallback={<div className="loading">Loading page…</div>}><Routes><Route path="*" element={<Pages />} /></Routes></Suspense></Layout></BrowserRouter>
}
