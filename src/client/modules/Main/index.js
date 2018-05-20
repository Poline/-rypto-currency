import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getCurrencies } from '../../reducers/currencies';
import { changeSelectedCurrency } from '../../reducers/main';

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.changeSelectedCurrency = this.changeSelectedCurrency.bind(this);
  }

  componentWillMount(event){
    this.props.getCurrencies();
  }

  changeSelectedCurrency(event){
    debugger
    this.props.changeSelectedCurrency(event.target.value);
  }

  render() {
    const { currencies } = this.props;
    return (
      <div className="Main">

        <select onChange={this.changeSelectedCurrency}>
            {Object.keys(currencies).map((key) =>(
              <option key={currencies[key].name}>{currencies[key].name}</option>
            ))}
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => {
    dispatch(getCurrencies());
  },
  changeSelectedCurrency: (selectedCurrency) => {
    dispatch(changeSelectedCurrency(selectedCurrency));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
