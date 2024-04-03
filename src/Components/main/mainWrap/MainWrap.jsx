import React from 'react';
import { Link } from 'react-router-dom';

function MainWrap() {
	return (
		<div className='study_list'>
			<ul>
				<li>
					<Link to='/rock_scissor_paper'>첫번째 프로젝트 : 가위바위보 게임</Link>
				</li>
				<li>
					<Link to='/weather_project'>두번째 프로젝트 : 날씨 프로젝트</Link>
				</li>
				<li>
					<Link to='/router_project'>라우터 배우기 </Link>
				</li>
				<li>
					<Link to='/mall_project'>세번째 프로젝트 : 쇼핑몰 웹 사이트 만들기</Link>
				</li>
				<li>
					<Link to='/redux_project'>리덕스 연습하기</Link>
				</li>
				<li>
					<Link to='/redux_phone_book'>네번째 프로젝트 : 리덕스로 연락처 페이지 만들기</Link>
				</li>
			</ul>
		</div>
	);
}

export default MainWrap;
