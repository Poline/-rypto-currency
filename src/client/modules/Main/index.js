import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Main extends PureComponent {

  render() {

    return (
      <div className="Main">
        Hello
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
