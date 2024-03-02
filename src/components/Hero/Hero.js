import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
        I'm Zaryab Aslam, I'm a Full Stack Developer from Pakistan, with experience in ReactJS, NextJS, MongoDB, Node, Express and dynamic Commerce StoreFront. Currently, I am working in Systemsltd as a FullStack Developer. I'm passionate about contributing to open-source projects and learning new skills.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/Zaryab_CV.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
