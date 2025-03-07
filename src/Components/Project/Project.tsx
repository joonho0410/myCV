import { useCallback, useState } from 'react'
import styles from './Project.module.scss'
import { ProjectData as pData } from './Data'

type ProjectNames = '42 Seoul' | '42 GG' | 'Hyper Tube'

type ProjectContentsType = {
	thumbnail: string;
  projectPeriod: string;  // 프로젝트 기간 (예: "2021년 1월 - 2021년 6월")
  role: string;           // 역할 (예: "Frontend Developer")
  tasks: string[];        // 한일 (예: ["UI 개발", "API 연동", "버그 수정"])
  description: string;    // 상세설명 (예: "이 프로젝트는 웹 애플리케이션 개발을 위한 전반적인 작업을 포함합니다.")
};

export type ProjectDataType = {
  name: ProjectNames            // 프로젝트 이름
  contents: ProjectContentsType;  // 프로젝트 관련 세부 내용
};


const projectName: ProjectNames[] = ['42 Seoul', '42 GG', 'Hyper Tube']
const projectData: ProjectDataType[] = pData

const Project = () => {
	const [selected, setSelected] = useState<ProjectNames>('42 Seoul')
	const projectInfo = projectData.find((e) => e.name === selected)?.contents

	return (
		<section className={styles.project}>
			<h2> 프로젝트 및 교육 </h2>
			<div className={styles.project__contents}>
				<div>
					<Project.Tab selected={selected} setSelected={setSelected}/>
					<Project.Description projectInfo={projectInfo!}/>
				</div>
			</div>
		</section>
	)
}

///////////////////////
//// Tab
///////////////////////

const Tab = ({ selected, setSelected } : { selected: ProjectNames, setSelected: React.Dispatch<React.SetStateAction<ProjectNames>>}) => {
	const handleClick = useCallback((e:React.MouseEvent<HTMLElement>) => {
		if (e.target instanceof HTMLElement) {
			const id = e.target.dataset.id
			if (!id) return ;
			setSelected(id as ProjectNames)
		}
	}, [setSelected])

	return (
		<ul className={styles.tab} onClick={handleClick}>
			{projectName.map((name) => <li key={name} data-id={name} className={selected === name ? styles.tab__button__selected : styles.tab__button__default}> {name} </li>)}
		</ul>
	)
}

///////////////////////
//// Description
///////////////////////

const Description = ({ projectInfo } : {projectInfo: ProjectContentsType}) => {
	const {thumbnail, tasks, projectPeriod, role, description} = projectInfo

	return (
		<div className={styles.description}>
			<img className={styles.descirption__thumbnail} src={thumbnail}/>
			<ul>
				<li> 기간 : {projectPeriod} </li>
				<li> 역할 : {role} </li>
				<li> 한 일 </li>
					<ul>
						{tasks.map((e) => <li key={e}> {e} </li>)}
					</ul>
			</ul>
			<p> {description} </p>
		</div>
	)
}

Project.Tab = Tab;
Project.Description = Description

export default Project