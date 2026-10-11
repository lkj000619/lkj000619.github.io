

    const photoAssets = {"koko":"./assets/koko.jpg","board":"./assets/board.jpg","mir":"./assets/mir.jpg","mir_model":"./assets/mir_model.jpg","led":"./assets/led.jpg","led_control":"./assets/led_control.jpg","koko21_actual":"./assets/koko21_actual.jpg","koko21_structure":"./assets/koko21_structure.jpg","cart_actual":"./assets/cart_actual.jpg","cart_side":"./assets/cart_side.jpg","veda_setup":"./assets/veda_setup.jpg","koko19_actual":"./assets/koko19_actual.jpg","meter_actual":"./assets/meter_actual.jpg"};
    const projectData = {
  "koko": {
    "number": "01",
    "title": "꼬꼬 MK3 · 국방 임무 로봇",
    "period": "2023.06 ~ 2023.10",
    "subtitle": "ROS 2 제어 통합과 전장 보호를 함께 설계한 국방로봇경진대회 프로젝트",
    "role": "소프트웨어 팀장 · 전장 설계",
    "status": "대회 임무 수행 · 팀 최우수 국방부장관상",
    "tags": [
      "ROS 2",
      "Micro-ROS",
      "Teensy 4.0",
      "Custom PCB"
    ],
    "summary": "ODrive 구동부와 Teensy 기반 그리퍼를 ROS 2로 통합했습니다. 배선을 정리하는 캐리어 보드와 전원 보호용 퓨즈 박스를 설계하고 USB 장치 식별 문제를 해결했습니다.",
    "photos": [
      {
        "key": "koko",
        "caption": "꼬꼬 MK3 실물 로봇"
      },
      {
        "key": "board",
        "caption": "직접 설계·제작한 Teensy 4.0 기반 캐리어 보드"
      }
    ],
    "problem": "구동부와 그리퍼를 함께 제어하려면 분산된 배선과 여러 USB 장치를 안정적으로 연결해야 했습니다. 2021년 대회에서 겪은 합선 문제를 반복하지 않도록 전원 보호도 보완해야 했습니다.",
    "actions": [
      "ODrive 구동부는 ROS 2로 제어하고, Teensy 4.0의 그리퍼 제어 코드는 Micro-ROS 노드로 작성해 상위 시스템과 연결했습니다.",
      "센서와 모터 드라이버 배선을 소켓형 캐리어 보드(Custom Carrier Board)로 정리했습니다. 배터리와 구동부 사이에는 전원 보호용 퓨즈 박스를 추가했습니다.",
      "장치 고유 ID와 udev 심볼릭 링크로 USB 장치를 구분했습니다. 무선 혼선은 5GHz 대역으로 전환하고 영상 해상도와 프레임률을 조절해 대응했습니다."
    ],
    "result": "2023년 대회에서 전원 문제 없이 임무를 마쳤고, 팀은 최우수 국방부장관상을 수상했습니다.",
    "limit": "퓨즈 차단 시간, 보드 교체 시간, 부팅 안정성 비율은 별도 측정 자료가 없어 수치로 제시하지 않습니다.",
    "source": "프로젝트 제작 사진 · 캐리어 보드 사진 · 대회 수상 이력",
    "diagram": [
      "ROS 2 상위 시스템",
      "ODrive 구동 제어 · Micro-ROS 그리퍼 노드",
      "바퀴 구동 · 그리퍼 동작"
    ],
    "diagramOwned": [
      1
    ],
    "diagramLabel": "로봇의 제어 흐름",
    "diagramNote": "제어 통합과 그리퍼 노드를 담당했습니다. 캐리어 보드·퓨즈 박스 설계와 USB 장치 식별도 맡았습니다.",
    "video": {
      "url": "https://photos.google.com/share/AF1QipMmsTQWikSgHDjni-KPug321w9uEuzP20osLtHEN9X8FlrtDKydBedrQI65frhO2Q/photo/AF1QipNU2rXVkbC8PWQpb4HNShGYWnQJQLVcTCr9ScoJ?key=aUJSXzhtdkZTMWJSNTNQbzJTWkNxN0Z3NmpqM213",
      "caption": "꼬꼬 MK3 제작 당시 동작 영상 · 2023년"
    }
  },
  "mir": {
    "number": "02",
    "title": "미르 · 지능형 자동 소화 모빌리티",
    "period": "2023.10 ~ 2023.11",
    "subtitle": "화재 위치를 로봇 팔 이동과 소화액 분사 명령으로 연결",
    "role": "시스템 통합 리드",
    "status": "팀 산업통상자원부장관상 · 한밭대 컨소시엄 대상",
    "tags": [
      "ROS 2 Foxy",
      "RS485",
      "Arduino",
      "좌표 변환"
    ],
    "summary": "팀원이 구현한 화재 인식 결과와 깊이 카메라 측정값을 3D 작업 좌표로 변환했습니다. 이를 로봇 팔 이동과 소화액 분사, 원격 조작에 연결했습니다.",
    "photos": [
      {
        "key": "mir",
        "caption": "제작된 미르 로봇과 소화액 분사 장치"
      },
      {
        "key": "mir_model",
        "caption": "기존 포트폴리오에 수록된 로봇 모델링"
      }
    ],
    "problem": "카메라에서 검출한 화재 위치에 맞춰 로봇 팔을 이동시키고 소화액을 분사해야 했습니다. PC의 인식 결과를 액추에이터 제어로 연결하고 조이스틱 원격 조작도 지원해야 했습니다.",
    "actions": [
      "YOLO v8 객체 인식은 팀원이 담당했습니다. 저는 전달받은 2D 객체 좌표와 깊이 카메라의 거리 정보를 결합해 로봇 팔이 사용할 3D 작업 좌표로 변환했습니다.",
      "변환한 좌표에 따라 로봇 팔이 이동하고 설정한 거리를 유지하며 소화액을 분사하도록 제어했습니다. RS485 커스텀 패킷으로 Arduino에 제어 명령을 전달했습니다.",
      "PC는 인식 연산을, MCU는 액추에이터 제어를 담당하도록 역할을 나눴습니다. 조이스틱으로 로봇을 원격 조작하는 기능도 구현했습니다."
    ],
    "result": "화재 인식 결과를 로봇 팔 이동과 소화액 분사로 연결하고 원격 조작 기능을 구현했습니다. 팀은 산업통상자원부장관상과 한밭대학교 컨소시엄 대상을 수상했습니다.",
    "limit": "분사 정확도와 제어 지연의 측정 자료가 없어 95% 정확도나 지연 개선율로 표현하지 않습니다.",
    "source": "실물·모델링 이미지 · 프로젝트 역할 기록 · 대회 수상 이력"
  },
  "led": {
    "number": "03",
    "title": "산업용 다채널 LED 검사기",
    "period": "2024.04 ~ 2024.05",
    "subtitle": "Raspberry Pi 중앙 제어기와 24채널 RS485 센서 통신",
    "role": "시스템 설계 · SW 개발",
    "status": "외주 시제품 제작·전달",
    "tags": [
      "Raspberry Pi",
      "Python",
      "RS485",
      "G-code"
    ],
    "summary": "초기 제어기의 USB Host 기능에 제약이 있어 Raspberry Pi로 변경했습니다. 24채널 센서 데이터를 전달하는 RS485 통신 규칙을 구현했습니다.",
    "photos": [
      {
        "key": "led",
        "caption": "LED 검사기 시제품의 프레임과 센서 이송부"
      },
      {
        "key": "led_control",
        "caption": "시제품 내부의 제어 보드와 배선 구성"
      }
    ],
    "problem": "센서를 이동시키려면 3D 프린터 제어 보드에 USB로 G-code 명령을 보내야 했습니다. 초기 Arduino 구성은 USB 장치를 제어하는 Host 기능에 제약이 있었습니다.",
    "actions": [
      "중앙 제어기를 Raspberry Pi로 변경하고 USB를 통해 프린터 제어 보드에 명령을 보내도록 구성했습니다.",
      "24개 센서의 데이터를 전달하기 위한 RS485 통신 규칙을 업체와 협의하고 소프트웨어에 구현했습니다."
    ],
    "result": "Raspberry Pi 중앙 제어기와 센서 통신을 구현하고 시제품을 제작해 업체에 전달했습니다.",
    "limit": "시제품 제작·전달까지 수행했습니다. 별도의 인수·검수와 납기 자료는 확보하지 않아 요구사항 충족률이나 납기 준수율을 제시하지 않습니다.",
    "source": "시제품·제어부 사진 · 개발 당시 역할 기록",
    "diagram": [
      "이송 명령 · 센서 측정값",
      "Raspberry Pi 제어 · RS485 데이터 통신",
      "G-code 이송 · 상위 PC 데이터 전달"
    ],
    "diagramOwned": [
      1
    ],
    "diagramLabel": "시제품의 제어·데이터 흐름",
    "diagramNote": "USB Host 요구에 맞춰 제어기를 변경하고, 24채널 데이터 전달 규칙을 업체와 협의해 구현했습니다.",
    "video": {
      "url": "https://photos.app.goo.gl/KDp1rmvA8wr6K1U27",
      "caption": "LED 검사기 시제품 개발 당시 영상 · 2024년"
    }
  },
  "veda": {
    "number": "04",
    "title": "VEDA · Camera–LiDAR 자동 캘리브레이션",
    "period": "2026.07 ~ 2026.08",
    "subtitle": "1D LiDAR로 스캔한 점군과 CCTV 영상을 이용한 상대 위치·방향 추정",
    "role": "캘리브레이션 계산 모듈 개발 · 실험·검증",
    "status": "후보 추정·내부 검증 완료 · 실제 적용 보류",
    "tags": [
      "C++17",
      "Ceres Solver",
      "AI 교차 검토",
      "Hold-out"
    ],
    "summary": "카메라와 LiDAR의 상대 위치·방향을 추정하는 계산 모듈을 개발했습니다. AI가 작성한 코드는 교차 검토와 실측 데이터로 검증했습니다.",
    "photos": [
      {
        "key": "veda_setup",
        "caption": "VEDA Camera–LiDAR 캘리브레이션 실험 장치 · 카메라와 하부 센서 모듈 설치 모습"
      }
    ],
    "photoSource": "보유한 프로젝트 사진 · 실물 모습과 성능 검증 결과는 구분해 설명합니다.",
    "diagram": [
      "영상 + LiDAR 점군",
      "카메라 보정값 고정 · 특징 추출",
      "회전·이동 후보 탐색",
      "별도 데이터 검증",
      "후보 저장 · 적용 권한 분리"
    ],
    "diagramLabel": "계산 모듈의 처리 흐름",
    "problem": "자연 장면을 촬영한 CCTV 영상과 1D LiDAR의 pan-tilt 스캔을 이용해 두 센서의 상대 위치·방향을 추정해야 했습니다. 계산상 평가 점수가 좋아도 실제 장착 자세와 일치하는지는 별도로 확인해야 했습니다.",
    "actions": [
      "센서 좌표계와 단위, 입출력 형식, 실패 조건을 문서화했습니다. ChArUco로 구한 카메라 내부 파라미터와 왜곡 계수(K+D)를 고정하고, 카메라와 LiDAR 사이의 회전·이동(R,t) 후보를 추정하는 계산 모듈을 개발했습니다.",
      "Codex·Antigravity·OpenCode와 구현 방법을 검토했습니다. 다른 AI에 별도 작업 공간에서 방향 분석기를 검토하도록 했고, 영상의 2D 선분 각도와 3D 법선의 방위각을 직접 비교하는 오류를 발견했습니다. 단위 테스트는 통과했지만 계산 의미가 맞지 않아 해당 코드를 반영하지 않았습니다.",
      "탐색에 사용한 데이터와 별도 검증 데이터(hold-out)를 나눠 후보를 비교하고 반복 실행과 진단 결과를 기록했습니다. 검증되지 않은 후보가 제품에 자동 적용되지 않도록 결과 상태와 적용 권한을 분리했습니다."
    ],
    "result": "CH1 실험의 Case B에서 후보 추정용 데이터 3건과 별도 검증 데이터 2건의 내부 기준을 모두 통과했습니다. 후보 간 목적함수 분리도는 6.4912%, Case C의 주 후보에서는 2.9436%였습니다. 분리도는 후보를 구분하는 평가 지표로, 물리적 정확도나 정확도 개선율을 뜻하지 않습니다.",
    "limit": "독립적인 위치·회전 기준, 제품용 별도 검증 데이터, 반복성·섭동 회복·오활성화 검증이 남아 있습니다. 따라서 후보 추정 결과를 제품 승인이나 자동 활성화 완료로 판단하지 않았습니다.",
    "source": "2026-08-24 CH1 실험 결과 · 후보 비교와 승인 조건 기록 · 공개 코드",
    "github": "https://github.com/VEDA-4th-Oppenheimer/Automatic_Calibration_Part",
    "overview": [
      {
        "label": "무엇을 추정했나요?",
        "text": "카메라 영상과 LiDAR 점군이 같은 장면을 가리키도록, 두 센서 사이의 상대 위치와 방향을 추정하는 계산 모듈을 개발했습니다."
      },
      {
        "label": "어디까지 검증했나요?",
        "text": "탐색에 쓴 데이터와 별도 데이터를 나눠 후보를 비교했고, 일부 실험에서 내부 검증 기준을 통과했습니다. 후보가 자동 적용되지 않도록 상태와 권한을 분리했습니다."
      },
      {
        "label": "무엇이 남았나요?",
        "text": "독립적인 기준과 비교한 실제 위치·회전 오차와 제품용 반복성 검증은 완료하지 못했습니다. 프로젝트의 전체 목표를 기한 내 완성하지 못했으며 실제 적용은 보류했습니다."
      }
    ],
    "diagramOwned": [
      1,
      2,
      3,
      4
    ],
    "diagramNote": "캘리브레이션 계산과 검증을 담당했습니다. 모터 제어와 GUI 등 다른 팀원의 구현은 담당 범위에 포함하지 않습니다.",
    "resultLabel": "실험 조건과 수치"
  },
  "meter": {
    "number": "05",
    "title": "Codex Desk Meter",
    "period": "2026.09 ~ 진행 중",
    "subtitle": "Codex 사용량과 리셋 정보를 표시하는 책상용 모니터",
    "role": "제품·평가 기준 설계 · ESP-IDF 환경 구축 · 보드 구동·독립 검증",
    "status": "진행 중 · 펌웨어 빌드·보드 업로드·LCD 출력 확인",
    "tags": [
      "ESP32-S3",
      "ESP-IDF",
      "LCD",
      "AI 개발 평가"
    ],
    "summary": "Codex 사용량과 리셋 시각을 책상 위 LCD로 보여 주는 장치를 개발하고 있습니다. AI 에이전트의 구현 결과를 빌드·테스트와 실물 보드로 검증합니다.",
    "photos": [
      {
        "key": "meter_actual",
        "caption": "Codex Desk Meter 실물 · 글로벌 리셋 기본 화면 (No Global Reset Record)",
        "rotate": -90,
        "width": 708,
        "height": 944
      }
    ],
    "photoSource": "보유한 프로젝트 사진 · 실물 모습과 성능 검증 결과는 구분해 설명합니다.",
    "diagram": [
      "시험 데이터 입력",
      "상태 해석",
      "LCD 화면",
      "실물 출력 확인"
    ],
    "diagramLabel": "현재 확인한 흐름 · 실제 사용량 연동은 개발 중",
    "problem": "개발 중 Codex 사용량과 리셋 시각을 쉽게 확인할 수 있도록 책상용 모니터를 만들고 있습니다. 같은 개발 과제를 수행한 AI 에이전트의 결과도 실행 기록, 빌드·테스트, 실물 동작을 기준으로 비교하려고 합니다.",
    "actions": [
      "Waveshare ESP32-S3-LCD-3.16 보드에 맞춰 ESP-IDF v5.3.2 환경을 고정했습니다. 제조사 펌웨어를 백업하고 보드 구동과 LCD 출력을 확인했습니다.",
      "같은 코드 기준점과 프롬프트, 입력 자료로 실행 조건을 맞췄습니다. 실행 중에는 수정 지시를 하지 않고 결과물을 보존한 뒤 별도로 평가하도록 정했습니다. 실행 시간·토큰·도구 호출 기록도 함께 남겼습니다.",
      "9월 28일 시험 실행에서 보존한 소스를 PC에서 빌드·테스트하고 ESP32용 펌웨어도 빌드했습니다. 검증한 펌웨어를 COM3에 연결된 보드에 올린 뒤 부팅 로그와 LCD 사진·영상을 대조했습니다."
    ],
    "result": "별도 검증에서 CTest 2건, 실제 C 구현을 대상으로 한 검증 29건, ESP-IDF 펌웨어 빌드를 통과했습니다. 검증한 펌웨어를 보드에 업로드해 부팅과 LCD 글자 출력을 확인했습니다. 다만 에이전트의 첫 시험 실행은 허용되지 않은 명령 호출로 실패했으며, 이 결과를 제품 완성이나 에이전트 순위의 근거로 사용하지 않았습니다.",
    "limit": "현재 구현은 fixture 기반 상태 파서와 화면입니다. PC 사용량 수집기·실시간 전송·수신 계층은 아직 없고 USB 또는 Wi-Fi 전송 방식도 결정 전입니다. 실물에서는 부분 렌더링과 고정 기본값 문제가 관찰되어 원인 확인·화면 안정화가 남아 있습니다. 실제 사용량을 표시하는 전체 흐름과 장시간 안정성은 검증 전이며, 여러 에이전트의 반복 비교도 수행하지 않았습니다.",
    "source": "보존된 pilot 소스의 독립 빌드·테스트 결과 · 보드 부팅 로그 · LCD 실물 사진"
  },
  "cart": {
    "number": "06",
    "title": "사람 추종 스마트 마트 카트",
    "period": "2021.12 ~ 2022.11",
    "subtitle": "전자종합설계1/2 · 1인 가구의 장보기를 위한 거리 기반 추종 카트",
    "role": "프로젝트 기획·설계·팀 업무 조율 · 모터·추종 제어",
    "status": "2022 교내 종합설계 경진대회 · 팀 대상",
    "tags": [
      "종합설계",
      "Depth Camera",
      "RS485",
      "BLDC"
    ],
    "summary": "전자종합설계1/2에서 사람을 따라가는 카트를 설계하고 거리 측정값에 따라 모터를 제어했습니다. 팀은 2022년 교내 종합설계 경진대회에서 대상을 수상했습니다.",
    "photos": [
      {
        "key": "cart_actual",
        "caption": "사람 추종 카트 실물 · 상단 노트북과 깊이 카메라"
      },
      {
        "key": "cart_side",
        "caption": "카트 측면 · 구동 바퀴와 제작한 본체"
      }
    ],
    "problem": "1인 가구가 장을 볼 때 카트를 직접 끌지 않아도 되도록 사람을 따라오는 스마트 마트 카트를 만드는 종합설계 프로젝트였습니다. 인식된 대상과의 거리 정보를 실제 주행 명령으로 연결해야 했습니다.",
    "actions": [
      "프로젝트 목표와 시스템 구조를 정하고 팀원별로 작업을 나눴습니다. 팀원이 영상 처리를 맡았고, 저는 초기 구동과 모터 제어, 거리 기반 추종을 담당했습니다.",
      "RS485로 BLDC 모터 드라이버에 제어 명령을 보내는 노드를 구현했습니다.",
      "깊이 카메라로 측정한 대상과의 거리에 따라 카트가 가속·감속하도록 제어했습니다."
    ],
    "result": "전자종합설계1/2 결과물을 2022년 교내 종합설계 경진대회에 출품해 팀이 대상을 받았습니다. 프로젝트 기획부터 센서 입력과 모터 제어를 연결하는 시스템 통합까지 담당했습니다.",
    "limit": "추종 거리 오차·제어 주기·장시간 동작의 측정 자료는 확보하지 않았습니다. 대상 유실·장애물·다중 사람에 대한 예외 처리 설명은 경력기술서에 있으나 상세 시험 기록은 확인 전입니다. 영상처리 구현을 개인 기여로 포함하지 않았습니다.",
    "source": "카트 제작 사진 · 종합설계 결과물 · 교내 대회 수상 이력"
  },
  "koko21": {
    "number": "07",
    "title": "꼬꼬 MK2 · 국방 임무 로봇",
    "period": "2021.07 ~ 2021.12",
    "subtitle": "4자유도 로봇 팔과 플리퍼의 ROS 제어 통합",
    "role": "로봇 팔 SW 개발 · ROS 시스템 통합",
    "status": "대회 출품 · 현장 합선으로 임무 수행 실패",
    "tags": [
      "Linux C/C++",
      "ROS",
      "RS485",
      "매니퓰레이터"
    ],
    "summary": "4자유도 로봇 팔과 플리퍼를 ROS 환경에서 통합했습니다. 대회 현장의 합선으로 임무를 수행하지 못했고, 이 경험을 MK3의 전원 보호 설계에 반영했습니다.",
    "photos": [
      {
        "key": "koko21_actual",
        "caption": "2021 꼬꼬 실물 · 로봇 팔과 양측 플리퍼"
      },
      {
        "key": "koko21_structure",
        "caption": "꼬꼬 MK2 시스템 구성도"
      }
    ],
    "problem": "국방로봇경진대회를 위해 4자유도 로봇 팔과 플리퍼가 탑재된 꼬꼬를 제작했습니다. 장치 통신과 액추에이터 제어를 하나의 ROS 시스템으로 연결해야 했습니다.",
    "actions": [
      "Linux termios API로 USB–RS485 통신 코드를 C로 작성했습니다. 단독 프로그램에서 패킷 송수신과 액추에이터 동작을 시험했습니다.",
      "통신·제어 코드를 C++ ROS 노드로 옮겨 로봇 팔과 플리퍼를 함께 제어하도록 통합했습니다.",
      "현장 조립 중 합선으로 회로가 손상되어 임무를 수행하지 못했습니다. 후속 꼬꼬 MK3에서는 전원 계통을 분리하고 퓨즈 박스를 적용했습니다."
    ],
    "result": "장치 통신과 액추에이터 제어를 각각 시험한 뒤 ROS 시스템으로 통합했습니다. 현장 합선으로 대회 임무를 수행하지 못한 경험은 후속 프로젝트의 전원 보호 설계에 반영했습니다.",
    "limit": "대회 현장에서 합선으로 임무를 수행하지 못했습니다. 당시 코드·통신 시험 로그·손상 범위 자료는 확보하지 않았으며, Fuse Box는 후속 2023 MK3에서 구현했습니다.",
    "source": "실물·시스템 구성도 · 통신 단독 시험 및 ROS 통합 경험"
  },
  "defense19": {
    "number": "08",
    "title": "꼬꼬 MK1 · 국방 임무 로봇",
    "period": "2019.06 ~ 2019.10",
    "subtitle": "대회 출품명 ‘치킨나라피자공주’ · 내부명 ‘꼬꼬 MK1’",
    "role": "로봇 팔 SW 설계·구현 · Arduino–Raspberry Pi I²C 통신 구현",
    "status": "동아리 첫 국방대회 · 팀 3위·기획관리참모부장상",
    "tags": [
      "로봇 팔",
      "Arduino",
      "Raspberry Pi",
      "I²C"
    ],
    "summary": "처음 참가한 국방로봇대회에서 로봇 팔 소프트웨어와 Arduino–Raspberry Pi 간 I²C 통신을 구현했습니다. 팀은 국방로봇 부문 3위를 수상했습니다.",
    "photos": [
      {
        "key": "koko19_actual",
        "caption": "2019 꼬꼬 MK1 실물 · 로봇 팔과 궤도형 구동부"
      }
    ],
    "photoSource": "보유한 프로젝트 사진 · 실물 모습과 성능 검증 결과는 구분해 설명합니다.",
    "diagram": [
      "Arduino",
      "I²C 통신",
      "Raspberry Pi"
    ],
    "diagramLabel": "직접 구현한 보드 간 통신",
    "problem": "저와 로봇 동아리가 처음 참가한 국방로봇대회였습니다. 로봇 팔 소프트웨어와 보드 간 통신을 담당했습니다. 대회 출품명은 ‘치킨나라피자공주’, 내부명은 ‘꼬꼬 MK1’이었으며 이후 MK2·MK3로 이어졌습니다.",
    "actions": [
      "로봇 팔 소프트웨어를 설계하고 구현했습니다.",
      "Arduino와 Raspberry Pi 사이의 I²C 통신을 구현해 두 보드를 연결했습니다."
    ],
    "result": "2019년 10월 25일 제21회 한국지능로봇 경진대회 국방로봇 부문에서 팀이 3위와 기획관리참모부장상을 수상했습니다. 첫 대회에서 로봇 팔 SW와 보드 간 통신을 직접 구현한 경험을 쌓았습니다.",
    "limit": "소스 코드·통신 시험 기록은 확보하지 않았습니다. 통신 속도나 제어 성능 수치는 제시하지 않습니다.",
    "source": "대회 실물 사진 · 2019 수상 이력 · 로봇 팔과 I²C 통신 구현 경험"
  },
  "bluedot": {
    "title": "Bluedot · Video Codec Engineer",
    "period": "2025.02.17 ~ 2026.03.12",
    "subtitle": "AV1 레퍼런스 C 기능 추가·검증 · 메모리 구조 개선 · Jenkins CI 자동화",
    "role": "Video IP Team · Video Codec Engineer",
    "status": "재직 경력 · 1년 1개월",
    "tags": [
      "C",
      "AV1",
      "Valgrind",
      "Jenkins"
    ],
    "photos": [],
    "problem": "AV1 인코더의 압축 효율과 메모리 사용량을 확인하고, 레퍼런스 C 소프트웨어와 FPGA 하드웨어의 처리 결과가 일치하는지 검증하는 업무였습니다.",
    "actions": [
      "AV1 인코더 레퍼런스 C 소프트웨어의 기능 추가와 검증에 참여했습니다. 선임의 개선안을 적용·검증하고 Switchable Interpolation Filter의 RDO 처리 코드를 수정했습니다. MCTF와 10-bit 관련 기능도 분석·검증했습니다.",
      "1080p 인코딩 과정에서 메모리를 할당하는 경로와 구조체가 사용되는 시점을 추적했습니다. 불필요한 할당과 저장 공간을 줄이는 구조 개선에 참여했습니다.",
      "AWCY에서 PSNR·SSIM·VMAF로 영상 품질을 비교했습니다. trace·dump와 Valgrind로 처리 결과와 메모리 문제를 확인했습니다.",
      "Jenkins로 자동 빌드와 규격 적합성 검사(Conformance Test), 실패 알림을 구성했습니다. FPGA 호스트 프로그램 검증에서는 레퍼런스 C와 중간 데이터를 대조해 값이 처음 달라지는 지점을 찾았습니다."
    ],
    "result": "1080p 인코딩 프로세스의 메모리 사용량은 htop 기준 8GB에서 4GB로 줄었습니다. 메모리 구조 개선에 참여했으며 알고리즘 검증과 자동화 환경 구성을 수행했습니다.",
    "limit": "메모리 수치는 1080p 인코딩 프로세스의 htop 관찰값이며 전체 칩 메모리와 구분됩니다. 선임의 개선안을 적용·검증하는 역할과 메모리 구조 개선 참여 범위를 기준으로 설명했습니다.",
    "source": "업무 수행 경험 · 1080p 인코딩 프로세스의 htop 관찰 결과"
  }
};
    const projectOrder = ['meter','veda','led','mir','koko','cart','koko21','defense19'];
    const escapeText = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    function photoMarkup(photo, lazy = false) {
      const caption = escapeText(photo.caption);
      if (photo.rotate === -90) {
        return `<svg class="rotated-photo" viewBox="0 0 ${photo.height} ${photo.width}" role="img" aria-label="${caption}" preserveAspectRatio="xMidYMid meet"><title>${caption}</title><image href="${photoAssets[photo.key]}" width="${photo.width}" height="${photo.height}" transform="translate(0 ${photo.width}) rotate(-90)" /></svg>`;
      }
      return `<img src="${photoAssets[photo.key]}" alt="${caption}" ${lazy ? 'loading="lazy"' : ''} decoding="async">`;
    }
    function flowMarkup(data) {
      return `<div class="flow-visual"><p>${escapeText(data.diagramLabel)}</p><ol>${data.diagram.map((item,index)=>`<li${data.diagramOwned?.includes(index) ? ' class="flow-owned"><strong>직접 담당</strong>' : '>'}${escapeText(item)}</li>`).join('')}</ol>${data.diagramNote ? `<p class="flow-note">${escapeText(data.diagramNote)}</p>` : ''}</div>`;
    }
    function reportMarkup(key, headingId) {
      const data = projectData[key];
      return `
        <div class="space-y-4 border-b border-white/10 pb-6">
          <p class="project-number">${data.number ? 'PROJECT '+data.number : 'CAREER'} · ${escapeText(data.period)}</p>
          <h3 id="${headingId}" class="font-sora text-2xl sm:text-3xl font-extrabold leading-tight pr-8">${escapeText(data.title)}</h3>
          <p class="text-sm text-slate-400 leading-relaxed">${escapeText(data.subtitle)}</p>
          <div class="project-tags">${data.tags.map(t=>`<span>${escapeText(t)}</span>`).join('')}</div>
          <p class="text-sm text-slate-300"><strong>나의 역할</strong> · ${escapeText(data.role)}</p>
          <p class="report-status">${escapeText(data.status)}</p>
        </div>
        ${data.overview ? `<dl class="report-summary">${data.overview.map(item=>`<div><dt>${escapeText(item.label)}</dt><dd>${escapeText(item.text)}</dd></div>`).join('')}</dl>` : ''}
        ${data.video ? `<div class="report-video no-print"><a class="button secondary" href="${escapeText(data.video.url)}" target="_blank" rel="noopener noreferrer">실제 동작 영상 보기 ↗</a><p>${escapeText(data.video.caption)} · Google 포토에서 새 탭으로 재생됩니다.</p></div>` : ''}
        ${data.photos.length ? `<div class="report-gallery mt-6">${data.photos.map(photo=>`<figure>${photoMarkup(photo)}<figcaption>${escapeText(photo.caption)}</figcaption></figure>`).join('')}</div>` : ''}
        ${data.diagram ? `<div class="mt-6 glass-panel">${flowMarkup(data)}</div>` : ''}
        <section class="report-section"><h4>문제와 목표</h4><p>${escapeText(data.problem)}</p></section>
        <section class="report-section"><h4>구현과 문제 해결</h4><ul>${data.actions.map(action=>`<li>${escapeText(action)}</li>`).join('')}</ul></section>
        <section class="report-section"><h4>${escapeText(data.resultLabel || '결과')}</h4><p>${escapeText(data.result)}</p></section>
        <section class="report-section"><h4>남은 검증과 한계</h4><p>${escapeText(data.limit)}</p></section>
        ${data.github ? `<a class="inline-flex text-cyan-400 font-semibold mt-6" href="${data.github}" target="_blank" rel="noopener noreferrer">프로젝트 코드 ↗</a>` : ''}`;
    }
    const featuredProjectKeys = ['veda','koko','led'];
    function cardMarkup(key) {
      const data = projectData[key];
      const cover = data.photos.length ? photoMarkup(data.photos[0], true) : flowMarkup(data);
      return `<a href="#project-${key}" data-project="${key}" class="glass-panel project-card cursor-pointer">
        <div class="project-cover">${cover}</div><div class="project-body">
          <p class="project-number">${escapeText(data.period)}</p>
          <h3>${escapeText(data.title)}</h3>
          <p class="project-role"><strong>나의 역할</strong> · ${escapeText(data.role)}</p>
          <p class="text-sm text-slate-300 leading-relaxed">${escapeText(data.summary)}</p>
          <div class="project-tags">${data.tags.map(tag=>`<span>${escapeText(tag)}</span>`).join('')}</div>
          <p class="text-xs text-cyan-400 leading-relaxed">${escapeText(data.status)}</p>
          <span class="text-sm font-semibold text-cyan-400 mt-auto pt-2">프로젝트 상세 보기 ↗</span>
        </div></a>`;
    }
    for (const [id, keys] of [
      ['projectGrid', projectOrder],
      ['featuredGrid', featuredProjectKeys],
      ['archiveGrid', projectOrder.filter(key=>!featuredProjectKeys.includes(key))]
    ]) {
      const grid = document.getElementById(id);
      if (!grid.children.length) grid.innerHTML = keys.map(cardMarkup).join('');
    }
    if (!document.getElementById('printReports').children.length) document.getElementById('printReports').innerHTML = ['bluedot', ...projectOrder].map(key=>`<article id="project-${key}">${reportMarkup(key,'print-title-'+key)}</article>`).join('');
    const modal = document.getElementById('projectModal');
    const modalPanel = document.getElementById('modalPanel');
    const pageRegions = [...document.querySelectorAll('header,main,footer')];
    let previousFocus = null;
    function openProject(key, updateHistory = true) {
      if (!Object.prototype.hasOwnProperty.call(projectData,key)) return;
      if (modal.classList.contains('hidden')) previousFocus = document.activeElement;
      document.getElementById('modalContent').innerHTML = reportMarkup(key,'modalProjectTitle');
      modal.classList.remove('hidden');
      modalPanel.scrollTop = 0;
      pageRegions.forEach(region=>region.inert=true);
      document.body.style.overflow = 'hidden';
      if (updateHistory && location.hash !== '#project-'+key) history.pushState(null,'','#project-'+key);
      document.getElementById('modalClose').focus({preventScroll:true});
    }
    function closeProject(updateHistory = true) {
      modal.classList.add('hidden');
      pageRegions.forEach(region=>region.inert=false);
      document.body.style.overflow = '';
      if (updateHistory && location.hash.startsWith('#project-')) history.replaceState(null,'',location.pathname+location.search);
      if (previousFocus && previousFocus.isConnected) previousFocus.focus({preventScroll:true});
    }
    document.querySelectorAll('[data-project]').forEach(link => link.addEventListener('click',event=>{
      event.preventDefault(); openProject(link.dataset.project);
    }));
    modal.addEventListener('click',event=>{if(event.target===modal) closeProject();});
    window.addEventListener('keydown',event=>{
      if(modal.classList.contains('hidden')) return;
      if(event.key==='Escape') {event.preventDefault(); closeProject();}
      if(event.key==='Tab') {
        const focusable = [...modal.querySelectorAll('a[href],button')];
        const first=focusable[0], last=focusable[focusable.length-1];
        if(event.shiftKey && document.activeElement===first) {event.preventDefault(); last.focus();}
        else if(!event.shiftKey && document.activeElement===last) {event.preventDefault(); first.focus();}
      }
    });
    function syncProjectHash() {
      const key=location.hash.startsWith('#project-') ? location.hash.slice(9) : '';
      if(Object.prototype.hasOwnProperty.call(projectData,key)) openProject(key,false);
      else if(!modal.classList.contains('hidden')) closeProject(false);
    }
    window.addEventListener('hashchange',syncProjectHash);
    syncProjectHash();

  