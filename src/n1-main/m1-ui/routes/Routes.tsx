import React from "react";
import {Route, Switch} from "react-router-dom";
import WeatherBoard from "../components/weatherBorder/weatherBoard";

const  Routes = () => {
    return (
        <div>
            <Switch>
                {/*<Route exact path={'/'} render={() => <div> Hello</div>} />*/}
                <Route exact path={'/weatherBoard'} render={() => <WeatherBoard />} />
                {/*<Route  path={'/login'} render={() => <Login />} />*/}
                {/*<Redirect path={ '*' } to={ '/404' }/>*/}
            </Switch>
        </div>
    );
}

export default Routes;