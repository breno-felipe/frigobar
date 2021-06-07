import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';

const StyledIcon = styled(Icon)`
  margin-right: ${({ size }) => (size === 'large' ? '8px' : '6px')};
`;

const Btn = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 200ms ease-in-out;
  text-decoration: none;

  ${({
    theme: {
      radius,
      components: {
        button: { backgroundColor, textColor, sizes },
      },
    },
    skin,
    icon,
    size,
    disabled,
    full,
    rounded,
    large,
  }) => `
    background-color: ${backgroundColor[skin]};
    color: ${textColor.enabled};
    font-size: ${large ? '1.125' : sizes[size].font}rem;
    padding: ${
      large
        ? `${sizes[size].padding.top * 2}px
           ${sizes[size].padding.right * 2}px
           ${sizes[size].padding.bottom * 2}px
           ${sizes[size].padding.left * 2}px
        `
        : `${sizes[size].padding.top}px
           ${sizes[size].padding.right}px
           ${sizes[size].padding.bottom}px
           ${sizes[size].padding.left}px
        `
    };

    ${
      disabled
        ? `
      background-color: ${backgroundColor.disabled};
      color: ${textColor.disabled};
      cursor: not-allowed;
    `
        : `
        &:hover {
          box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
        }
        `
    }

    ${StyledIcon} {
      font-size: ${sizes[size].icon}rem;
    }

    ${
      icon
        ? `
      display: flex;
      align-items: center;
      justify-content: center;
    `
        : ''
    }

    ${full ? 'width: 100%;' : ''}
    ${rounded ? `border-radius: ${radius[3]}px` : ''}
  `}
`;

const Button = React.forwardRef(
  ({ children, icon, theme, size, full, ...props }, ref) => (
    <Btn icon={icon} theme={theme} size={size} full={full} ref={ref} {...props}>
      {icon && <StyledIcon size={size}>{icon}</StyledIcon>}
      {children}
    </Btn>
  ),
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  /** change background-color */
  skin: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'danger',
    'warning',
    'neutral',
  ]),
  /** disabled state of the button */
  disabled: PropTypes.bool,
  /** adds an icon in the left side of button */
  icon: PropTypes.string,
  /** change the width, height and font-size values */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** 100% width */
  full: PropTypes.bool,
  /** add border-radius circle */
  rounded: PropTypes.bool,
  /** large button */
  large: PropTypes.bool,
};

Button.defaultProps = {
  skin: 'neutral',
  disabled: false,
  icon: undefined,
  size: 'small',
  full: undefined,
  rounded: undefined,
  large: undefined,
};

export default Button;
