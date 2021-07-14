import React from 'react';

export default function Head(props) {
  React.useEffect(() => {
    document.title = `Waters | ${props.title}`;
  }, [props]);
  return <></>;
}
