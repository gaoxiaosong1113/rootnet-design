import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  forwardRef,
  useImperativeHandle,
  ReactNode,
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

const FormContext = React.createContext({} as any);

export interface FormProps {
  /**
   * @description      类名
   * @default           -
   */
  className?: string;
  style?: Object;
  children?: ReactNode;

  /**
   * @description      初始值
   * @default           -
   */
  initialValues?: Object;

  /**
   * @description      表单布局 'horizontal'|'vertical'|'inline'
   * @default           -
   */
  layout?: string;

  /**
   * @description      数据验证成功后回调事件
   * @default           -
   */
  onSubmit?: (value: Object) => void;

  /**
   * @description      数据校验失败后的回调事件
   * @default           -
   */
  onError?: (error: Object) => void;
}

const InternalForm = (props: FormProps, ref: any) => {
  const {
    className,
    children,
    layout = 'inline',
    onSubmit,
    onError,
    initialValues,
    ...prop
  } = props;

  const [value, setValue] = useState(initialValues || {});

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
    <FormContext.Provider
      value={{
        formValue: value,
        formRef: formRef.current,
        onChange: (name: string, v: string) => {
          setValue((val: any) => {
            val[name] = v;
            return val;
          });
        },
        onError: (error: any) => {
          // setError(error);
        },
      }}
    >
      <form
        className={clsx(
          className,
          `${prefix}-form`,
          {
            [`${prefix}-form-${layout}`]: layout,
          },
          className,
        )}
        onSubmit={handleSubmit}
        {...prop}
      >
        {children}
        {/* {React.Children.map(children, (item) => {
          return (
            item &&
            React.cloneElement(
              item,
              item.props.name
                ? {
                    ref: (r: any) => (formRef.current[item.props.name] = r),
                    value: initialValues[item.props.name],
                  }
                : {},
            )
          );
        })} */}
      </form>
    </FormContext.Provider>
  );
};

const Item = (props: any, ref: any) => {
  const { className, label, name, children, rules, ...prop } = props;
  const { onChange, onFocus, onBlur, formValue, formRef } =
    useContext(FormContext);
  const [value, setValue] = useState(formValue[name]);
  const [required, setRequired] = useState(false);
  const [error, setError] = useState([] as Array<any>);

  const handleValidation = () => {
    return {
      validation: () => {
        if (!name) {
          return;
        }
        return validationData(value);
      },
    };
  };

  useImperativeHandle(ref, () => handleValidation());

  useEffect(() => {
    formRef[name] = handleValidation();
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
    setValue(formValue[name]);
  }, [formValue[name]]);

  return (
    <div
      className={clsx(className, `${prefix}-form-item`, {
        [`${prefix}-form-item-errors`]: error && error.length > 0,
      })}
      {...prop}
    >
      <label
        className={clsx(`${prefix}-form-item-laber`, {
          [`${prefix}-form-item-laber-none`]: !label,
        })}
      >
        {required && (
          <span className={clsx(`${prefix}-form-item-required`)}>*</span>
        )}
        {label}
      </label>
      <div className={clsx(`${prefix}-form-item-control`)}>
        {React.cloneElement(children, {
          name,
          value,
          onChange: (e: any) => {
            handleChange(e);
          },
        })}
        {error && error.length && error.length > 0 ? (
          <div className={clsx(`${prefix}-form-item-error`)}>
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
