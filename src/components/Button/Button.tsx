import { ReactNode } from 'react';
import { twa } from '../../utils/twa';
import { Loader } from '../Loader/Loader';

export interface ButtonProps extends Partial<JSX.IntrinsicElements['button']> {
  label?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  filled?: boolean;
  loading?: boolean;
  rounded?: boolean;
}

export function Button(props: ButtonProps) {
  const {
    icon,
    label,
    iconPosition = 'left',
    filled = false,
    loading = false,
    rounded = true,
    ...other
  } = props;
  let colorClasses = 'not-disabled:hover:bg-main-700 not-disabled:hover:text-white text-main-800 border-main-700';
  if (props.filled) colorClasses = 'not-disabled:hover:bg-transparent not-disabled:hover:text-main-800 bg-main-700 text-white border-main-700';

  const iconElement = (
    <>
      {loading ? (
        <div className="my-auto">
          <Loader />
        </div>
      ) : (
        props.icon
      )}
    </>
  );

  if (!props.icon && !props.label) {
    console.warn(
      'label or icon property must be set in order to use the Button component properly.',
    );
    return null;
  }

  const padding = props.icon && !props.label ? 'p-3' : 'px-4 py-2';
  const roundedClass = rounded ? 'rounded-full' : '';
  return (
    <button
      {...other}
      className={twa`flex gap-2 content-around border ${colorClasses} focus:outline-none ${padding} ${roundedClass} duration-150 transition outline-none active:scale-95 disabled:active:scale-100 disabled:opacity-50 disabled:cursor-default ${props.className}`}
    >
      {(!props.iconPosition || props.iconPosition === 'left') && iconElement}
      {props.label && <div>{props.label}</div>}
      {props.iconPosition && props.iconPosition === 'right' && iconElement}
    </button>
  );
}
