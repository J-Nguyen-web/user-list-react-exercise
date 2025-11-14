import { useState } from 'react'
import Header from './components/Header.jsx'
import Userlist from './components/UserList.jsx'
import Pagination from './components/Pagination.jsx'
import Footer from './components/Footer.jsx'
import Search from './components/Search.jsx'

function App() {

    return (
        <div>
            <Header />

            <main className='main'>
                <section className="card users-container">
                    <Search />

                    <Userlist />

                    <Pagination />

                    <button className="btn-add btn">Add new user</button>

                </section>
            </main>

            <Footer />
        </div>
    )
}

export default App
