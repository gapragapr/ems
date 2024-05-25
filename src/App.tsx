import { Header } from "./components/widgets/Header"
import { Main } from "./components/widgets/Main/Main"

function App() {

  return (
    <div className="bg-slate-900 flex justify-center py-6 max-w-screen">
      <div className="w-[1440px]">
        <Header/>
        <Main />
      </div>
    </div>
  )
}

export default App
