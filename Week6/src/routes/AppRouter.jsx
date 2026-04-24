import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import AuthTokenPage from '../pages/exercises/AuthTokenPage'
import CartPage from '../pages/exercises/CartPage'
import CounterGlobalPage from '../pages/exercises/CounterGlobalPage'
import FetchUsersPage from '../pages/exercises/FetchUsersPage'
import MiniAppPage from '../pages/exercises/MiniAppPage'
import MockAuthPage from '../pages/exercises/MockAuthPage'
import NotificationPage from '../pages/exercises/NotificationPage'
import SearchDebouncePage from '../pages/exercises/SearchDebouncePage'
import ThemeTogglePage from '../pages/exercises/ThemeTogglePage'
import TodoGlobalPage from '../pages/exercises/TodoGlobalPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="bai-1" element={<CounterGlobalPage />} />
          <Route path="bai-2" element={<ThemeTogglePage />} />
          <Route path="bai-3" element={<MockAuthPage />} />
          <Route path="bai-4" element={<TodoGlobalPage />} />
          <Route path="bai-5" element={<CartPage />} />
          <Route path="bai-6" element={<NotificationPage />} />
          <Route path="bai-7" element={<FetchUsersPage />} />
          <Route path="bai-8" element={<SearchDebouncePage />} />
          <Route path="bai-9" element={<AuthTokenPage />} />
          <Route path="bai-10" element={<MiniAppPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
