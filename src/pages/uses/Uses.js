import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { TechList } from 'components/Techs';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Uses"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Music</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.image-line.com/">FL Studio</Link> is my
                    primary tool for music creation. As a really experienced musician, I
                    wanted to try something new and I found FL Studio to be the best music
                    editor for me. I also used to work with{' '}
                    <Link href="https://www.apple.com/fr/mac/garageband/">
                      Garage Band
                    </Link>{' '}
                    on my IPad Air 2, but I found it to be too limited for my needs.
                  </ListItem>
                  <ListItem>
                    As a musician, I use mainly 3 instruments. I have been playing the
                    piano for 19 years, electric guitare for 5 years that far, and
                    mouthorgan (I kown, it is surprising but I rock that 😂). I also have
                    notions about playing the drums, but I am not really good at it.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI/UX design these days and for managing my APIs. Made the switch from
                    Sketch in 2020 and haven’t looked back. I’ve also created{' '}
                  </ListItem>
                  <ListItem>
                    For any 3D models I use{' '}
                    <Link href="https://www.blender.org/">Blender</Link>. Since 2.8 it’s
                    become way simpler to use and in a lot of ways better than expensive
                    paid tools like 3DS Max or Maya.
                  </ListItem>
                  <ListItem>
                    For any 2D models I use <Link href="https://www.gimp.org/">Gimp</Link>{' '}
                    and <Link href="https://krita.org">Krita</Link>. I am stuffed with a
                    <Link href="https://www.wacom.com/products/wacom-one">
                      Wacom One Pen Tablet
                    </Link>
                    , which is a great tool for drawing.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use{' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>{' '}
                    as my text editor, with the Atom One Dark theme and Operator Mono as
                    my typeface of choice.
                  </ListItem>
                  <ListItem>
                    Firefox is my main browser for both development and general use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> is my front end
                    Javascript library of choice. The component-centric mental model is
                    the first thing that truly made sense to me as a designer.
                  </ListItem>
                  <ListItem>
                    For 3D effects and image shaders I use{' '}
                    <Link href="https://threejs.org/">three.js</Link>. It has a bit of a
                    learning curve but you can do some really powerful stuff with it.
                  </ListItem>
                  <ListItem>
                    For CSS I’ve used a myriad pre-processors and css-in-js solutions like
                    styled-components, but these days I’m using vanilla CSS with{' '}
                    <Link href="https://postcss.org/">PostCSS</Link> to get upcoming CSS
                    features today. I also use{' '}
                    <Link href="https://sass-lang.com/">Sass</Link> and{' '}
                    <Link href="https://tailwindcss.com/">TailWind</Link> for some
                    projects.
                  </ListItem>
                  <ListItem>
                    For Javascript animations I use{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link>, it’s
                    a great way to add spring animations to React and three.js.
                  </ListItem>
                  <ListItem>
                    For Data Analysis, AI and ML, I use{' '}
                    <Link href="https://python.org">Python3</Link> and{' '}
                    <Link href="https://jupyter.org">Jupyter Notebook</Link>. I also aim
                    to use <Link href="https://cplusplus.com/">C++</Link> for some
                    clients.
                  </ListItem>
                  <ListItem>
                    For Grey Hat CyberDefenser, my most used languages are{' '}
                    <Link href="https://python.org">Python3</Link>,{' '}
                    <Link href="https://cplusplus.com/">C / C++</Link> and{' '}
                    <Link href="http://doc.ubuntu-fr.org/bash">Shell / Bash</Link>. I am
                    also really familiar with OsInt tools, Brute Force and Dictionnary
                    attacks. I use Kali Linux as my main OS for CyberDefence, but I also
                    able to use Black Arch and Kali Nethunter for phone.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSection padding="none" className={styles.section}>
            <ProjectSectionContent>
              <ProjectTextRow width="l">
                <ProjectSectionHeading>My Favorite Techs</ProjectSectionHeading>
                <TechList />
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSection>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>CPU</TableHeadCell>
                    <TableCell>14thGen Intel®Core™ i9-14900K @4.4GHZ (6.0 GHZ TURBO) 24Core 32 Threads</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>GPU</TableHeadCell>
                    <TableCell>NVIDIA 3080ti </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Memory</TableHeadCell>
                    <TableCell>G.Skill DDR5 Trident Z5 Neo 2x32Go</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Quadruple Monitor</TableHeadCell>
                    <TableCell>
                      3840x1080(32:9) IPS 250hz AOC Agon  AG493QCX 49INCHES UltraWide Curved
                    </TableCell>
                    <TableCell>
                      2560x1080(21:9) IPS 144hz LG 34WP500 34INCHES UltraWide
                    </TableCell>
                    <TableCell>
                      1920x1080(16:9) ViewSonic Corporation 32INCHES Curved (x2)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Logitech MX Keys</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Razer OROCHI Bluetooth</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptops</TableHeadCell>
                    <TableCell>Dell Latitude 5520 / Acer Nitro 5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Sony XM 5 / Beats Studio Pro / Beats Executive</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Blue Microphone YETI - Logitech</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
