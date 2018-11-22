import React from 'react';
import styles from './style.scss';


class CoverImage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className={styles.coverimage}>
              <div className='ui huge white inverted header' id={styles.imagetext}>Buy in Bulk, Deliver Later Making Shopping Easier</div>

        </div>
    );
  }
}

export default CoverImage;
