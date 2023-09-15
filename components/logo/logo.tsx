import LogoCarpoule from '../../assets/carpoule-logo.svg';

export const Logo = ({
  width = 215,
  height = 51
}: {
  width?: number;
  height?: number;
}) => {
  return <LogoCarpoule width={width} height={height} />;
};
