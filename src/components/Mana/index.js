import PropTypes from 'prop-types';
import React from 'react';
import { Mana as M } from '@saeris/react-mana';
import useStyles from './styles';


export default function Mana({ loyalty, symbol }) {
  const classes = useStyles();
  return <M className={classes.root}
            cost={loyalty === undefined}
            fixed
            loyalty={~~loyalty}
            symbol={symbol} />;
}


Mana.propTypes = {
  loyalty: PropTypes.string,
  symbol: PropTypes.string,
};
