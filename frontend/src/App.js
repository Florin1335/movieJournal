import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import AdvancedSearchPage from "./pages/AdvancedSearchPage/AdvancedSearchPage";
import MoviePage from "./pages/MoviePage/MoviePage.js";
import AuthLoading from "./components/AuthLoading";
import ProtectedRoute from "./components/ProtectedRoute";
import UserInfo from "./pages/UserPanel/UserInfo";
import UserWishlist from "./pages/UserPanel/UserWishlist";
import UserHistory from "./pages/UserPanel/UserHistory";
import LandingAnimation from "./LandingAnimation";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <Router>
      <LandingAnimation></LandingAnimation>
      {localStorage.getItem("auth-token") && <AuthLoading></AuthLoading>}
      <Header></Header>
      <main className="mt-4 mt-sm-5 p-0">
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route path="/search/:query">
            <MoviePage></MoviePage>
          </Route>
          <Route path="/advanced_search">
            <AdvancedSearchPage></AdvancedSearchPage>
          </Route>
          <ProtectedRoute path="/user_info">
            <UserInfo></UserInfo>
          </ProtectedRoute>
          <ProtectedRoute path="/user_wishlist">
            <UserWishlist></UserWishlist>
          </ProtectedRoute>
          <ProtectedRoute path="/user_history">
            <UserHistory></UserHistory>
          </ProtectedRoute>
        </Switch>
        <ScrollToTopButton></ScrollToTopButton>
      </main>
    </Router>
  );
}

export default App;
