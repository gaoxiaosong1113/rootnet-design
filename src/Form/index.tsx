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

const ThemeContext = React.createContext({} as any);

const InternalForm = (props: any, ref: any) => {
  const {
    className,
    type,
    disabled,
    children,
    layout,
    onSubmit,
    onError,
    initialValues,
    ...prop
  } = props;

  const [value, setValue] = useState(initialValues || {});
  // const [error, setError] = useState({});

  const formRef: any = useRef({});

  function handleSubmit(e: any) {
    e && e.preventDefault();
    let error: any = {};
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

  useImperativeHandle(ref, () => ({
    onSubmit: () => {
      handleSubmit(null);
    },
  }));

  return (
    <ThemeContext.Provider
      value={{
        onChange: (name: string, v: string) => {
          setValue((val: any) => {
            val[name] = v;
            return val;
          });
        },
        onError: (error: any) => {
          // setError(error);
          // console.log('error');
        },
      }}
    >
      <form
        className={clsx(
          {
            [`${prefix}-form`]: true,
            [`${prefix}-form-inline`]: !layout || layout == 'inline',
            [`${prefix}-form-${layout}`]: layout,
          },
          className,
        )}
        onSubmit={handleSubmit}
        {...prop}
      >
        {React.Children.map(children, (item) => {
          return React.cloneElement(
            item,
            item.props.name
              ? {
                  ref: (r: any) => (formRef.current[item.props.name] = r),
                  value: initialValues[item.props.name],
                }
              : {},
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
  const [error, setError] = useState([] as Array<any>);

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
      setRequired(rules.map((item: any) => item.required)[0] !== undefined);
    }
  }, [rules]);

  const validationData = (v: any) => {
    if (v) {
      v = v.toString();
    }
    if (name && rules) {
      let errorAry = rules
        .map((item: any) => {
          // 必填项
          if (item.required !== undefined && item.required === true) {
            if (v === undefined || v.length <= 0) {
              return item;
            }
          }

          // 验证正则
          if (item.fields && !item.fields.test(v)) {
            return item;
          }

          // 验证长度
          if (item.max && item.max < v.length) {
            return {
              max: item.max,
              message: `最多输入${item.max}`,
            };
          }

          // 验证长度
          if (item.min && item.min > v.length) {
            return {
              max: item.min,
              message: `最少输入${item.min}`,
            };
          }
        })
        .filter((item: any) => item !== undefined);
      setError(errorAry);
      return errorAry.length > 0 ? errorAry[0] : null;
    }
    return null;
  };

  const handleChange = (v: any) => {
    setValue(v);
    validationData(v);
    if (name && onChange) {
      onChange(name, v);
    }
  };

  const handleFocus = (e: any) => {
    if (name && onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: any) => {
    if (name && onBlur) {
      onBlur(e);
    }
  };

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <div
      {...prop}
      className={clsx({
        [`${prefix}-form-item`]: true,
        [`${prefix}-form-item-errors`]: error && error.length > 0,
      })}
    >
      <label
        className={clsx({
          [`${prefix}-form-item-laber`]: true,
          [`${prefix}-form-item-laber-none`]: !label,
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
          onChange: (e: any) => {
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

export interface CompoundedComponent
  extends React.ForwardRefExoticComponent<any> {
  Item: any;
}

const Form = forwardRef(InternalForm) as CompoundedComponent;

Form.Item = forwardRef(Item);

export default Form;
