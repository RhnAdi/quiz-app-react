import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Quiz } from "./../../pages"

export default function RootRouter () {
      return (
            <>
                  <Router>
                        <Switch>
                              <Route path="/" exact component={Home} />
                              <Route path="/quiz" exact component={Quiz} />
                        </Switch>
                  </Router>
            </>
      )
}