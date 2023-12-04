import {Separator, Link, Flex, Box, Section, Text, Grid, Badge } from '@radix-ui/themes'
import "../../styles/page.scss";
export default function aboutMe() {
  return(
    <div className="aboutMe">
            <Text size="6" weight="bold" color="purple">About Me.</Text>
            <br />
            <br />
            <Separator color="indigo" size="4" />
            <br />
            <Flex style={{ margin: "0 20% 0 20%" }}>
              <Text as="p" mb="1" size="4">
                저는 프론트엔드 엔지니어로서 다양한 프로젝트에서 경험을 쌓아왔으며,
                기술적으로 능숙하게 프론트엔드 화면을 개발하고 사용자 경험을 개선하는 역할을 수행했습니다.
                또한, 팀원과의 협업과 프로젝트 관리 능력을 향상시키며 프로젝트의 성과를 극대화하는 데 기여하였습니다.
                앞으로도 기술적인 역량을 더욱 향상시키고, 새로운 도전을 통해 성장하며 기여하고자 합니다.
              </Text>
            </Flex>
          </div>
  )
}