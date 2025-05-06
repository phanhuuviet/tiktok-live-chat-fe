import { Form, Formik } from 'formik';
import React from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';

import { Field } from '~/components/Formik';
import { useExample } from '~/modules/example/redux/hooks/useExample';

const NotFound = () => {
    const { t } = useTranslation(['general']);

    const { data, actions: exampleActions } = useExample();
    console.log(data);
    return (
        <>
            <h1 className="title" onClick={() => exampleActions.exampleActionSuccess([123])}>
                {t('title')}
            </h1>
            <button
                onClick={() => {
                    exampleActions.exampleAction({ id: 123 });
                }}
            >
                Call API
            </button>
            <Formik
                initialValues={{ example: '' }}
                onSubmit={(values) => {
                    console.log('submit', values);
                }}
            >
                {(props) => {
                    return (
                        <Form onSubmit={props.handleSubmit}>
                            <Field.TextField name="example" label={t('example')} placeholder={t('example')} />
                            <button type="submit" className="btn btn-primary">
                                {t('submit')}
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default NotFound;
