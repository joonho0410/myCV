import styles from './ProfileAndSkills.module.scss'

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

const ProfileAndSkills = () => {
	return (
		<section className={styles.section__container}>
			<h2> Profile & Skills </h2>
			<div className={styles.section__presentation}>
				<ProfileAndSkills.Profile/>
				<ProfileAndSkills.Contents/>
			</div>
		</section>
	)
}

const Profile = () => {

	return (
		<div className={styles.profile__container}>
			<div className={styles.profile__image}/>
			<span> 뭔가의 소개글을 좀 적어놓으면 안 비어 보일까? </span>
			<a href='https://github.com/joonho0410' target='_blank'> Github </a>
			<a href='https://naver.com' target='_blank'> Blog </a>
		</div>
	)
}

const Contents = () => {
	
	return (
		<div className={styles.contents__container}>
			<div className={styles.timeLine__container}>
				<span className={styles.timeLine__dot}>
					<span className={styles.timeLine__text}> 대학교 입학 </span>
				</span>
				<span className={styles.timeLine__dot}>
					<span className={styles.timeLine__text}> 대학교 졸업</span>
				</span>
				<span className={styles.timeLine__dot}>
					<span className={styles.timeLine__text}> 42Seoul 시작</span>
				</span>
				<span className={styles.timeLine__dot}>
					<span className={styles.timeLine__text}> 42Seoul 수료</span>
				</span>
			</div>
			<div className={styles.contents__skillSet}>
				Skill Container
			</div>
		</div>
	)
}

ProfileAndSkills.Profile = Profile
ProfileAndSkills.Contents = Contents

export default ProfileAndSkills