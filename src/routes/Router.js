import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import CreateRecipePage from '../pages/CreateRecipePage/CreateRecipePage'
import DeatailsPage from '../pages/DetailsPage/DeatailsPage'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import SignupPage from '../pages/SignupPage/SignupPage'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="*"  element={<NotFoundPage />} />
        <Route path="/"  element={<HomePage />} />
        <Route path="/signup"  element={<SignupPage />} />
        <Route path="/login"  element={<LoginPage />} />
        <Route path="/recipe/:recipeId"  element={<DeatailsPage />} />
        <Route path="/recipe/new"  element={<CreateRecipePage />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default Router