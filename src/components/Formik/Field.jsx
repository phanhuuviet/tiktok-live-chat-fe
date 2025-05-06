import { Field } from 'formik';
import React from 'react';

const FieldWrapper = (Component) => (props) =>
    <Field component={Component} {...props} {...(props?.name && !props?.id ? { id: props?.name } : {})} />;

export default FieldWrapper;
