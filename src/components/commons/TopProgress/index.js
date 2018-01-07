import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    top: '0',
    zIndex: 999,
    backgroundColor: 'white'
  },
  primaryColor: {
    backgroundColor: '#bbdefb',
  },
  primaryColorBar: {
    backgroundColor: '#2196f3',
  }
};

function LinearIndeterminate(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress classes={{
        primaryColor: classes.primaryColor,
        primaryColorBar: classes.primaryColorBar}} color="primary" />
    </div>
  );
}

LinearIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearIndeterminate);