import React from 'react'
import ReactDOM from 'react-dom'
import bar from '~/bar'

const title = 'My Minimal React Webpack Babel Setup'

ReactDOM.render(
  <div disabled={true}>{title} hi { bar }</div>,
  document.getElementById('app')
)

module.hot.accept()
