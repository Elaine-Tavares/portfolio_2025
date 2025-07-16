import styles from './Skills.module.css';
import { FaReact, FaJs, FaCss3Alt, FaPhp, FaDatabase, FaGitAlt } from 'react-icons/fa';

export default function Skills() {
   const skills = [
    { name: 'React', icon: <FaReact color="#61DAFB" size={40} /> },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" size={40} /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#2965F1" size={40} /> },
    { name: 'PHP', icon: <FaPhp color="#8892BE" size={40} /> },
    { name: 'MySQL', icon: <FaDatabase color="#00618A" size={40} /> },
    { name: 'Git', icon: <FaGitAlt color="#F05032" size={40} /> },
  ];
  return (
     <section className={styles.skillsSection} id="skills">
      <h2 className='titulo'>Minhas Habilidades</h2>
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
