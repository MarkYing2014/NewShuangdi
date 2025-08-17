import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 p-8">
        <div className="max-w-container mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome to SRI Shuangdi
            </h1>
            <p className="text-lg text-gray-600">
              Your trusted partner in innovative solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
