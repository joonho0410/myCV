import { createContext, useContext, useRef, useState } from 'react'
import styles from './Slider.module.scss'
import data from './data'

type SlideContextType = {
	index: number,
	setIndex: React.Dispatch<React.SetStateAction<number>>,
	slideData: any[]
}

const SlideDataContext = createContext<null | SlideContextType>(null);

const Slider = () => {
	const [index, setIndex] = useState(0)
	const slideData = data;

	return (
		<div className={styles.contents__container}>
			<SlideDataContext.Provider value={{index, setIndex, slideData}}>
				<Slider.SlideBar/>
				<Slider.Indicator/>
			</SlideDataContext.Provider>
		</div>
	)
}
////////////
// SliderBar
////////////

const SlideBar = () => {
	const [isMoved, setIsMoved] = useState(false);
	const { index, setIndex, slideData } = useContext(SlideDataContext)!
	const sliderRef = useRef<null | HTMLDivElement>(null)
	const len = slideData.length
	const slideContents = [slideData[(index - 1 + len) % len ], slideData[index], slideData[(index + 1) % len]]

	const clickBack = () => {
		if (!sliderRef.current) return ;
		if (isMoved) return;
		sliderRef.current.style.transform = 'translateX(0px)';
		setIsMoved(true)

		setTimeout(() => {
			setIndex((index - 1 + slideData.length) % slideData.length)
			setIsMoved(false)
			if (!sliderRef.current) return ;
		}, 1000)
	}

	const clickForward = () => {
		if (!sliderRef.current) return ;
		if (isMoved) return;
		sliderRef.current.style.transform = 'translateX(-1200px)';
		setIsMoved(true)

		setTimeout(() => {
			setIndex((index + 1) % slideData.length)
			setIsMoved(false)
			if (!sliderRef.current) return ;
		}, 1000)
	}

	return (
		<div className={styles.slideBar}>
			<div className={styles.controlBar}>
				<button onClick={clickBack}> left </button>
				<button onClick={clickForward}> right </button>
			</div>
			<div className={styles.slideBar__window}>
				<div key={index} ref={sliderRef} className={styles.slideBar__slider}> 
					{ slideContents.map((e) => <img key={e.id} src={e.imageUrl}/>) }
				</div>
			</div>
		</div>
	)
}

////////////
// Indicator
////////////

const Indicator = () => {
  const { index, slideData } = useContext(SlideDataContext)!

  return (
    <div className={styles.indicator}>
      {slideData.map((_, idx) => (
        <span 
          key={idx} 
          className={`${styles.indicator__span} ${idx === index ? styles.indicator__span__active : styles.indicator__span}`} // 현재 인덱스에는 active 클래스 추가
        />
      ))}
    </div>
  )
}

Slider.SlideBar = SlideBar
Slider.Indicator = Indicator

export default Slider