# 1. Login

- `LocalStorage` (예를 들어 크롬 로컬 저장소) 에 저장된 JWT Token을 가지고 있다가, API요청이 생길때 마다 자동으로 `Authorization: Bearer <token>` Header에 붙혀서 사용

    하지만 XSS 공격에 취약하기 때문에 `HTTPOnly 쿠기 인증` 방식을 사용하기도 한다

# 2. 