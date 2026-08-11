# 🚀 LEBASS CRM - Tomcat + Maven + React + Vite + Tailwind CSS Integration

Tomcat WAS 배포 환경과 Maven 자동화 빌드 파이프라인 위에 **React 19**, **Vite 6**, **Tailwind CSS v4**를 통합 구성한 고성능 풀스택 웹 애플리케이션 스타터 템플릿입니다.

---

## 🛠️ 기술 스택 (Tech Stack)

### Backend & WAS
- **Language & Runtime**: Java 11+
- **WAS / Servlet Engine**: Apache Tomcat (Java Servlet 4.0 / Jakarta EE)
- **Embedded Server**: Jetty 10 (`mvn jetty:run`으로 로컬 즉시 구동 지원)
- **JSON Processing**: Jackson Databind

### Build & Automation & CI/CD
- **Build Tool**: Apache Maven 3.9+
- **Frontend Build Automation**: `com.github.eirslett:frontend-maven-plugin` (Maven 패키징 시 Node/npm 설치 및 `npm run build` 자동 트리거)
- **CI/CD & Hosting**: GitHub Actions (`.github/workflows/deploy.yml`) 기반 GitHub Pages 자동 배포
- **Packaging**: `org.apache.maven.plugins:maven-war-plugin` (Vite `dist` 정적 자원과 Servlet 클래스를 단일 `.war` 파일로 통합)

### Frontend
- **UI Library**: React 19
- **Build Tool / Dev Server**: Vite 6 (초고속 HMR 지원)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite` 엔진)
- **Icons**: Lucide React

---

## 📂 프로젝트 구조 (Project Structure)

```text
T-M-R_01 (lebass_crm)/
├── pom.xml                               # Maven 통합 빌드 및 플러그인 설정
├── README.md                             # 프로젝트 한글 상세 안내 문서
├── .gitignore                            # Git 버전 관리 제외 파일 설정
│
├── src/                                  # Java 백엔드 및 Servlet 소스
│   └── main/
│       ├── java/
│       │   └── com/example/api/
│       │       ├── StatusServlet.java    # 백엔드 API 헬스체크 (/api/status)
│       │       └── AdminServlet.java     # 어드민 대시보드 통계 API (/api/admin/stats)
│       └── webapp/
│           └── WEB-INF/
│               └── web.xml               # Servlet 매핑 및 Tomcat 배포 기술자
│
└── frontend/                             # React + Vite + Tailwind CSS 프론트엔드
    ├── package.json                      # 프론트엔드 의존성 설정
    ├── vite.config.js                    # Vite 빌드 아웃풋 및 Tomcat API Proxy 설정
    ├── index.html                        # HTML 템플릿 & Google Fonts (Outfit, Inter)
    └── src/
        ├── main.jsx                      # React 엔트리 포인트
        ├── App.jsx                       # 메인 어드민 대시보드 애플리케이션
        ├── index.css                     # Tailwind CSS v4 및 Glassmorphism 디자인 시스템
        └── components/
            └── AdminDashboard.jsx        # 어드민 대시보드 컴포넌트
```

---

## ⚙️ 개발 및 구동 방법 (Getting Started)

### 1. 사전 요구사항 (Prerequisites)
- **Node.js**: v22.0+ (npm 10+)
- **Java**: JDK 11 이상
- **Maven**: Apache Maven 3.9 이상

---

### 2. 로컬 개발 환경 구동

#### 🅰️ 프론트엔드 독립 개발 (Vite HMR 개발 서버)
Vite의 초고속 HMR(Hot Module Replacement) 기능으로 빠른 UI 개발을 진행합니다.
```bash
cd frontend
npm run dev
```
- **접속 주소**: `http://localhost:5173`
- **Vite API Proxy**: `/api/*` 로 들어오는 HTTP 요청은 `http://localhost:8080` (백엔드 서버)로 자동 전달됩니다.

#### 🅱️ 백엔드 Servlet 서버 실행 (Jetty Embedded Server)
별도의 외부 톰캣 설치 없이 Maven 명령어만으로 로컬 8080 포트에서 백엔드를 구동합니다.
```bash
mvn jetty:run
```
- **REST API 엔드포인트**: `http://localhost:8080/api/status`

---

### 3. 원스톱 Maven 통합 빌드 (Production WAR 생성)

Maven 명령어 한 줄로 프론트엔드 최적화 번들링(`npm run build`)과 백엔드 컴파일을 수행하고 톰캣 배포용 `.war` 파일까지 단일 과정으로 생성합니다.

```bash
mvn clean package
```

- **생성 위치**: `target/T-M-R_01.war`
- **빌드 과정**:
  1. `frontend-maven-plugin`이 `frontend/` 디렉터리에서 `npm install` 및 `npm run build` 자동 실행
  2. Vite가 `frontend/dist/` 경로로 최적화된 HTML/CSS/JS 정적 빌드 생성
  3. `maven-compiler-plugin`이 Java Servlet 클래스를 컴파일
  4. `maven-war-plugin`이 `frontend/dist/` 빌드 아웃풋을 WAR의 webapp 루트로 합쳐 `T-M-R_01.war` 패키징 완료

---

## 📦 Apache Tomcat WAS 배포 가이드

1. **WAR 파일 준비**: `mvn clean package` 실행 후 `target/T-M-R_01.war` 생성 확인
2. **톰캣 배포**:
   - 설치된 Apache Tomcat의 `webapps/` 디렉터리에 `T-M-R_01.war` 파일을 복사합니다.
   - Tomcat 서버를 시작합니다 (`bin/startup.sh` 또는 `bin/startup.bat`).
3. **접속 테스트**: `http://localhost:8080/T-M-R_01/` 으로 접속 시 React 애플리케이션 및 Servlet API가 통합 구동됩니다.

---

## 📡 백엔드 REST API 명세

| Method | Endpoint | 설명 | 응답 예시 |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/status` | Tomcat WAS & Servlet 헬스체크 | `{"status": "SUCCESS", "server": "Apache Tomcat / Java Servlet"}` |
| `GET` | `/api/admin/stats` | 어드민 대시보드 현황 데이터 | `{"activeUsers": 1280, "totalSales": "$45,200", "serverLoad": "12%"}` |

---

## 🔮 추후 확장 가이드 (Roadmap)

1. **Spring Boot & Spring Data JPA 도입**
   - 현재 raw Servlet 구조에서 `SpringBootServletInitializer`를 적용하여 Spring Boot 구조로 확장 가능.
2. **Database 연동 (MySQL / PostgreSQL / H2)**
   - `pom.xml`에 H2 또는 MySQL Driver 및 JPA/Hibernate 의존성 추가 후 실제 데이터베이스 연동.
3. **프론트엔드 라우팅 및 상태 관리**
   - `react-router-dom` 및 `@tanstack/react-query` 추가를 통한 멀티 페이지 어드민 시스템 구축.
