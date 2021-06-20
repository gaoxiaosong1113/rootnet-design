import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';

import ReactDOM from 'react-dom';

import clsx from 'clsx';

import './index.less';

import { prefix } from '../config';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext();

const Form = (props: any) => {
  const {
    type,
    disabled,
    children,
    layout,
    onSubmit,
    onError,
    initialValues,
    ...prop
  } = props;

  const [value, setValue] = useState({});
  // const [error, setError] = useState({});

  const formRef = useRef({});

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formRef);
    let error = {};
    for (let attr in formRef.current) {
      let err = formRef.current[attr].validation();
      if (err) {
        error[attr] = err.message;
      }
    }
    if (JSON.stringify(error) != '{}' && onError) {
      onError(error);
      return false;
    }
    if (onSubmit) {
      onSubmit(value);
    }
    return false;
  }

  return (
    <ThemeContext.Provider
      value={{
        onChange: (name, v) => {
          let newValue = { ...value };
          newValue[name] = v;
          setValue(newValue);
          console.log(newValue);
          console.log('change');
        },
        onError: (error) => {
          // setError(error);
          // console.log('error');
        },
      }}
    >
      <form
        className={clsx({
          [`${prefix}-form`]: true,
          [`${prefix}-form-inline`]: !layout || layout == 'inline',
          [`${prefix}-form-${layout}`]: layout,
        })}
        onSubmit={handleSubmit}
        {...prop}
      >
        {React.Children.map(children, (item) => {
          return React.cloneElement(
            item,
            item.props.name
              ? {
                  ref: (r) => (formRef.current[item.props.name] = r),
                  value: initialValues[item.props.name],
                }
              : null,
          );
        })}
      </form>
    </ThemeContext.Provider>
  );
};

const Item = (props: any, ref: any) => {
  const { label, name, children, rules, ...prop } = props;

  const [value, setValue] = useState(props.value);
  const [required, setRequired] = useState(false);
  const [error, setError] = useState(null);

  useImperativeHandle(ref, () => ({
    validation: () => {
      if (!name) {
        return;
      }
      return validationData(value);
    },
  }));

  const { onChange, onFocus, onBlur, onError } = useContext(ThemeContext);

  useEffect(() => {
    if (onChange && name) {
      onChange(name, value);
    }
  }, []);

  useEffect(() => {
    if (rules) {
      setRequired(rules.map((item) => item.required)[0] !== undefined);
    }
  }, [rules]);

  const validationData = (v) => {
    if (name && rules) {
      console.log(v.length);
      let errorAry = rules
        .map((item) => {
          if (item.required && item.required === true) {
            if (v == undefined || v.length <= 0) {
              return item;
            }
          }
          if (item.fields && !new RegExp(item.fields).test(v)) {
            return item;
          }
          if (item.max && item.max < v.length) {
            return {
              max: item.max,
              message: `最多输入${item.max}`,
            };
          }
          if (item.min && item.min > v.length) {
            return {
              max: item.min,
              message: `最少输入${item.min}`,
            };
          }
        })
        .filter((item) => item !== undefined);
      console.log(errorAry);
      setError(errorAry);
      return errorAry.length > 0 ? errorAry[0] : null;
    }
    return null;
  };

  const handleChange = (v) => {
    setValue(v);
    validationData(v);
    if (name && onChange) {
      onChange(name, v);
    }
  };

  const handleFocus = (e) => {
    if (name && onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e) => {
    if (name && onBlur) {
      onBlur(e);
    }
  };

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);
  console.log(error);
  return (
    <div
      {...prop}
      className={clsx({
        [`${prefix}-form-item`]: true,
      })}
    >
      <label
        className={clsx({
          [`${prefix}-form-item-laber`]: true,
        })}
      >
        {required && (
          <span
            className={clsx({
              [`${prefix}-form-item-required`]: true,
            })}
          >
            *
          </span>
        )}
        {label}
      </label>
      <div
        className={clsx({
          [`${prefix}-form-item-control`]: true,
        })}
      >
        {React.cloneElement(children, {
          name,
          value,
          onChange: (e) => {
            handleChange(e);
          },
        })}
        {error && error.length && error.length > 0 ? (
          <div
            className={clsx({
              [`${prefix}-form-item-error`]: true,
            })}
          >
            {error[0].message}
          </div>
        ) : null}
      </div>
    </div>
  );
};

Form.Item = forwardRef(Item);

export default Form;
