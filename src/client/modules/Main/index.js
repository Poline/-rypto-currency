import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getCurrencies } from '../../reducers/currencies';

class Main extends PureComponent {
  componentWillMount(){
    this.props.getCurrencies();
  }
  render() {

    return (
      <div className="Main">
        Hello
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => {
    dispatch(getCurrencies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
