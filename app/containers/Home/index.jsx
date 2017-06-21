import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Home extends React.Component{
    constructor(props,context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
    }
    render(){
        return(
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}

//使用 require.ensure 异步加载，还不支持 ES6 的 export
//export default NotFound

module.exports = Home;