import React from 'react';
import { Form, Label, FormTextArea } from 'semantic-ui-react';

const TextInput = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => (
  <Form.Field error={touched && !!error} width={width}>
    <input {...input} placeholder={placeholder} type={type} />
    {touched && error && (
      <label basic color="red">
        {error}
      </label>
    )}
  </Form.Field>
);

export default TextInput;
