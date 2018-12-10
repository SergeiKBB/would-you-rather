import React, {Component} from 'react';
import styles from './stats.less';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    }
  }

  componentDidMount() {
    const { percent } = this.props;
    setTimeout(()=>{
      this.setState({
        width: percent
      })
    }, 10)
  }

  render() {
    const { percent } = this.props;
    const { width } = this.state;
    const style = {
      width: width + '%',
    };

    if(!percent) {
      return null
    }

    return (
      <div className='progress'>
          <div role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100" className={`active progress-bar progress-bar-striped ${styles.custom_progress}`} style={style}>{percent}%</div>
      </div>
    )
  }
}


export default Stats;
