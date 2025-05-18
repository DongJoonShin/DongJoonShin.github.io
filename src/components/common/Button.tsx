import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  as?: React.ElementType;
  to?: string;
  href?: string;
  $variant?: 'primary' | 'secondary' | 'text';
  $size?: 'md' | 'sm';
}

const buttonBase = css<ButtonProps>`
  display: inline-block;
  font-weight: 500;
  border-radius: 4px;
  transition: ${(props) => props.theme.transitions.default};
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border: none;
  outline: none;
  ${(props) => {
    switch (props.$size) {
      case 'sm':
        return `padding: ${props.theme.spacing.sm} ${props.theme.spacing.lg}; font-size: ${props.theme.fontSizes.md};`;
      default:
        return `padding: ${props.theme.spacing.md} ${props.theme.spacing.xl}; font-size: ${props.theme.fontSizes.lg};`;
    }
  }}
  ${(props) => {
    switch (props.$variant) {
      case 'secondary':
        return `background: ${props.theme.colors.secondary}; color: #fff;`;
      case 'text':
        return `background: none; color: ${props.theme.colors.primary};`;
      default:
        return `background: ${props.theme.colors.primary}; color: #fff;`;
    }
  }}
  &:hover {
    ${(props) =>
      props.$variant === 'text'
        ? 'text-decoration: underline;'
        : `background: ${props.theme.colors.accent};`}
    transform: translateY(-2px);
  }
`;

export const Button = styled.button<ButtonProps>`
  ${buttonBase}
`;

export const ButtonLink = styled(Link)<ButtonProps>`
  ${buttonBase}
`;
