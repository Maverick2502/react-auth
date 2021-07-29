import React, { Suspense, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

const UserProfile = React.lazy(() =>
  import("./components/Profile/UserProfile")
);

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Suspense fallback={<div className="centered">...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )}
          {authCtx.isLoggedIn ? (
            <Route path="/profile" component={UserProfile} />
          ) : (
            <Redirect to="/auth" />
          )}
          {/* <Route path="*">
            <Redirect to="/" />
          </Route> */}
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
