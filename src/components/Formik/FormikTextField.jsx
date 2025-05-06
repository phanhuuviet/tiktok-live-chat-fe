import React from 'react';

import TextField from '../TextField';

const FormikTextField = ({ field, ...props }) => {
    return <TextField {...field} {...props} />;
};

export default FormikTextField;
