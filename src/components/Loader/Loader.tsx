import { twa } from '../../utils/twa';

export interface LoaderProps {
    size?: number;
    borderSize?: number;
}

export function Loader({ size = 1, borderSize = 2 }: LoaderProps) {
  return (
    <div style={{ borderTop: `solid ${borderSize}px #3D8EA8` }} className={twa`w-[${size}rem] h-[${size}rem] border-[${borderSize}px] border-gray-200 rounded-full animate-spin`} />
  );
}

export function BackdropLoader({ size = 3, borderSize = 4 }: LoaderProps) {
  return (
    <div className={twa`w-screen h-screen z-10 fixed top-0 left-0 flex justify-center items-center bg-[#00000080]`}>
      <Loader size={size} borderSize={borderSize} />
    </div>
  );
}
