import type { Props } from '../types';

const ShowComponentPresentation = ({ children, rule }: Props) => {
  return <>{rule && children}</>;
};

export default ShowComponentPresentation;
