import {useEffect, useState} from "react";
import validate from "validate.js";

export function useFormValidate({schema, values = {}}) {
    const [formState, setFormState] = useState({
        isValid: false,
        values,
        touched: {},
        errors: {}
    });
    const setValues = (values) => {
        setFormState(formState => ({
            ...formState,
            values: {...formState.values, ...values}
        }))
    };
    useEffect(() => {
        const errors = validate(formState.values, schema, {fullMessages: false});
        setFormState(formState => ({
            ...formState,
            isValid: !errors,
            errors: errors || {}
        }));
    }, [formState.values]);
    const handleChange = event => {
        event.persist();
        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:checkTypeResult(event)
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true
            }
        }));
    };
    const hasError = field => {
        return !!(formState.touched[field] && formState.errors[field]);
    };
    const errorInfo = field => {
        return hasError(field) ? formState.errors[field][0] : null
    };
    const value = filed => {
        return formState.values[filed] || '';
    };
    return {formState, hasError, handleChange, errorInfo, value, setValues}
}
function checkTypeResult(event) {
    if (event.target.type === 'checkbox'){
        return event.target.checked;
    }else if (event.target.type === 'number' ){
        return Number(event.target.value)
    }else{
        return event.target.value;
    }
}
