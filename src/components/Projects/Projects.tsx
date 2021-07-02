import Image from 'next/image';
import React from 'react';
import {
  Section,
  SectionDivider,
  SectionTitle
} from '../../styles/GlobalComponents';
import { TGitHubRepo } from '../../utils/fetchProjects';
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
  UtilityList
} from './ProjectsStyles';

type ProjectsProps = {
  repos:TGitHubRepo[]
}
const Projects = ({repos}:ProjectsProps) => {

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {repos?.filter((rep) => rep.name !== 'daniloromano.dev').map(
          ({name, language,description, tags_url, html_url, homepage }) => (
            <BlogCard key={name}>
              <Image
                src={`https://raw.githubusercontent.com/risaddex/${name}/main/.github/cover.png`}
                alt={name}
                width={400}
                height={280}
                objectPosition={"top"}
                objectFit="cover"
              />
              <TitleContent>
                <HeaderThree hasTitle>{name}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <a href="http://" target="_blank" rel="noopener noreferrer"></a>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {/* {tags.map((tag, id) => (
                    <Tag key={id}>{tag}</Tag>
                  ))} */}
                  <Tag>{language}</Tag>
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={homepage} target="_blank" rel="noopener noreferrer">Code</ExternalLinks>
                <ExternalLinks href={html_url} target="_blank" rel="noopener noreferrer">Source</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
