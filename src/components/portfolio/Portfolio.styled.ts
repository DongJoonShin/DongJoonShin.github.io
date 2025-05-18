import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  position: relative;
  padding-bottom: ${(props) => props.theme.spacing.sm};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 4px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${(props) => props.theme.spacing.xl};
  margin-top: ${(props) => props.theme.spacing.xl};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadows.medium};
  transition: ${(props) => props.theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.shadows.large};
  }
`;

export const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ProjectCard}:hover & > img {
    transform: scale(1.05);
  }
`;

export const ProjectContent = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
`;

export const ProjectTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 600;
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

export const ProjectDescription = styled.p`
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.textLight};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.xs};
  margin-top: ${(props) => props.theme.spacing.sm};
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.md};
`;
