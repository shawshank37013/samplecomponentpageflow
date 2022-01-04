cat HEADimport React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProcessFlow from "./ProcessFlow";
import Shop from "./Shop";
import Checkout from "./Checkout";
import Search from "./Search";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySearch: false,
      displayShop: false,
      displayCheckout: false,
      displayError: false,
      errorMessage: "",
      showPage: "",
    };
  }

  updatePageView = (e) => {

    this.setState({ showPage: e.target.value });

    try {
      // eslint-disable-next-line default-case
      switch (e.target.value ) {
        case "Search":
          this.setState({ displaySearch: true });
          console.log("matched Search");
          break;
        case "Shop":
          this.setState({ displayShop: true });
          console.log("matched Shop")

          break;
        case "Checkout":
          this.setState({ displayCheckout: true });
          console.log("matched Checkout")
          break;
        default:
          this.setState({ displayError: true });
          console.log("matched Error")
      }
    } catch (error) {
      this.setState({
        showPage: false,
        displayError: true,
        errorMessage: error.errorMessage,
      });
    }
  };

  render() {
    return (
      <>
        <ProcessFlow
          updatePageView={this.updatePageView.bind(this)}
          hasError={this.state.displayError}
          errorMessage={this.state.errorMessage}
        />
        {this.state.showPage  === 'Shop' && <Shop />}
        {this.state.showPage  === 'Search' && <Search />}
        {this.state.showPage  === 'Checkout' && <Checkout />}
      </>
    );
  }
}

export default Main;
