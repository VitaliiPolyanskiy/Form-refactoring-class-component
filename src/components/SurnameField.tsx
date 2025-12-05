import React from 'react';

type Props = { value: string };
type State = { value: string; valid: boolean; error: string };

export default class SurnameField extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    const valid = this.validate(props.value);
    this.state = { value: props.value, valid, error: valid ? '' : 'Фамилия должна содержать минимум 3 символа' };
  }

  validate = (v: string) => v.trim().length >= 3;

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    const valid = this.validate(v);
    this.setState({ value: v, valid, error: valid ? '' : 'Фамилия должна содержать минимум 3 символа' })
  }

  getValue = () => this.state.value;
  getValidity = () => this.state.valid;

  render() {
    return (
      <div className="field">
        <label>Фамилия</label>
        <input type="text" value={this.state.value} onChange={this.onChange}
               className={this.state.valid ? 'valid' : 'invalid'} />
        {!this.state.valid && <div className="error">{this.state.error}</div>}
      </div>
    );
  }
}
