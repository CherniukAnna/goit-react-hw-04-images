import { RotatingLines } from 'react-loader-spinner';
import './Loader.css';

export const Loader = () => {
  return (
    <div className="Loader">
      <RotatingLines
        strokeColor="rgba(255, 192, 203, 0.824)"
        strokeWidth="1"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};