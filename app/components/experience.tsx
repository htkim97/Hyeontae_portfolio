import {Separator, Link, Flex, Box, Section, Text, Grid, Badge } from '@radix-ui/themes'
import "../../styles/page.scss";
import { EnvelopeClosedIcon, PersonIcon, GitHubLogoIcon, DrawingPinIcon, CornerBottomLeftIcon, CheckIcon,NotionLogoIcon } from '@radix-ui/react-icons'
import Project_1 from './experiences/project1';
import Project_2 from './experiences/project2';
import Project_3 from './experiences/project3'
export default function Experience() {
  return(
    <div className="p-2 mt-10">
    <div style={{textAlign:"center"}}><Text size="6" weight="bold" color="purple" align="center">Experience.</Text></div>

    <br />
    <Separator color="indigo" size="4" />
    <br />
    <br />
    <Flex style={{ margin: "0 20% 0 20%" }}>

      <ul>
        <li><Text size="5" weight="bold" color="gray">(주)인텔로이드</Text>&nbsp;<Badge color="purple">STT</Badge>&nbsp;<Badge color="blue">Voice AI</Badge></li>
        <li style={{ float: "left" }}><Text size="1">2022.04.11 ~ 2023.10.31</Text></li>
      </ul>
    </Flex>
    <Flex style={{ margin: "2% 20% 0 20%" }}>

    <Text as="p" mb="1" size="3">
        회사와 함께 근무하며  AICC 기업 전화와 STT를 이용한 상담 전화 서비스 프로젝트에서 프론트엔드 역할을 맡아, 화면을 구현하고 JavaScript,TypeScript, React, CSS, HTML, jQuery 등의 기술 스택을 사용하여 
        프로젝트를 성공적으로 완료하였습니다.
      </Text>
    </Flex>
    <br />
   <Project_1/>
   <Project_2/>
   <Project_3/>


  </div>
  )
}