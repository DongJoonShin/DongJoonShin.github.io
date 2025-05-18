import styled, { css } from 'styled-components';

export interface TagProps {
  $variant?: 'default' | 'bordered';
  $size?: 'sm' | 'xs';
  $radius?: number;
}

export const Tag = styled.span<TagProps>`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textLight};
  font-size: ${(props) =>
    props.$size === 'xs' ? props.theme.fontSizes.xs : props.theme.fontSizes.sm};
  padding: ${(props) =>
    props.$size === 'xs' ? '4px 8px' : `${props.theme.spacing.xs} ${props.theme.spacing.md}`};
  border-radius: ${(props) =>
    props.$radius !== undefined ? `${props.$radius}px` : props.$size === 'xs' ? '4px' : '20px'};
  ${(props) =>
    props.$variant === 'bordered'
      ? css`
          border: 1px solid ${props.theme.colors.border};
        `
      : ''}
`;
