import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xl};
  max-width: 1000px;
  margin: 0 auto;
`;

export const Hero = styled.section`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xxl};
  padding: ${(props) => props.theme.spacing.xxl} 0;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: ${(props) => props.theme.spacing.xl};
  }
`;

export const ProfileImage = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 4px solid ${(props) => props.theme.colors.primary};

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

export const Greeting = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.primary};
`;

export const Name = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  font-weight: 700;
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.textLight};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: 1.6;
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

export const Section = styled.section`
  margin-bottom: ${(props) => props.theme.spacing.xxl};
`;

export const SectionTitle = styled.h2`
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
    width: 60px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const AboutText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: 1.7;
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.sm};
  margin-top: ${(props) => props.theme.spacing.md};
`;
