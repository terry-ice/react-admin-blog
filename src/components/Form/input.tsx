import { StyleLabel } from '@/assets/style/common';
import React from 'react';
import { Field } from 'react-final-form';

interface PropsTypes {
  width: string;
  title: string;
  label: string;
  placeholder?: string;
  errorText?: string;
}
const FinalInput: React.SFC<PropsTypes> = ({
  width,
  title,
  label,
  placeholder,
  errorText
}) => {
  return (
    <StyleLabel width={width}>
      <Field name={title}>
        {({ input, meta }: any) => (
          <label htmlFor={title}>
            {label}:
            <input type="text" {...input} placeholder={placeholder} />
            {meta.error && meta.touched && (
              <span className="error">
                {meta.error}
                {errorText}
              </span>
            )}
          </label>
        )}
      </Field>
    </StyleLabel>
  );
};

export default FinalInput;
