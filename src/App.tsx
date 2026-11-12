import React from "react";
import StudentForm from './components/StudentForm';
import Header from './components/Header';

export default class App extends React.Component {
    render() {
        return (
             <div className="container">
                <div className="card">
                  <Header title="Форма — класові компоненти" subtitle="React + TypeScript + Vite" />
                  <div className="separator" />
                  <StudentForm />
                </div>
              </div>
        );
    }
}