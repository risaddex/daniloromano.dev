import {Image} from '../../layout/Image';
import React from 'react';
import {
  Section,
  SectionDivider,
  SectionTitle
} from '../../styles/GlobalComponents';
import { GitHubRepo } from '../../utils/fetchProjects';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from './ProjectsStyles';
import { COLOR_TAGS, getColorContrast } from '../../utils/getColors';
import { GitHubCorner } from './GitHubCorner';

type ProjectsProps = {
  repos: GitHubRepo[];
};

const colorNames = Object.keys(COLOR_TAGS);
const Projects = ({ repos }: ProjectsProps) => {
  // map repository topic colors
  const lastRepos = repos.map(({ topics, ...rest }) => ({
    ...rest,
    topics: topics.map((topic) => ({
      name: topic,
      color: colorNames.includes(topic)
        ? getColorContrast(COLOR_TAGS[topic])
        : '#000',
      bgColor: COLOR_TAGS[topic] ?? COLOR_TAGS.default,
    })),
  }));

  return (
    <Section noPadding id="projects">
      <SectionDivider />
      <SectionTitle>Últimos Projetos</SectionTitle>
      <GridContainer>
        {lastRepos.map(
          ({ name, description, topics, html_url, homepage }, i) => (
            <BlogCard key={name}>
              <a href={homepage} target="_blank" rel="noopener noreferrer">
                <Image
                  src={`https://raw.githubusercontent.com/risaddex/${name}/main/.github/cover.png`}
                  alt={name}
                  width={400}
                  fallbackSrc="/notavailable.jpg"
                  height={280}
                  objectPosition={'top'}
                  objectFit="cover"
                />
              </a>
              <TitleContent>
                <HeaderThree hasTitle>{name}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <>
                <br />
                {/* <a href="http://" target="_blank" rel="noopener noreferrer"></a> */}
                <TitleContent>Tecnologias</TitleContent>
                <TagList>
                  {topics?.map(({ bgColor, color, name }) => (
                    <Tag color={color} bgColor={bgColor} key={name}>
                      <a
                        href={`https://github.com/topics/${name}`}
                        target="_blank"
                        title="check this topic on github"
                        rel="noopener noreferrer"
                      >
                        {name}
                      </a>
                    </Tag>
                  ))}
                  {/* <Tag>{language}</Tag> */}
                </TagList>
              </>
              {/* <UtilityList>
                <ExternalLinks href={homepage} target="_blank" rel="noopener noreferrer">Code</ExternalLinks>
                <ExternalLinks href={html_url} target="_blank" rel="noopener noreferrer">Source</ExternalLinks>
              </UtilityList> */}
              <GitHubCorner projectUrl={html_url} />
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
