import NavBar from './components/NavBar'
import Form from './components/Form'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <NavBar />
      <main className="mx-auto flex max-w-5xl justify-center align-center">
        <Form />
      </main>
    </div>
  )
}

export default App
