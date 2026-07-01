import Sidebar from './components/Sidebar'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
