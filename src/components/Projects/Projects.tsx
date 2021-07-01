import React, { useEffect, useState } from 'react';

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
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { fetchGitHubRepos, TGitHubRepo } from '../../utils/fetchProjects';

const Projects = () => {
  const [repos, setRepos] = useState<TGitHubRepo[]>();
  useEffect(() => {
    (async() => {
      const data = await fetchGitHubRepos();
    setRepos(data);
    })()
  }, []);

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {repos?.map(
          ({name, language,description, tags_url, html_url, homepage }) => (
            <BlogCard key={name}>
              <Img src={`https://raw.githubusercontent.com/risaddex/${name}/main/.github/cover.jpg`}/>
              <TitleContent>
                <HeaderThree hasTitle>{name}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {/* {tags.map((tag, id) => (
                    <Tag key={id}>{tag}</Tag>
                  ))} */}
                  <Tag>{language}</Tag>
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={homepage}>Code</ExternalLinks>
                <ExternalLinks href={html_url}>Source</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
