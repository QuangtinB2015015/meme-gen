import { Link } from "react-router-dom"




function App() {

  return (
  <>
   <div className={`flex items-center justify-between px-4 py-2 bg-green`}>
      <h1 className="text-white text-2xl font-bold bg-red">MemeGen</h1>
      <nav className="flex space-x-4">
        <p to="/" className="text-orange hover:text-gray-200">Home</p>
        <p to="/about" className="text-red hover:text-gray-200">About</p>
        <p to="/contact" className="text-yellow hover:text-gray-200">Contact</p>
      </nav>
    </div>
    
  </>
  )
}

export default App
