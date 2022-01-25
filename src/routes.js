import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import UserForm from "./widgets/UserForm";
import PostsPage from "./widgets/PostsPage";
import { Redirect } from "react-router-dom";

function AppRoute() {
  return (
    <Switch>
      <Route exact path="/">
        <UserForm />
      </Route>
      <Route exact path="/:id">
        <PostsPage />
      </Route>

      <Route exact path="/undefined">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default AppRoute;
