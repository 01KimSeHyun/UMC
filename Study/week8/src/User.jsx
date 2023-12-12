import React, { useState, useEffect } from 'react';

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
      const getData = async () => {
          try {
              // 요청 시작할 때 error와 users 초기화
              setError(null);
              setUsers(null);
              // loading 상태를 true로 변경하여, 현재 loading 중임을 표시
              setLoading(true);
              const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
              );
              const body = await response.parse()
              const result = await body.data;
              return result
          } catch (error) {
              setError(error);
          } finally {
              // 성공, 실패에 상관없이 요청이 종료됐으므로 loading 상태를 다시 false로 변경
              setLoading(false);
          }
  }
  
    useEffect(() => {
          getData();
    }, []);
  
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
    );
  }
  
  export default Users;