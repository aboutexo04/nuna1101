# 🔢 Zustand Counter

> React와 Zustand를 활용한 상태 관리 카운터 애플리케이션

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0.8-443E38?style=flat-square&logo=npm&logoColor=white)](https://zustand-demo.pmnd.rs/)

## 📖 소개

이 프로젝트는 **Zustand**를 사용한 전역 상태 관리의 기본 개념을 학습하기 위한 카운터 애플리케이션입니다. 간단하면서도 효과적인 상태 관리 패턴을 구현하여, 여러 컴포넌트 간의 상태 공유 방법을 보여줍니다.

## ✨ 주요 기능

- ➕ **증가 (Increment)** - 카운트 값을 1 증가
- ➖ **감소 (Decrement)** - 카운트 값을 1 감소
- 🔄 **초기화 (Reset)** - 카운트 값을 0으로 리셋
- 🔗 **전역 상태 공유** - 여러 컴포넌트에서 동일한 상태 접근

## 🛠️ 기술 스택

| 기술 | 버전 | 설명 |
|------|------|------|
| **React** | 19.1.1 | UI 라이브러리 |
| **Vite** | 7.1.7 | 빌드 도구 |
| **Zustand** | 5.0.8 | 상태 관리 라이브러리 |
| **ESLint** | 9.36.0 | 코드 품질 검사 도구 |

## 📁 프로젝트 구조

```
zustand-counter/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── component/
│   │   └── CountBox.jsx      # 카운트 표시 컴포넌트
│   ├── stores/
│   │   └── counterStore.jsx  # Zustand 스토어 정의
│   ├── App.jsx               # 메인 앱 컴포넌트
│   ├── App.css               # 앱 스타일
│   ├── index.css             # 글로벌 스타일
│   └── main.jsx              # 앱 진입점
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🚀 시작하기

### 사전 요구 사항

- **Node.js** 18.0.0 이상
- **npm** 또는 **yarn** 패키지 매니저

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone <repository-url>
   cd zustand-counter
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```

4. **브라우저에서 확인**
   ```
   http://localhost:5173
   ```

## 📜 사용 가능한 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 (HMR 지원) |
| `npm run build` | 프로덕션 빌드 생성 |
| `npm run preview` | 빌드된 앱 미리보기 |
| `npm run lint` | ESLint 코드 검사 |

## 💡 Zustand 사용 예시

### 스토어 정의

```javascript
// src/stores/counterStore.jsx
import { create } from 'zustand'

const counterStore = create((set) => ({
    count: 1,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 })
}))

export default counterStore
```

### 컴포넌트에서 사용

```javascript
// 컴포넌트에서 스토어 사용
import counterStore from './stores/counterStore'

function App() {
  const { count, increment, decrement, reset } = counterStore()
  
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
```

## 🎯 학습 포인트

- ✅ Zustand 스토어 생성 및 구성 방법
- ✅ React 컴포넌트에서 전역 상태 접근
- ✅ 상태 업데이트 함수 정의 (`set` 함수 활용)
- ✅ 여러 컴포넌트 간 상태 공유 패턴

## 📄 라이선스

이 프로젝트는 [MIT 라이선스](./LICENSE)에 따라 배포됩니다.  
자유롭게 사용, 수정, 배포하실 수 있습니다.

---

<p align="center">
  Made with ❤️ using React & Zustand
</p>
