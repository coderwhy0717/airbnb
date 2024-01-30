import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from './store'
//适配屏幕
// import 'lib-flexible/flexible.js'

import 'normalize.css'
import '@/asstes/css/index.less'
import theme from './asstes/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Suspense fallback={<h1>loading。。。</h1>}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
  // </React.StrictMode>
)

const string = 'a,b,c,d,e,f,g'
console.log(string.split(',').join('1'))

const arr = []
for (const item of string) {
  arr.push(item)
}
console.log(arr)
