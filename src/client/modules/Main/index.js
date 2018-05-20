import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getCurrencies } from '../../reducers/currencies';
import { changeSelectedCurrency } from '../../reducers/main';
import { getOrders } from '../../reducers/orders';

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.changeSelectedCurrency = this.changeSelectedCurrency.bind(this);
    this.getOrders = this.getOrders.bind(this);
  }

  componentWillMount(event){
    this.props.getCurrencies();
  }

  changeSelectedCurrency(event){
    this.props.changeSelectedCurrency(event.target.value);
  }

  getOrders(){
    this.props.getOrders(this.props.selectedCurrency);
  }

  render() {
    const { currencies } = this.props;
    return (
      <div className="Main">

        <select onChange={this.changeSelectedCurrency}>
            {Object.keys(currencies).map((key) =>(
              <option key={currencies[key].name}>{key}</option>
            ))}
        </select>

        <button onClick={this.getOrders}> Get Orders </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currencies,
  selectedCurrency: state.main.selectedCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => {
    dispatch(getCurrencies());
  },
  changeSelectedCurrency: (selectedCurrency) => {
    dispatch(changeSelectedCurrency(selectedCurrency));
  },
  getOrders: (selectedCurrency) => {
    dispatch(getOrders(selectedCurrency));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
