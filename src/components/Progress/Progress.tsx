import './Progress.css';
import twa from '../../utils/twa';

interface ProgressProps{
    max?:number|string;
    value: number|string;
    classes?: string,
    height?: string;
}

export function Progress(props:ProgressProps) {
  const {
    max = 100, value, classes = '', height = '0.5rem',
  } = props;
  return (
    <progress id="progress-bar" className={twa`w-full h-[${height}] block ${classes}`} max={max} value={value}>
      {' '}
      {value}
      %
      {' '}
    </progress>
  );
}
