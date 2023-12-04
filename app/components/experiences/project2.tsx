import {Separator, Link, Flex, Box, Section, Text, Grid, Badge } from '@radix-ui/themes'
import { EnvelopeClosedIcon, PersonIcon, GitHubLogoIcon, DrawingPinIcon, CornerBottomLeftIcon, CheckIcon,NotionLogoIcon } from '@radix-ui/react-icons'
export default function Project_2() {
  return(
    <section className='mt-16'>
    <Flex style={{ margin: "0 20% 0 21%" }}>
      <ul>
        <li><Text as="p" mb="1" size="3" weight="bold" style={{display:"flex"}}><CornerBottomLeftIcon/>AICC 기업전화 관리자 페이지 (Front & Back)</Text></li>
        <li>
        <Badge color="purple">React</Badge>&nbsp;
        <Badge color="purple">TypeScript</Badge>&nbsp;
        <Badge color="purple">CSS</Badge>&nbsp;
        <Badge color="purple">AXIOS</Badge>&nbsp;
        <Badge color="blue">NestJS</Badge>&nbsp;
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
      <li><Text as="p" mb="1" size="1" style={{display:"flex"}}><CheckIcon/>&nbsp;기업전화 관리자 페이지로 회원 관리에 대한 프론트엔트 화면 및 백엔드 기능을 구현했습니다. </Text></li>
      <br />
      <li><Text as="p" mb="1" size="1" style={{display:"flex"}}><CheckIcon/>&nbsp;React를 이용하여 구현했으며, 카테고리 4가지의 페이지로 구성했습니다. [ 회원관리, 번호관리, 포인트/결제, 통화발신료 ]</Text></li>
      <br />
      <li><Text as="p" mb="1" size="1" style={{display:"flex"}}><CheckIcon/>&nbsp;서버와의 통신을 위해 axios를 활용하여 데이터를 주고받았으며, CORS 방지를 위해 http-proxy-middleware 모듈을 사용하였습니다.</Text></li>
      <br />
      <li><Text as="p" mb="1" size="1" style={{display:"flex"}}><CheckIcon/>&nbsp;회원관리, 번호관리, 포인트/결제, 통화발신료 등 관리자가 회원들을 관리하기 위한 기능들을 구현했습니다.</Text></li>
       <br />
      </ul>

    </Flex>
    <br />
    
    <Flex style={{ margin: "0 10% 0 22%"}}>
      <Text size="2" style={{display:"flex"}}><NotionLogoIcon/>&nbsp;
        <a href="https://three-archer-397.notion.site/810df0875be2441db7862eb688cb4ef7?pvs=4">AICC 기업 전화 프로젝트</a>
      </Text>
      
    </Flex>
    </section>
  )
}