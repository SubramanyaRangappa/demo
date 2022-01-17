import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyForm from './containers/MyForm';
import ProductComponent from './containers/ProductComponent';
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';
import ForLoop from './containers/programs/ForLoop';
import RemoveDuplicate from './containers/programs/RemoveDuplicate';
import SumOfArrayElement from './containers/programs/SumOfArrayElement';

const App = () => {
  return (
  <>
    <Router>
      {/* <Route exact path="/" component={ProductListing} /> */}
      <Route exact path="/" component={MyForm} />
      <Route path="/products" component={ProductComponent} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/dupliate" component={RemoveDuplicate} />
      <Route path="/sum" component={SumOfArrayElement} />
      <Route path="/forloop" component={ForLoop} />
    </Router>
    </>
  );
}

export default App;
