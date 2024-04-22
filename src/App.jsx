import Navbar from './copmonents/Navbar'
import Manager from './copmonents/Manager'
import Footer from './copmonents/Footer'
function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-[82vh] bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
        <Manager />
      </div>
      <Footer />
    </>
  )
}

export default App
