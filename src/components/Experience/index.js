import React from 'react';
import styled, { keyframes } from 'styled-components';
import { experiences } from '../../data/data';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0 80px 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  padding: 0 24px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ExperienceSection = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Card = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card};
  border: 1px solid #854CE6;
  border-radius: 16px;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: rgba(133, 76, 230, 0.15) 0px 4px 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.6s ease both;
  &:hover {
    transform: translateY(-6px);
    box-shadow: rgba(133, 76, 230, 0.35) 0px 8px 36px;
  }
  @media (max-width: 768px) {
    padding: 20px 18px;
  }
`;

const CardTop = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-start;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
  border-radius: 10px;
  background: #fff;
  padding: 4px;
  object-fit: contain;
  @media (max-width: 600px) {
    height: 48px;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Role = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const Company = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #854CE6;
  margin-top: 2px;
`;

const DateRange = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary + 'bb'};
  margin-top: 4px;
`;

const AchievementBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, rgba(133,76,230,0.18), rgba(200,0,200,0.10));
  border: 1px solid rgba(133,76,230,0.4);
  border-radius: 20px;
  padding: 5px 14px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  width: fit-content;
  margin-top: 4px;
`;

const BulletList = styled.ul`
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BulletItem = styled.li`
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary + 'cc'};
  line-height: 1.65;
`;

const SkillChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Chip = styled.span`
  background: rgba(133, 76, 230, 0.12);
  border: 1px solid rgba(133, 76, 230, 0.4);
  color: #854CE6;
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 500;
`;

const StatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 4px;
`;

const StatBox = styled.div`
  background: linear-gradient(135deg, rgba(133,76,230,0.15), rgba(0,70,209,0.10));
  border: 1px solid rgba(133,76,230,0.3);
  border-radius: 12px;
  padding: 10px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  flex: 1;
  min-width: 140px;
`;

const StatNum = styled.span`
  font-size: 22px;
  font-weight: 800;
  color: #854CE6;
`;

const StatLabel = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Professional Experience</Title>
        <Desc>My journey and contributions in the tech industry.</Desc>

        <ExperienceSection>
            {experiences.map((exp) => (
                <Card key={exp.id}>
                    <CardTop>
                        <CardBody>
                            <Role>{exp.role}</Role>
                            <Company>{exp.company}</Company>
                            <DateRange>{exp.date}</DateRange>
                        </CardBody>
                    </CardTop>

                    {exp.stats && (
                        <StatsRow>
                            {exp.stats.map((stat, i) => (
                                <StatBox key={i}>
                                    <StatNum>{stat.num}</StatNum>
                                    <StatLabel>{stat.label}</StatLabel>
                                </StatBox>
                            ))}
                        </StatsRow>
                    )}

                    <BulletList>
                        {exp.desc.map((bullet, i) => (
                            <BulletItem key={i}>{bullet}</BulletItem>
                        ))}
                    </BulletList>

                    {exp.achievements && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {exp.achievements.map((ach, i) => (
                                <AchievementBadge key={i}>🏆 {ach}</AchievementBadge>
                            ))}
                        </div>
                    )}

                    <SkillChips>
                        {exp.skills.map((skill, i) => (
                            <Chip key={i}>{skill}</Chip>
                        ))}
                    </SkillChips>
                </Card>
            ))}
        </ExperienceSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;
