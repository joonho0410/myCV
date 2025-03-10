import styles from './ProfileAndSkills.module.scss'

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

/////////////
/// Profile
///
const Profile = () => {

	return (
		<div className={styles.profile__container}>
			<div className={styles.profile__image}/>
			<span>
				최근에 TS, JS, React, PS에 흥미를 갖고 Challenge, Project, 책 등을 통해 학습하고 있습니다.
			</span>
			<a href='https://github.com/joonho0410' target='_blank'> Github </a>
			<a href='https://naver.com' target='_blank'> Blog </a>
		</div>
	)
}

/////////////////
/// Contents
///
const timeLineContents = [
	{ time: '2014. 03', text: '대학교 입학' },
	{ time: '2018. 02', text: '대학교 졸업' },
	{ time: '2019. 05', text: '42Seoul 시작' },
	{ time: '2020. 07', text: '42Seoul 수료' },
	{ time: '2021. 10', text: '422GG Project' },
	{ time: '2022. 01', text: 'HyperTube Project' }
  ]  

const skillSetContents = [
    { path: 'docker.svg', text: 'Docker' },
    { path: 'html5.svg', text: 'Html5' },
    { path: 'javaScript.svg', text: 'JavaScript' },
    { path: 'nextJS.svg', text: 'Next.js' },
    { path: 'reactJS.svg', text: 'React.js' },
    { path: 'sass.svg', text: 'Sass' },
    { path: 'typeScript.svg', text: 'TypeScript' }
]


const Contents = () => {
	
	return (
		<div className={styles.contents__container}>
			<div className={styles.timeLine__container}>
				<span className={styles.title}> Time Line </span>
				<div className={styles.timeLine}>
				{
					timeLineContents.map((content) => { return (
						<span key={content.text} className={styles.timeLine__dot}>
							<span className={styles.timeLine__time}> {content.time} </span>
							<span className={styles.timeLine__text}> {content.text} </span>
						</span>
					)})
				}
				</div>
			</div>
			<div className={styles.skillSet__container}>
				<span className={styles.title}> Skill Sets </span>
				<div className={styles.skillSet__box}>
					{skillSetContents.map((content) => (
						<div key={content.text} className={styles.skill}>
							<img width={48} height={48} src={`./skillSetImage/${content.path}`}/>
							<span> {content.text} </span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

ProfileAndSkills.Profile = Profile
ProfileAndSkills.Contents = Contents

export default ProfileAndSkills