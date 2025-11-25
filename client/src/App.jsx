import { useState } from 'react'
import Header from './components/Header.jsx'
import Userlist from './components/UserList.jsx'
import Pagination from './components/Pagination.jsx'
import Footer from './components/Footer.jsx'
import Search from './components/Search.jsx'
import CreateUserModal from './components/createUserModal.jsx'

function App() {
    const [showCreateUser, setShowCreateUser] = useState(false);
    
    const createUserClickHandler =() => {
        setShowCreateUser(true)
    }

    const closeUserModalHandler = () => {
        setShowCreateUser(false)
    }
    return (
        <div>
            <Header />

            <main className='main'>
                <section className="card users-container">
                    <Search />

                    <Userlist />

                    <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>

                    <Pagination />
                </section>
                
                {showCreateUser && <CreateUserModal onClose={closeUserModalHandler}/>}
            </main>

            <Footer />
        </div>
    )
}

export default App
