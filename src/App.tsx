import AppHeader from "./components/Header"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <div className="text-salic dark:text-white min-h-svh">
      <header>
        <AppHeader />
      </header>
      <main className="container mx-auto my-8 px-4 lg:px-8">
        <Dashboard />
        <br /><br /><br />
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default App
