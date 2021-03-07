import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/levelUpModal.module.css';

export function LevelUpModal(){
    const {level, close} = useContext(ChallengesContext)
    
    return(
        <div className = {styles.overlay}>
            <div className = {styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>

                <p>Você alcançou um novo Level.</p>

                <button type = 'button' onClick = {close}>
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
    )
}