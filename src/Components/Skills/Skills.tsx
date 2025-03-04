import styles from './Skills.module.scss'

const languages = ['JavaScript' , 'TypeScript']
const devTools = ['React.js', 'Next.js', 'Docker']
const collaboTools= ['Slack', 'Notion', 'Pigma'] 

const List = ({name, array} : {name: string, array: string[]}) => {
	return (
		<>
			<li> {name} </li>
				<ul>
					{array.map((ele) => <li key={ele}> {ele} </li>)}			
				</ul>
		</>
	)
}
const Skills = () => {
	return (
		<div className={styles.skills__container}>
			<h2> Skills </h2>
			<ul>
				<List name={'언어'} array={languages}/>
				<List name={'기술'} array={devTools}/>
				<List name={'협업 도구'} array={collaboTools}/>
			</ul>
		</div>
	)
}

export default Skills