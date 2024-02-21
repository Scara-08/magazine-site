import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Posts, Users, Main, Products } from './Pages'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Main />} path="/">
                    <Route element={<Home />} path="/" />
                    <Route element={<Posts />} path="/posts" />
                    <Route element={<Users />} path="/users" />
                    <Route element={<Products />} path="/products" />
                </Route>
            </Routes>
        </Router>
    )
}

export default App