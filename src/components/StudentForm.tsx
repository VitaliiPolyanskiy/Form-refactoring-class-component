import React from 'react';
import Swal from 'sweetalert2';
import NameField from './NameField';
import SurnameField from './SurnameField';
import AgeField from './AgeField';
import RatingField from './RatingField';

export default class StudentForm extends React.Component {
  nameRef = React.createRef<NameField>();
  surnameRef = React.createRef<SurnameField>();
  ageRef = React.createRef<AgeField>();
  ratingRef = React.createRef<RatingField>();

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = this.nameRef.current?.getValue();
    const surname = this.surnameRef.current?.getValue();
    const age = this.ageRef.current?.getValue();
    const rating = this.ratingRef.current?.getValue();

    const valid = this.nameRef.current?.getValidity() &&
                  this.surnameRef.current?.getValidity() &&
                  this.ageRef.current?.getValidity() &&
                  this.ratingRef.current?.getValidity();

    if (!valid) {
      Swal.fire({ icon: 'error', title: 'Помилка', text: 'Будь ласка, виправте помилки у формі' });
      return;
    }

    Swal.fire({
      title: 'Дані студента',
      html: `
        <div style="text-align: left; font-size: 16px;">
          <b>Ім'я:</b> ${name}<br/>
          <b>Прізвище:</b> ${surname}<br/>
          <b>Вік:</b> ${age}<br/>
          <b>Рейтинг:</b> ${rating}
        </div>
      `,
      icon: 'info',
      confirmButtonColor: '#4b9ce2'
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <NameField ref={this.nameRef} value="" />
        <SurnameField ref={this.surnameRef} value="" />
        <AgeField ref={this.ageRef} value="0" />
        <RatingField ref={this.ratingRef} value="0" />
        <div style={{marginTop: 16}}>
          <button type="submit">Надіслати</button>
        </div>
      </form>
    );
  }
}