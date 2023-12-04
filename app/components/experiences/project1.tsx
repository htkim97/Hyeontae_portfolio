import {Separator, Link, Flex, Box, Section, Text, Grid, Badge } from '@radix-ui/themes'
import { EnvelopeClosedIcon, PersonIcon, GitHubLogoIcon, DrawingPinIcon, CornerBottomLeftIcon, CheckIcon,NotionLogoIcon } from '@radix-ui/react-icons'
export default function Project_1() {

    return(
        <section className='mt-4'>
         <Flex style={{ margin: "0 20% 0 21%" }}>
      <ul>
        <li><Text as="p" mb="1" size="3" weight="bold" style={{display:"flex"}}><CornerBottomLeftIcon/>AICC 기업 전화 프로젝트 (Demo Page.)</Text></li>
        <li>
        <Badge color="purple">React</Badge>&nbsp;
        <Badge color="purple">JavaScript</Badge>&nbsp;
        <Badge color="purple">CSS</Badge>&nbsp;
        <Badge color="purple">AXIOS</Badge>&nbsp;
        </li>
      </ul>
    </Flex>
    <br />
    <Flex style={{ margin: "0 20% 0 22%" }}>
      <ul>
        <li>
          <Text as="p" mb="1" size="2" weight="bold">주요 업무 및 성과 : </Text>
        </li>
      </ul>
    </Flex>
    <br />
    <Flex align="start" style={{ margin: "0 10% 0 22%"}}>
      <ul>
      <li><Text as="p" mb="1" size="1" style={{display:"flex"}}><CheckIcon/>&nbsp;AICC 전화와 연동하여 웹 화면을 통한 일반 전화 및 수신 가능한 프론트엔드 화면을 설계 및 구현했습니다.</Text></li>
      <br />
      <li><Text as="p" mb="1" size="1" style={{display:"flex"}}><CheckIcon/>&nbsp;React를 이용하여 다양한 기능을 가진 화면을 개발하였고, 카테고리 2가지의 페이지로 구성했습니다.</Text></li>
      <br />
      <li><Text as="p" mb="1" size="1" style={{display:"flex"}}><CheckIcon/>&nbsp;서버와의 통신을 위해 axios를 활용하여 데이터를 주고받았으며, CORS 방지를 위해 http-proxy-middleware 모듈을 사용하였습니다.</Text></li>
      <br />
      <li><Text as="p" mb="1" size="1" style={{display:"flex"}}><CheckIcon/>&nbsp;고객 정보 조회, 메모장, 고객 검색, 수 발신 등 다양한 기능을 갖춘 화면을 구현했으며, 사용자 경험을 향상 시키기 위해 다양한 기능을 추가했습니다.</Text></li>
       <br />
      <li><Text as="p" mb="1" size="1" style={{display:"flex"}}><CheckIcon/>&nbsp;사용자는 웹 화면에서 전화를 걸며 동시에 메모를 남길 수 있어 상담 기록이 쉽게 관리됩니다.</Text></li>
      </ul>

    </Flex>
    <br />
    <br />
    <Flex style={{ margin: "0 10% 0 22%"}}>
      <Text size="2" style={{display:"flex"}}><NotionLogoIcon/>&nbsp;
        <a href="https://three-archer-397.notion.site/AICC-Demo-a8e32e185cc64c71b23eb12475632b30?pvs=4">AICC 기업 전화 프로젝트 (Demo Page.) </a>
      </Text>
      
    </Flex>
        </section>
    )
  
}