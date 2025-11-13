import { useState } from 'react'
import Header from './components/Header.jsx'
import Table from './components/Table.jsx'

function App() {

    return (
        <div>
            <Header />
        <main className='main'>
            <section className="card users-container">
                <Table />
                
                <button className="btn-add btn">Add new user</button>
            </section>
        </main>
    </div>)
}

export default App
