import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
// import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

const UserProfile = React.lazy(() =>
  import("./components/Profile/UserProfile")
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/profile" component={UserProfile} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
