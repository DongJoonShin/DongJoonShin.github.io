import React from 'react';
import {
  HomeContainer,
  Hero,
  ProfileImage,
  HeroContent,
  Greeting,
  Name,
  Title,
  Description,
  Section,
  SectionTitle,
  AboutText,
  SkillsContainer,
} from '../../components/home/Home.styled';
import { Tag } from '../../components/common/Tag';
import { ButtonLink } from '../../components/common/Button';

const Home: React.FC = () => {
  // 실제 데이터로 교체하세요
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'SQL',
    'HTML/CSS',
    'Git',
    'AWS',
  ];

  return (
    <HomeContainer>
      <Hero>
        <ProfileImage>
          <img src="https://via.placeholder.com/250" alt="Dongjoon Shin" />
        </ProfileImage>
        <HeroContent>
          <Greeting>안녕하세요, 저는</Greeting>
          <Name>신동준</Name>
          <Title>소프트웨어 개발자</Title>
          <Description>
            저는 사용자 중심의 웹 애플리케이션 개발에 열정을 가진 풀스택 개발자입니다. 창의적인 문제
            해결과 효율적인 코드 작성을 지향합니다.
          </Description>
          <ButtonLink to="/portfolio" $variant="primary" $size="sm">
            포트폴리오 보기
          </ButtonLink>
        </HeroContent>
      </Hero>

      <Section>
        <SectionTitle>About Me</SectionTitle>
        <AboutText>
          N년간의 소프트웨어 개발 경험을 바탕으로 다양한 프로젝트를 수행해왔습니다. 웹 기술의
          트렌드를 꾸준히 학습하며 최신 기술을 활용한 웹 애플리케이션 개발에 주력하고 있습니다.
          사용자 경험을 중시하고, 유지보수가 용이한 코드 작성을 위해 끊임없이 노력합니다. 팀 협업과
          커뮤니케이션을 중요시하며, 함께 성장하는 개발 문화를 지향합니다.
        </AboutText>

        <SectionTitle>Skills</SectionTitle>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tag key={index} $variant="bordered" $size="sm" $radius={20}>
              {skill}
            </Tag>
          ))}
        </SkillsContainer>
      </Section>
    </HomeContainer>
  );
};

export default Home;
