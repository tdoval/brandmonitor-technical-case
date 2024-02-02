import { useState } from 'react'
import SearchForm from './components/SearchForm'
import Notification from './components/Notification'

import './App.css'

function App() {

  const [notification, setNotification] = useState({ isVisible: false, type: true, message: "" })

  const { isVisible, message, type } = notification;

  return (
    <>
      <div>
        <a href="https://www.brandmonitor.com.br/" target="_blank">
          <img src={'https://assets-global.website-files.com/605b962d5e846a3de31701a8/6495de9d500d8383c085a8fb_brandmonitor-logo-dark.svg'} className="logo" alt="BrandMonitor logo" />
        </a>
      </div>
      <h1>Simulador de Pesquisas Google</h1>
      {isVisible && <Notification message={message} type={type} />}
      <div className="card">
        <SearchForm notification={notification} setNotification={setNotification} />
      </div>
      <p className="read-the-docs">
        Case Técnico BrandMonitor 2024
      </p>
    </>
  )
}

export default App
