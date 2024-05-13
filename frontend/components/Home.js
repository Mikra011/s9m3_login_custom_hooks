import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../hooks'

const BASE_URL = 'http://localhost:9009/acme/auth'

export default function Home() {
  const navigate = useNavigate()
  const { auth, checkAuth } = useAuth(() => navigate('/login'))

  const sensitiveStuff = async () => {
    await checkAuth()
    // doing sensitive stuff
  }
  if (!auth) {
    return (<div>Please wait...</div>)
  }
  return (
    <div className="screen">
      <h3>Home Page</h3>
      <button onClick={sensitiveStuff}>
        Interact with site...
      </button>
    </div>
  )
}
