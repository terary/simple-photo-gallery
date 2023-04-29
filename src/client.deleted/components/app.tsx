// client/components/app.tsx
import React from 'react'
import { Picture } from './Picture'
 
export const App: React.FC = () => {

    return (
        <div>
            <p>Hello from Client</p>
            <Picture />
        </div>

    )
}