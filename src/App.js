import './App.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Router, Switch } from "react-router";
import AdminScreen from './Components/Admin/AdminScreen';
import { history } from "./Utils/history";
import Users from './Components/Admin/Users';
import Properties from './Components/Admin/Properties';
import Builders from './Components/Admin/Builders';

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router history={history}>
    <Switch>
      <AdminScreen exact path='/admin/builders' type="Builders" component={Builders}/>
      <AdminScreen exact path='/admin/users' type="Users" component={Users}/>
      <AdminScreen exact path='/admin/properties' type="Properties" component={Properties}/>
    </Switch>
    </Router>
    </PersistGate>
    </Provider>
  );
}

export default App;
