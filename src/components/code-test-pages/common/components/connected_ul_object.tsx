import { createContext, ReactNode, useState } from "react";
import styles from '../test-page-common-styles.module.css'

const jwtContextInit: { jwt: string, setJwt: any } = {jwt: '', setJwt: null}

export const JwtProvider = createContext(jwtContextInit);

function ConnectedUl(areas: ReactNode[]) {

    const [jwt, setJwt] = useState('');

    return (
        <JwtProvider.Provider value={{ jwt, setJwt }}>
            {
                areas.map((area: ReactNode, index: number) => {
                    return <div key={index} className={styles.connected_ul_li_container}>
                        <div className={styles.connected_ul_bullet}>
                            <div className={styles.connected_ul_bullet_marker} />
                        </div>
                        <div className={styles.connected_ul_li}>{area}</div>
                    </div>
                })
            }
        </JwtProvider.Provider>
    )
}

export default ConnectedUl;
