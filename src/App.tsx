import React from 'react'
import GhostLogo from 'url:./public/images/logos/logo_ghost.svg'

export function App() {
  return (
    <div>
      <h1 className="pTitle">
        <img src={GhostLogo} alt="React Logo" />
        Phasmophobia
      </h1>
    </div>
  )
}
