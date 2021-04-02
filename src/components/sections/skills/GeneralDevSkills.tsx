﻿import React from 'react'
import SkillCollectionLayout from '../../layouts/skillCollectionLayout'
import SkillCard from '../../atoms/skillCard'

// images
import CodeReview from '../../../assets/svgs/undraw_code_review.svg'

const GeneralDevSkills: React.FC = (): React.ReactElement => {
  return (
    <SkillCollectionLayout skillsPosition="left" img={<CodeReview />}>
      <SkillCard title="Scrum">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        dicta, doloremque eius et iste magtatibus odit quis reiciendis sint sit voluptas.
      </SkillCard>
      <SkillCard title="Domain-Driven Design">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        necessitatibus odit quis reiciendis sint sit voluptas.
      </SkillCard>
      <SkillCard title="Git">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        dicta, doloremque eius et iste magni molestias natus necessitatibus odit quis reiciendis sint sit voluptas.
      </SkillCard>
    </SkillCollectionLayout>
  )
}

export default GeneralDevSkills
