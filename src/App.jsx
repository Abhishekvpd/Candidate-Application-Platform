import { Provider } from "react-redux";
import SearchJobs from "./pages/searchJobs/SearchJobs";
import store from "./store/store";

const App = () => {
  return (
    // <Provider store={store}>
      <SearchJobs />
    // </Provider>
  )
}

export default App