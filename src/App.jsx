import { useEffect } from "react"
import { QueryClientProvider } from "react-query"
import { Provider, useDispatch } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import Router from "./router"
import { queryClient } from "./services/api"
import { getMe } from "./services/login"
import { persistor } from "./store"
import { authActions } from "./store/auth/auth.slice"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getMe().then(res => {
      if(res?.id){
        dispatch(authActions.login())
      } else {
        dispatch(authActions.logout())
      }
    })
  }, [])
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
          <PersistGate persistor={persistor}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </PersistGate>
      </QueryClientProvider>
    </div>
  )
}

export default App