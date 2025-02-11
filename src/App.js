"use client"

import { useState } from "react"
import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Sidebar from "./components/sidebar"

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/main.css"
import Dashboard from "./pages/Dashboard"


function App() {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="App">
      <Header />
      <div className="d-flex">
        <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
        <main className={`content ${isExpanded ? "expanded" : "collapsed"}`}>
          <Container fluid>
         <Dashboard/>
          </Container>
        </main>
      </div>
    </div>
  )
}

export default App

