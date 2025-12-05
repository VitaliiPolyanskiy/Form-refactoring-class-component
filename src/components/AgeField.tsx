import React from 'react';

type Props = { value: string };
type State = { value: string; valid: boolean; error: string };

export default class AgeField extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    const valid = this.validate(props.value);
    this.state = { value: props.value, valid, error: valid ? '' : 'Возраст должен быть больше 0' };
  }

  validate = (v: string) => Number(v) > 0;

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    const valid = this.validate(v);
    this.setState({ value: v, valid, error: valid ? '' : 'Возраст должен быть больше 0' });
  }

  getValue = () => this.state.value;
  getValidity = () => this.state.valid;

  render() {
    return (
      <div className="field">
        <label>Возраст</label>
        <input type="number" value={this.state.value} onChange={this.onChange}
               className={this.state.valid ? 'valid' : 'invalid'} />
        {!this.state.valid && <div className="error">{this.state.error}</div>}
      </div>
    )
  }
}
