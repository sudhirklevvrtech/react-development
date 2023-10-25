import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
     <h1 className="text-emerald-700 text-3xl bg-gray-300 py-5 px-3">Welcome to react with tailwind css class</h1>
    <div className="flex w-screen justify-center align-middle">
      <Card image={"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"} heading={"About Macbook"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"} />
      <Card image={"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"} heading={"Best Mackbook Ipad"} description={"lorem ipsum dolor site amet consecterutre adipsion elt. exceprtui, deviti dsfjds"} />
    </div>
    
    </>
  )
}

export default App
