import {Separator, Link, Flex, Box, Section, Text, Grid, Badge } from '@radix-ui/themes'
import "../../styles/page.scss";
export default function Introduce() {
  return(
    
    <div className="introduce">
    <Text size="6" weight="bold" color="purple">Introduce.</Text>

    <br />
    <br />
    <Separator color="indigo" size="4" />
    <br />
    <Flex style={{ margin: "0 20% 0 20%" }}>

      <Text as="p" mb="1" size="4">
        AICC 기업 전화와 STT를 이용한 상담 전화 서비스 프로젝트에서 프론트엔드 엔지니어로 경력을 쌓은 김현태입니다. 회사와 함께 근무하며 다양한 프로젝트에서 경험을 쌓았으며 주요 역할을 맡아 프론트엔드 화면을 구현하고 기술 스택으로 JavaScript,TypeScript, React, CSS, HTML, jQuery 등을 사용하여 프로젝트를 성공적으로 완료하였습니다.
      </Text>
    </Flex>
  </div>

  )
}