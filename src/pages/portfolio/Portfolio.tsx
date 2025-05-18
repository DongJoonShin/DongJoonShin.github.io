import React from 'react';
import {
  PortfolioContainer,
  PageTitle,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  ProjectLinks,
} from '../../components/portfolio/Portfolio.styled';
import { Tag } from '../../components/common/Tag';
import { Button } from '../../components/common/Button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  codeUrl?: string;
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'LGE Living',
      description:
        'LGE Living 현재 진행중. AI tools 적극 활용해서 개발중. 프로젝트 진행 중에 불편함을 느꼈던 워크플로우 개선을 위해 자발적으로 MCP 개발 및 사용. 웹 접근성을 적극적으로 고려하여 개발하였고, 웹 성능 개선에도 많은 노력을 함. 웹 접근성 및 성능 개선을 위한 MCP 개발을 하였음.',
      image: 'https://via.placeholder.com/300x200?text=E-commerce+Platform',
      techStack: ['Next.js', 'Turborepo', 'Docker', 'MCP', 'AIDD'],
      demoUrl: '',
      codeUrl: '',
    },
    {
      id: 2,
      title: '미래엔 컨텐츠 카드',
      description:
        '미래엔 교과서의 컨텐츠를 개발하는 프로젝트. 고등영어, 중등 수학, 초등 수학에 해당하는 교과서 컨텐츠를 개발하였음. 교과서 내용을 개발하는 프로젝트다 보니 웹 접근성에 많이 신경을 썼음.',
      image: 'https://via.placeholder.com/300x200?text=E-commerce+Platform',
      techStack: ['React', 'Nx', 'Docker'],
      demoUrl: '',
      codeUrl: '',
    },
    {
      id: 3,
      title: '미래엔 플랫폼',
      description:
        '미래엔 플랫폼. 선생님과 학생이 소통하는 플랫폼. 교과서 컨텐츠를 불러와 실시간으로 학생과 수업 및 소통을 진행할 수 있는 플랫폼. 과제를 배부 및 제출할 수 있고, 각 학생 및 학급별 수업 통계 대시보드를 지원함.',
      image: 'https://via.placeholder.com/300x200?text=E-commerce+Platform',
      techStack: ['React', 'Spring Boot', 'MySQL', 'Docker', 'Rabbit MQ'],
      demoUrl: '',
      codeUrl: '',
    },
    {
      id: 4,
      title: '대법원 차세대 플랫폼',
      description:
        '대법원 차세대 플랫폼. 레거시로 개발된 플랫폼을 차세대 플랫폼으로 전환하는 프로젝트.',
      image: 'https://via.placeholder.com/300x200?text=Portfolio+Website',
      techStack: ['Spring(전자 정부 프레임워크)'],
      demoUrl: '',
      codeUrl: '',
    },
  ];

  return (
    <PortfolioContainer>
      <PageTitle>포트폴리오</PageTitle>
      <p>
        제가 참여한 주요 프로젝트들입니다. 각 프로젝트를 클릭하면 상세 정보를 확인하실 수 있습니다.
      </p>

      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.techStack.map((tech, index) => (
                  <Tag key={index} $size="xs" $radius={4}>
                    {tech}
                  </Tag>
                ))}
              </TechStack>
              <ProjectLinks>
                {project.demoUrl && (
                  <Button
                    as="a"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    $variant="text"
                    $size="sm"
                  >
                    데모 보기
                  </Button>
                )}
                {project.codeUrl && (
                  <Button
                    as="a"
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    $variant="text"
                    $size="sm"
                  >
                    코드 보기
                  </Button>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;
