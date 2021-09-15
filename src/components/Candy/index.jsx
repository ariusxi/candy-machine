import React from 'react'
import './styles.css'

const Candy = props => {
  let { candyStyle } = props;
  {
    switch (candyStyle) {
      case "candy 1":
        return <img src="/candy1.svg" className="candy" />
        break;
      case "candy 2":
        return <img src="/candy2.svg" className="candy" />
        break;
      case "candy 3":
        return <img src="/candy3.svg" className="candy-2" />
        break;
    }
  }
}

export default Candy