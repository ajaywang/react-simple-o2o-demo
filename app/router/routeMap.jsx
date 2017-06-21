import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import  App from '../containers/index'
import  Home from '../containers/Home/index'
import City from '../containers/City/index'
import User from '../containers/User/index'
import Search from '../containers/Search/index'
import Detail from '../containers/Detail/index'
import NotFound from '../containers/404'

//如果大型项目，router 部分就需要做更加复杂的配置
//参见 https://github.com/reactjs/react-router/tree/master/examples/huge....

class RouterMap extends React.Component{
    render(){
        return(
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/city" component={City}/>
                    <Route path="/User" component={User}/>
                    <Route path="/search/:type(/:keyword)" component={Search}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="*" component={NotFound} />
                </Route>
            </Router>
        )
    }
}

export default RouterMap