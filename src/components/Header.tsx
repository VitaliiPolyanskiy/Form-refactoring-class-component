import React from 'react';

type Props = { title: string; subtitle?: string };

export default class Header extends React.Component<Props> {
  render() {
    return (
      <div className="header">
        <div>
          <h1>{this.props.title}</h1>
          {this.props.subtitle && <div className="small">{this.props.subtitle}</div>}
        </div>
      </div>
    );
  }
}
