import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './styles.scss';

class Table extends PureComponent {
  render() {
    const { data, title } = this.props;
    
    if (!data || data.length === 0){
      return null;
    }

    return (
      <div className="table">
        <div className='table__title'> {title} </div>
        <table>
          <tbody>
            <tr>
              {Object.keys(data[0]).map((key) => (
                  <td key={key + title}> {key} </td>
              ))}
            </tr>

            {data.map((el, index) => {
              return (
                <tr key={`el${index}${title}`}>
                  {Object.keys(el).map((elKey) => (
                    <td>{el[elKey]}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect()(Table);
