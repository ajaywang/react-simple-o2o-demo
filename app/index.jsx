import React from 'react'
import { render } from 'react-dom'


class Hello extends React.Component {
    render() {
        return (
            <p>hello world 123</p>
        )
    }
}

render(
    <Hello/>,
    document.getElementById('root')
)
