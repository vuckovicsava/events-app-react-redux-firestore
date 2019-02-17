import React from 'react';
import { Form, Select, Label } from 'semantic-ui-react';

const SelectInput = ({
  input,
  placeholder,
  multiple,
  options,
  meta: { touched, error }
}) => (
  <Form.Field error={touched && !!error}>
    <Select
      value={input.value || null}
      onChange={(e, data) => input.onChange(data.value)}
      placeholder={placeholder}
      options={options}
      nultiple={multiple}
    />
    {touched && error && (
      <Label basic color="red">
        {error}
      </Label>
    )}
  </Form.Field>
);

export default SelectInput;
