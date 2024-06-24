import { FC, ReactElement, ReactNode } from 'react'
import { GrayArrowIcon, LargeButtonContained } from './styles'
import arrowIcon from '../../../../assets/arrow.svg'
import grayArrowIcon from '../../../../assets/arrow-gray.svg'

export interface SecundaryLargeButtonProps {
  width?: string
  maxWidth?: string
  height?: string
  color?: string
  background?: string
  children?: ReactNode
  iconSize?: string
  fontSize?: string
  variant: 'contained'
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean | undefined
  onClick?: () => any
}

export const SecundaryLargeButton: FC<SecundaryLargeButtonProps> = ({
  children,
  width,
  maxWidth,
  height,
  variant,
  color,
  background,
  disabled,
  type,
  iconSize,
  fontSize,
  onClick
}: SecundaryLargeButtonProps
): ReactElement => {
  const buttonStyle = {
    width,
    maxWidth,
    height,
    color,
    background,
    fontSize
  }

  const iconStyle = {
    width: iconSize,
    height: iconSize,
  };

  const disabledButtonStyle = {
    ...(disabled === true ? { background: '#ECECED' } : {}),
    ...(disabled === true ? { color: '#C7C7C8' } : {}),
    ...(disabled === true ? { border: '#C7C7C8' } : {})
  }

  const getButtonContent = () => {
    if (variant === 'contained' && !disabled) {
      return (
        <>
          {children}
          <img src={arrowIcon} style={iconStyle} />
        </>
      );
    } else if (disabled === true) {
      return (
        <>
          {children}
          <GrayArrowIcon src={grayArrowIcon} style={iconStyle} />
        </>
      );
    } else {
      return <>{children}</>;
    }
  };

  return (
    <LargeButtonContained
      style={{ ...buttonStyle, ...disabledButtonStyle }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {getButtonContent()}
    </LargeButtonContained>
  );
}