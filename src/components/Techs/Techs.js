const techs = [
  {
    name: 'C',
    logo: 'logos/c-plain.png',
    url: 'https://en.wikipedia.org/wiki/C_(programming_language)',
  },
  {
    name: 'Node.js',
    logo: 'logos/nodejs-plain.png',
    url: 'https://nodejs.org/',
  },
  {
    name: 'PHP',
    logo: 'logos/php-plain.png',
    url: 'https://www.php.net/',
  },
  {
    name: 'Python',
    logo: 'logos/python-plain.png',
    url: 'https://www.python.org/',
  },
  {
    name: 'Java',
    logo: 'logos/java-plain.png',
    url: 'https://www.java.com/en/',
  },
  {
    name: 'HTML5',
    logo: 'logos/html-plain.png',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },
  {
    name: 'CSS3',
    logo: 'logos/css3-plain.png',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    logo: 'logos/javascript-plain.png',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'PostgreSQL',
    logo: 'logos/postgresql-plain.png',
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'SQLite',
    logo: 'logos/sqlite-plain.png',
    url: 'https://www.sqlite.org/index.html',
  },
  {
    name: 'MySQL',
    logo: 'logos/mysql-plain.png',
    url: 'https://www.mysql.com/',
  },
  {
    name: 'MongoDB',
    logo: 'logos/mongo-plain.png',
    url: 'https://www.mongodb.com/',
  },
  {
    name: 'Linux',
    logo: 'logos/linux-plain.png',
    url: 'https://www.linux.org/',
  },
  {
    name: 'Ubuntu',
    logo: 'logos/ubuntu-plain.png',
    url: 'https://www.ubuntu-fr.org/',
  },
  {
    name: 'Kali',
    logo: 'logos/kali-plain.png',
    url: 'https://www.kali.org/',
  },
  {
    name: 'Parrot',
    logo: 'logos/parrot-plain.png',
    url: 'https://www.parrotsec.org/',
  },
  {
    name: 'Black Arch',
    logo: 'logos/blackarch-plain.png',
    url: 'https://www.blackarch.org/',
  },
  {
    name: 'Nginx',
    logo: 'logos/nginx-original.png',
    url: 'https://www.nginx.com/',
  },
  {
    name: 'Apache',
    logo: 'logos/apache-plain.png',
    url: 'https://httpd.apache.org/',
  },

  {
    name: 'Git',
    logo: 'logos/git-plain.png',
    url: 'https://git-scm.com/',
  },
  {
    name: 'Docker',
    logo: 'logos/docker-plain.png',
    url: 'https://www.docker.com/',
  },

  {
    name: 'Spring',
    logo: 'logos/spring-plain.png',
    url: 'https://spring.io/',
  },

  {
    name: 'Express.js',
    logo: 'logos/express-original.png',
    url: 'https://expressjs.com/',
  },
  {
    name: 'Socket.io',
    logo: 'logos/socketio-plain.png',
    url: 'https://socket.io/',
  },
  {
    name: 'Electron.js',
    logo: 'logos/electron-original.png',
    url: 'https://www.electronjs.org/',
  },
  {
    name: 'React',
    logo: 'logos/react-original.png',
    url: 'https://reactjs.org/',
  },
  {
    name: 'Django',
    logo: 'logos/django-plain.png',
    url: 'https://djangoproject.com/',
  },
  {
    name: 'Three.js',
    logo: 'logos/threejs-original.png',
    url: 'https://threejs.org/',
  },
  {
    name: 'Bootstrap',
    logo: 'logos/bootstrap-plain.png',
    url: 'https://getbootstrap.com/',
  },
  {
    name: 'Tailwind',
    logo: 'logos/tailwindcss-plain.png',
    url: 'https://tailwindcss.com/',
  },
];

import './Techs.module.css';
import { Table, TableBody, TableCell, TableRow } from 'components/Table';

function TechTitle() {
  return (
    <h1 className="font-extrabold text-4xl md:text-6xl p-3 bg-background-accent w-fit -translate-x-3">
      I am excited to learn new techs
    </h1>
  );
}
/*
function childrenGenerator() {
  let container = document.getElementById('containerTechs');
  container.setAttribute('style', 'width: 100% !important');
  for (let i = 0; i < techs.length; i++) {
    let childrencontainer = document.createElement('div');
    childrencontainer.setAttribute('style', 'width: 20% !important');
    childrencontainer.setAttribute('id', 'containerTech' + techs[i].name);
    let link = document.createElement('a');
    link.setAttribute('href', techs[i].url);
    let logo = 'http://localhost:3000/' + techs[i].logo;
    let img = document.createElement('img');
    img.setAttribute('src', logo);
    link.appendChild(img);
    childrencontainer.appendChild(link);
  }
}
*/
function TechDescription() {
  return (
    <div className="text-md tracking-tight md:text-xl p-6 bg-background-accent-darker w-full 2xl:w-5/6 space-y-3">
      <p>
        Some guy on Linkedin once said :{' '}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-content-primary to-content-primary-accent">
          languages and frameworks do not matter.
        </span>
        <br />
        While his post is certainly inspired by a motivational quote from Facebook,{' '}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-content-primary to-content-primary-accent">
          he is right
        </span>
        .
      </p>

      <p>
        Software engineering is not bound to a specific tool.
        <br />
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-content-primary to-content-primary-accent">
          However
        </span>
        , mastering the right{' '}
        <span className="line-through decoration-3 decoration-content-secondary-accent">
          deprecated JavaScript
        </span>{' '}
        framework for the job does save a lot of time.
      </p>

      <p>
        I am{' '}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-content-primary to-content-primary-accent">
          always learning new things
        </span>
        , but these are some of my{' '}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-content-primary to-content-primary-accent">
          favorite
        </span>{' '}
        languages, frameworks and tools I use for building stuff.
      </p>

      <p>
        Feel free to check out my{' '}
        <a
          href={'https://github.com/maximeabade'}
          target={'_blank'}
          rel="noreferrer"
          className="font-bold text-xl mx-1 cursor-pointer"
        >
          GitHub
        </a>{' '}
      </p>
    </div>
  );
}
export const TechList = () => {
  return (
    <div>
      <TechTitle />
      <TechDescription />
      <Table>
        <TableBody>
          {techs.map((tech, index) => (
            <TableRow key={'tech-' + index} className={'myRow'}>
              <TableCell>
                <a href={tech.url}>
                  <img
                    src={'https://maximeabade.com/' + tech.logo}
                    alt={tech.name}
                    className="tech-img"
                    style={{
                      maxWidth: '4em',
                      maxHeight: '100px',
                      textAlign: 'left',
                    }}
                  />
                </a>
              </TableCell>
              <TableCell>
                {' '}
                <a href={tech.url}>{tech.name}</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
