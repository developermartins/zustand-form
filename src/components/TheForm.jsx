import React from 'react';
import useStore from '../store/appStore';
import { Formik, Field, Form } from 'formik';

const TheForm = () => {

  const { setHeroes } = useStore();

  return (
    <div>
      <h1>Add a hero!</h1>
      <Formik 
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => {
        
          setHeroes(values)
        }}
      >

        <Form>
          <label htmlFor="firstName">Hero Name</label>
          <Field id="firstName" name="firstName" placeholder="Hero name"/>

          <label htmlFor="lastName">Hero last name</label>
          <Field id="lastName" name="lastName" placeholder="Hero last name"/>

          <label htmlFor="email">email</label>
          <Field id="email" name="email" placeholder="Email"/>

          <button type='submit'>Add a Hero</button>
        </Form>
      </Formik>
    </div>
  );
};

export default TheForm;
