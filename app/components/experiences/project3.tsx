import {Separator, Link, Flex, Box, Section, Text, Grid, Badge } from '@radix-ui/themes'
import { EnvelopeClosedIcon, PersonIcon, GitHubLogoIcon, DrawingPinIcon, CornerBottomLeftIcon, CheckIcon,NotionLogoIcon } from '@radix-ui/react-icons'

export default function Project_3() {
  return(
    <section className='mt-16 mb-10'>
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
    </section>
  )
}