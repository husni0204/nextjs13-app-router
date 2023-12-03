"use client"

import { useState } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState(0)
    return (
        <div>
            <h3>Template {state}</h3>
            <button onClick={() => setState(state + 1)}>Klik</button>
            {children}
        </div>
    )
}