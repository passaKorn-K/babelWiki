// ui/components/App/App.js ปรับปรุงโค๊ดเพื่อเรียกใช้ Header เรากำลังต่อ LEGO
// กันอยู่ครับ ต่อไปนี้เราจะเอาไม่ทุกอย่างมาไว้ในไฟล์เดียวอีกแล้ว Header
// เป็นตัวต่ออีกตัวที่เราต้องแยกออกไป แล้วนำมาประกบกับตัวหลักคือ App

import React, {Component} from 'react'
import Header from './Header'
import styles from './App.scss'

export default class App extends Component {
    render() {
        return (
            <div >
                <Header/>
                <div className='container'>
                    <div className={styles['content']}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
