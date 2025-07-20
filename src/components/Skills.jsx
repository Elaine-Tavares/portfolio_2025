import { FaReact, FaJs, FaCss3Alt, FaPhp, FaDatabase, FaGithub, FaHtml5 } from 'react-icons/fa';
import styles from './Skills.module.css';

export default function Skills() {
   const skills = [
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" size={40} /> },
    { name: 'CSS', icon: <FaCss3Alt color="#2965F1" size={40} /> },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" size={40} /> },
    { name: 'React', icon: <FaReact color="#61DAFB" size={40} /> },
    { name: 'PHP', icon: <FaPhp color="#8892BE" size={40} /> },
    { name: 'MySQL', icon: <FaDatabase color="#00618A" size={40} /> },
    { name: 'GitHub', icon: <FaGithub color="#F05032" size={40} /> }
  ];
  
  return (
     <section className={styles.skillsSection} id="skills">
      <header>
        <h1>Minhas Habilidades</h1>
      </header>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill} title={skill.name}>
            <div className={styles.skillIcon}>{skill.icon}</div>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
