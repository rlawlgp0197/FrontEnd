import axios from 'axios'
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Item = ({item,index}) => {
    const nav = useNavigate()
    /*
    프로필 카드 클릭 시 해당하는 선수의 상세페이지로 이동
    /detail/index
    => useNavigate사용

    */
    return (
        <div className='item-item' onClick={()=>{
            console.log("Detail요청")
            let url = "http://localhost:8089/SpringBoot2/PlayerDetail.do?name="+item.name;
            
            axios.get(url,{name : item.name})
            .then((res)=>{
                console.log(res.data);
            })
            
            nav(`/detail/${index}`)
        }}>
            <img src={"data:image/;base64,"+item.imgSrc}></img>
            <table>
                <tbody>
                    <tr>
                        <td>이름</td>
                        <td>{item.name}</td>
                    </tr>
                    <tr>
                        <td>포지션</td>
                        <td>{item.position}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Item