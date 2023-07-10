import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import Router from "./router"
import { persistor, store } from "./store"

function App() {
  return (
      <div className="App">
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </div>
  )
}

export default App