



// 페이지 스타일
import "../styles/page.scss";
import '@radix-ui/themes/styles.css';
import {Section, Grid, } from '@radix-ui/themes'

import Profile from "./components/profile";
import AboutMe from "./components/aboutMe";
import Experience from "./components/experience";
export default function Home() {




  return (

    <>


      <Grid columns="1">

          <Profile />
          <AboutMe />      
          <Experience />

     
      </Grid>
    </>










  );
}
