import React from 'react'
import { render } from 'react-dom'

import './static/css/commin.less'
class Hello extends React.Component {
    render() {
        return (
            <p>hello world 234</p>
        )
    }
}

render(
    <Hello/>,
    document.getElementById('root')
)
