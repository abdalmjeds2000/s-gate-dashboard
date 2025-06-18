import Footer from "./components/Footer"
import AppHeader from "./components/Header"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <div className="text-salic dark:text-white min-h-svh">
      <AppHeader />

      <Dashboard />

      <Footer />
    </div>
  )
}

export default App
