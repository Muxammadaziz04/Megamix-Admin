import { QueryClientProvider } from "react-query"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import Router from "./router"
import { queryClient } from "./services/api"
import { persistor, store } from "./store"

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </div>
  )
}

export default App