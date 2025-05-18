import styled from 'styled-components';

export const SectionTitle = styled.h2<{ underlineWidth?: string }>`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  position: relative;
  padding-bottom: ${(props) => props.theme.spacing.sm};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => props.underlineWidth || '60px'};
    height: 3px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
