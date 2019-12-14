import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
	const [value, setValue] = useState('');

	const onChange = useCallback(e => {
		setValue(e.target.value);
	}, []);

	const onSubmit = useCallback(
		e => {
			onInsert(value);
			setValue(''); // vlaue 값 초기화

			// submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.

			// 이름 방지하기 위해 이 함수를 호출합니다.
			e.preventDefault();
		},
		[onInsert, value],
	);

	return (
		<form className="TodoInsert" onSubmit={onSubmit}>
			<input
				value={value}
				onChange={onChange}
				placeholder="할 일을 입력하세요"
			/>
			<button type="submit">
				<MdAdd />
			</button>
		</form>
	);
};

export default TodoInsert;
