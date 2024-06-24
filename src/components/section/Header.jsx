import React from 'react'

const Header = () => {
  return (
    <div id='header' role='banner'>
      <div className='pageName'>YOUTUBE Premium</div>
      <br></br>
      <ul className='list1'>
        <li>홈</li>
        <li>Shorts</li>
        <li>구독</li>
        <li>YouTube Music</li>
      </ul>
      <br></br>
      <ul className='list2'>
        <li>내 채널</li>
        <li>시청 기록</li>
        <li>재생목록</li>
        <li>내 동영상</li>
        <li>내 영화</li>
        <li>나중에 볼 동영상</li>
        <li>좋아요 표시한 동영상</li>
        <li>오프라인 저장 동영상</li>
      </ul>
      
    </div>
  )
}

export default Header
