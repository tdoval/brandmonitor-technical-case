import SearchForm from './SearchForm'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://www.brandmonitor.com.br/" target="_blank">
          <img src={'https://assets-global.website-files.com/605b962d5e846a3de31701a8/6495de9d500d8383c085a8fb_brandmonitor-logo-dark.svg'} className="logo" alt="BrandMonitor logo" />
        </a>
      </div>
      <h1>Simulador de Pesquisas Google</h1>
      <div className="card">
        <SearchForm />
      </div>
      <p className="read-the-docs">
        Case Técnico BrandMonitor 2024
      </p>
    </>
  )
}

export default App
