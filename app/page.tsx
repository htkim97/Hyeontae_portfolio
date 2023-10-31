"use client";



// 페이지 스타일
import "../styles/page.scss";
import styles from "../styles/utils.module.scss";
import Link from "next/link";
import "../styles/scroll.css";
import '@radix-ui/themes/styles.css';
import { Flex, Box, Section, Text, Grid } from '@radix-ui/themes'
import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'
export default function Home() {




  return (

    <>


      <Grid columns="1">
        <Section>

          <div style={{ display: "flex", justifyContent: "center" }}>

            <ul>

              <li><Text size="7" weight="bold">Hyeontae | 커피를 좋아하는 개발자</Text></li>
              <br />
              <li><Text size="2">1년차, 커피를 좋아하는 프론트엔드 개발자 김현태 입니다.</Text></li>

            </ul>
          </div>
          <br/>
          <div style={{ display: "flex", justifyContent: "center" }}>

          <br />
          <div style={{ display: "flex"}}>
            <Box className="profile" >
              <img src="img/user.jpg" width="300px" />
            </Box>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Box className="profile">
              <br />
              <ul>
                <li><Text size="7" weight="bold" color="purple">Contact.</Text></li>
                <br />
                <li><Text size="1">Email : cesc231@naver.com</Text></li>
                <li><Text size="1">Phone : 01052017704</Text></li>
              </ul>
              <br />
              <br />
              <ul>
                <li><Text size="7" weight="bold" color="purple">Channel.</Text></li>
                <br />
                <li><Text size="1">GitHub : https://github.com/htkim97</Text></li>
                <li><Text size="1">Blog : https://hyeontae-portfolio.vercel.app/</Text></li>
              </ul>
            </Box>

          </div>
          </div>
        </Section>

        <Section>
          <div className="aboutMe">
            <Text size="6"weight="bold" color="purple">About Me.</Text>
            <br />
            <br />
            <hr />
            <Text as="p" mb="5" size="4">
              저는 프론트엔드 엔지니어로서 다양한 프로젝트에서 경험을 쌓아왔으며,
              기술적으로 능숙하게 프론트엔드 화면을 개발하고 사용자 경험을 개선하는 역할을 수행했습니다.
              또한, 팀원과의 협업과 프로젝트 관리 능력을 향상시키며 프로젝트의 성과를 극대화하는 데 기여하였습니다.
              앞으로도 기술적인 역량을 더욱 향상시키고, 새로운 도전을 통해 성장하며 기여하고자 합니다.
            </Text>
          </div>

          <br />
          <br />
          <br />

          <div className="introduce">
            <Text size="6" weight="bold" color="purple">Introduce.</Text>

            <br />
            <br />
            <hr />

            <Text as="p" mb="5" size="4">
            AICC 기업 전화와 STT를 이용한 상담 전화 서비스 프로젝트에서 프론트엔드 엔지니어로 경력을 쌓은 김현태입니다. [인텔로이드]와 함께 근무하며 다양한 프로젝트에서 경험을 쌓았으며 주요 역할을 맡아 프론트엔드 화면을 구현하고 기술 스택으로 JavaScript, React, CSS, HTML, jQuery 등을 사용하여 프로젝트를 성공적으로 완료하였습니다.
            </Text>
          </div>

          <br />
          <br />
          <br />

          <div className="experience">
            <Text size="6" weight="bold" color="purple">Experience.</Text>

            <br />
            <br />
            <hr />

            <Text as="p" mb="5" size="4">
              저는 프론트엔드 엔지니어로서 다양한 프로젝트에서 경험을 쌓아왔으며,
              기술적으로 능숙하게 프론트엔드 화면을 개발하고 사용자 경험을 개선하는 역할을 수행했습니다.
              또한, 팀원과의 협업과 프로젝트 관리 능력을 향상시키며 프로젝트의 성과를 극대화하는 데 기여하였습니다.
              앞으로도 기술적인 역량을 더욱 향상시키고, 새로운 도전을 통해 성장하며 기여하고자 합니다.
            </Text>
          </div>
        </Section>
      </Grid>
    </>










  );
}
