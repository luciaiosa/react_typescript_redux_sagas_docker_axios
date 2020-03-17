import React, {FunctionComponent} from 'react';

interface SpinnerProps {
  message: String
}

const Spinner: FunctionComponent<SpinnerProps> = (props: SpinnerProps) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;