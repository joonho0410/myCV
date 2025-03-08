import { useEffect, useRef, useState } from "react";
import styles from './Main.module.scss'

const myGoals = ['사용자의 경험을 중요하게 생각하는', '읽기 쉬운 코드를 위해 노력하는', '더 좋은 해결법을 찾기위해 노력하는']

const Main = () => {
    return (
        <section className={styles.main__container}>
            <span className={styles.name}>JEON<br/>JUNHO</span>
            <Main.ProfileDescription/>    
        </section>
    )
}

Main.ProfileDescription = () => {
    const [index, setIndex] = useState(0)
    const textRef = useRef<HTMLSpanElement>(null)

    const typeWords = (ref: React.RefObject<HTMLSpanElement | null>, target: string[], idx: number) => setTimeout(() => {
        if (!ref.current) return ;
        if (idx >= target.length) { setTimeout(() => {
                deleteWords(ref);
            }, 1000);
            return ;
        }
        ref.current.innerHTML += target[idx]
        typeWords(ref, target, idx + 1)
    }, 100)
    
    const deleteWords = (ref: React.RefObject<HTMLSpanElement | null>) => setTimeout(() => {
        if (!ref.current) return ;
        if (ref.current.innerHTML.length === 0) {setIndex((prev) => (prev + 1) % myGoals.length ); return ;}
        ref.current.innerHTML = ref.current.innerHTML.slice(0, -1);
        deleteWords(ref)
    }, 100)

    // 하나씩 늘어나는 효과
    useEffect(() => {
        const id = typeWords(textRef, myGoals[index].split(''), 0)
        return () => clearTimeout(id)
    }, [index])

    return (
        <p className={styles.description__paragraph}>
            <span className={styles.typo} ref={textRef}/><br/>
            프론트엔드 개발자 🚀<br/>
            전준호 입니다.
        </p>
    )
}

export default Main