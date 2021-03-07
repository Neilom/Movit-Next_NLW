import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const {level} = useContext(ChallengesContext)
    
    return(
        <div className = {styles.profileContainer}>
            <img src="https://lh3.googleusercontent.com/ogw/ADGmqu_Ihl_AIqIOBXDtXeYN7cY4ZzVci2FSAqNvtRTSUg=s83-c-mo" alt="Leonardo Schmitt"/>
            <div>
                <strong>Leonardo Schmitt</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                    </p>
            </div>
        </div>

    )
}