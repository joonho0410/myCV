import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Header.module.scss'

const sections = ['Main', 'Profile & Skill', 'Education & Project', 'Other Activity']

const Header = ({children} : {children: any}) => {
    const [sectionIdx, setSectionIdx] = useState(0)
    const [isAnimation, setIsAnimation] = useState(false)

    const sectionIndicatorRef = useRef<HTMLDivElement | null>(null)
    const layoutRef = useRef<HTMLDivElement | null>(null)
    const highlightCurrentSectionRef = useRef<HTMLDivElement | null>(null)

    const clickSection = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement
        const sectionId = Number(target.dataset.sectionid)
        if (sectionId === undefined) return ;
        
        setSectionIdx(sectionId)

    }, [setSectionIdx])

    const wheelSection = (e: React.WheelEvent<HTMLElement>) => {
        if (isAnimation) return ;
        
        if (e.deltaY > 0) {
            if (sectionIdx === sections.length - 1) return ;
            setSectionIdx(sectionIdx + 1) 
        } else if (e.deltaY < 0) {
            if (sectionIdx === 0) return ;
            setSectionIdx(sectionIdx - 1)
        }

        setIsAnimation(true);
        setTimeout(() => {
            setIsAnimation(false)
        }, 1000)
    };
      

    useEffect(() => {
        if (!layoutRef.current) return ;
        
        layoutRef.current.style.transform = `translateY(${-100 * sectionIdx}vh)`
    }, [sectionIdx])

    useEffect(() => {
        if (!sectionIndicatorRef.current || !highlightCurrentSectionRef.current) return ;
        
        const targetChild = sectionIndicatorRef.current.children[sectionIdx] as HTMLSpanElement
        
        if (targetChild) {
            // 자식 요소의 width와 offsetLeft 값 얻기
            const width = targetChild.offsetWidth;
            const offsetLeft = targetChild.offsetLeft;
            const offsetTop = targetChild.offsetTop + targetChild.offsetHeight;
            
            highlightCurrentSectionRef.current.style.width = `${width}px`
            highlightCurrentSectionRef.current.style.left = `${offsetLeft}px`
            highlightCurrentSectionRef.current.style.top = `${offsetTop}px`
          }
    }, [sectionIdx])

    return (
        <>
            <header onClick={clickSection} className={styles.header}>
                <div ref={sectionIndicatorRef} className={styles.indicator}>
                    {sections.map((name, idx) => <span key={name} data-sectionid={idx}> {name} </span>)}
                </div>
                <div ref={highlightCurrentSectionRef} className={styles.highlight}/>
            </header>
            <div ref={layoutRef} className={styles.layout} onWheel={wheelSection}>
                {children}
            </div>
        </>
    )
}

export default Header;