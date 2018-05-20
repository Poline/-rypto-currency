import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Table extends PureComponent {
  render() {
    const { data } = this.props;
    
    if (!data || data.length === 0){
      return null;
    }

    return (
      <div className="Table">
        <table>
          {Object.keys(data[0]).map((key) => (
              <td> {key} </td>
          ))}

          {data.map((el) => {
            return (
              <tr>
                {Object.keys(el).map((elKey) => (
                  <td>{el[elKey]}</td>
                ))}
              </tr>
            )
          })}
        </table>
      </div>
    );
  }
}

export default connect()(Table);
