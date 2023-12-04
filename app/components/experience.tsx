import {Separator, Link, Flex, Box, Section, Text, Grid, Badge } from '@radix-ui/themes'
import "../../styles/page.scss";
import { EnvelopeClosedIcon, PersonIcon, GitHubLogoIcon, DrawingPinIcon, CornerBottomLeftIcon, CheckIcon,NotionLogoIcon } from '@radix-ui/react-icons'
export default function Experience() {
  return(
    <div className="experience">
    <div style={{textAlign:"center"}}><Text size="6" weight="bold" color="purple" align="center">Experience.</Text></div>

    <br />
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
    <br />
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
    <br />
    <br />
    <br />
    <br />
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
    <br />
    <br />
    <br />
    <br />
    <Flex style={{ margin: "0 20% 0 21%" }}>
      <ul>
        <li><Text as="p" mb="1" size="3" weight="bold" style={{display:"flex"}}><CornerBottomLeftIcon/>STT를 이용한 상담 전화 서비스 프로젝트</Text></li>
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
      <li><Text as="p" mb="1" size="1" style={{display:"flex"}}><CheckIcon/>&nbsp;상담 전화를 받을 때 통화 내용을 STT (음성 인식) 기술을 이용하여 텍스트 형태로 기록하고 녹음하는 서비스를 구현하였습니다.</Text></li>
      <br />
      <li><Text as="p" mb="1" size="1" style={{display:"flex"}}><CheckIcon/>&nbsp;로그인 화면과 사용자 정보 조회 화면을 개발하여 사용자가 서비스를 편리하게 이용할 수 있도록 했습니다.</Text></li>
      <br />
      <li><Text as="p" mb="1" size="1" style={{display:"flex"}}><CheckIcon/>&nbsp;사용자 정보 조회 화면에서는 통화 목록을 조회하고 날짜 별로 검색할 수 있으며, 결과를 엑셀 파일로 다운로드할 수 있는 기능을 추가했습니다.</Text></li>
      <br />
      <li><Text as="p" mb="1" size="1" style={{display:"flex"}}><CheckIcon/>&nbsp;상담 내용에 대한 MP3 파일을 개별 다운로드 또는 압축 다운로드할 수 있는 기능을 구현하여 파일 관리를 용이하게 했습니다.</Text></li>
       <br />
       <li><Text as="p" mb="1" size="1" style={{display:"flex"}}><CheckIcon/>&nbsp;사용자는 상담 기록을 쉽게 조회 할 수 있고, 파일 녹취파일 (MP3) 및 정보 기록 (xlsx) 들을 관리 할 수 있습니다.</Text></li>
    
      </ul>

    </Flex>
    <br />
    <br />
    <Flex style={{ margin: "0 10% 0 22%"}}>
      <Text size="2" style={{display:"flex"}}><NotionLogoIcon/>&nbsp;
        <a href="https://three-archer-397.notion.site/STT-94d297c44b5b437f9b0ee6c855a680f4?pvs=4">STT를 이용한 상담 전화 서비스 프로젝트</a>
      </Text>
      
    </Flex>


  </div>
  )
}