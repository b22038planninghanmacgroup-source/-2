/* ═══════════════════════════════════════════
   DEFAULT DATA & LOCAL STORAGE LOGIC
═══════════════════════════════════════════ */
const defaultData = {
  targetRevenue: 10000000000,
  monthly: {
    "2026-01": { 수주: 5125000000, 매출: 445000000, 수금: 454000000 },
    "2026-02": { 수주: 0, 매출: 428000000, 수금: 471000000 },
    "2026-03": { 수주: 571000000, 매출: 427000000, 수금: 427000000 },
    "2026-04": { 수주: 0, 매출: 427000000, 수금: 427000000 },
    "2026-05": { 수주: 193000000, 매출: 1028000000, 수금: 1007000000 },
  },
  issues: [
    { date: "2026-06-01", label: "06/01", text: "삼안 풍납-2 건 적격심사 서류 준비 및 제출", alert: false },
    { date: "2026-06-05", label: "06/05", text: "한맥 PQ프로그램 사용계약(연간) 청구 — 6,000천원", alert: true },
    { date: "2026-06-10", label: "예정", text: "바론/한맥/삼안 SW기술자 경력관리비 납부예정", alert: true },
    { date: "2026-06-04", label: "입찰", text: "입찰참여(5/28~6/4) 한맥 1건 / 삼안 0건", alert: false },
  ],
  contracts: [
    { date: "2026-05-19", proj: "용인시-왕산갈담 자연재해위험개선지구 정비사업 기본·실시설계", amountWon: 15419000000 },
    { date: "2026-05-18", proj: "ETRI-GNSS 연계측위 장비와 BIM을 활용한 건설현장", amountWon: 4600000000 },
  ],
  outsources: [
    { date: "2026-05-22", partner: "둠둠주식회사", note: "현장측량", amountWon: -3212500000 },
    { date: "2026-05-26", partner: "경수", note: "현장측량", amountWon: -4650000000 },
  ],
  billings: [
    { date: "2026-05-29", proj: "한맥-PQ프로그램 사용계약(연간구독)", type: "청구", amountWon: 600000000 },
    { date: "2026-05-21", proj: "삼안-경부선 1구간(노량진-평택구간)", type: "수금", amountWon: 16600000000 },
    { date: "2026-05-21", proj: "삼안-경부선 2구간(평택-직지사구간)", type: "수금", amountWon: 40500000000 },
    { date: "2026-05-20", proj: "ETRI-GNSS 연계측위 건설현장", type: "수금", amountWon: 2300000000 },
    { date: "2026-05-15", proj: "블루위시테크-드론영상기반(연간)", type: "수금", amountWon: 768000000 },
  ],
  bids: [
    { announceDate: "2025-12-30", proj: "포천천 인도교 설치사업 기본 및 실시설계 용역", mainPartner: "삼안", status: "불참", amountWon: 13824580 },
    { announceDate: "2025-12-30", proj: "하성농어촌도로리도207호선개설사업기본및실시설계용역", mainPartner: "삼안", status: "타사낙찰", amountWon: 138988300 },
    { announceDate: "2025-12-30", proj: "금강 하천시설 유지보수 실시설계용역(‘26~’28년)", mainPartner: "삼안", status: "타사낙찰", amountWon: 74500000 },
    { announceDate: "2025-12-31", proj: "청산배수지건설공사기본및실시설계용역", mainPartner: "삼안", status: "타사낙찰", amountWon: 73384542 },
    { announceDate: "2026-01-05", proj: "진주시 나불지구 풍수해생활권 종합정비사업 기본 및 실시설계", mainPartner: "한맥", status: "타사낙찰", amountWon: 419903300 },
    { announceDate: "2026-01-06", proj: "양평군 노후하수관로 정비사업 실시설계 용역", mainPartner: "삼안", status: "타사낙찰", amountWon: 213023041 },
    { announceDate: "2026-01-13", proj: "평택시통복천생태하천복원실시설계용역(장기계속계약)", mainPartner: "삼안", status: "타사낙찰", amountWon: 147096500 },
    { announceDate: "2026-01-28", proj: "수내천(소하천)정비사업 기본 및 실시설계옹역", mainPartner: "삼안", status: "타사낙찰", amountWon: 73575600 },
    { announceDate: "2026-02-09", proj: "탄천.한강변차집관로정비공사기본및실시설계용역(협상)", mainPartner: "삼안", status: "불참", amountWon: 0 },
    { announceDate: "2026-02-20", proj: "구례군 소하천정비종합계획수립 및 지형도면신고시 용역", mainPartner: "한맥", status: "불참", amountWon: 0 },
    { announceDate: "2026-02-25", proj: "경기북부양생동물 생태관찰원조성사업기본및실시설계용역", mainPartner: "삼안", status: "타사낙찰", amountWon: 32087000 },
    { announceDate: "2026-02-05", proj: "파주시소하천정비종합계획재수립용역", mainPartner: "삼안", status: "타사낙찰", amountWon: 730908000 },
    { announceDate: "2026-02-02", proj: "안양시분류식하수관로및노후하수관로정비공사기본및실시설계용역", mainPartner: "삼안", status: "타사낙찰", amountWon: 87369568 },
    { announceDate: "2026-02-10", proj: "평택시북부지역노후상수관망정비사업기본및실시설계용역", mainPartner: "삼안", status: "타사낙찰", amountWon: 235800000 },
    { announceDate: "2026-02-11", proj: "안양시 노후상수관망정비사업실시설계용역", mainPartner: "삼안", status: "타사낙찰", amountWon: 214975347 },
    { announceDate: "2026-03-20", proj: "빙어호 인도교 조성사업 기본설계 용역", mainPartner: "한맥", status: "타사낙찰", amountWon: 36595500 },
    { announceDate: "2026-02-26", proj: "김해시 소하천 정비종합계획 재수립 및 지형도면고시용역(김해시)", mainPartner: "한맥", status: "타사낙찰", amountWon: 625616320 },
    { announceDate: "2026-01-02", proj: "정읍시 가축분뇨공공처리시설(우분연료화)설치사업 환경영향평가 용역", mainPartner: "한맥", status: "타사낙찰", amountWon: 276357000 },
    { announceDate: "2026-02-10", proj: "초월지구풍수해생활권종합정비사업기본및실시설계용역", mainPartner: "삼안", status: "타사낙찰", amountWon: 124457048 },
    { announceDate: "2026-02-27", proj: "어사 자연재해 위험개선지구정비사업 기본 및 실시설계용역", mainPartner: "한맥", status: "타사낙찰", amountWon: 119743911 },
    { announceDate: "2026-03-04", proj: "유동 자연재해위험개선지구 정비사업 기본 및 실시설계용역", mainPartner: "한맥", status: "타사낙찰", amountWon: 64688400 },
    { announceDate: "2026-03-09", proj: "수도권광역급행철도 A노선 연장운행 사업 노반, 궤도 기본 및 실시설계 엔지니어링", mainPartner: "삼안", status: "타사낙찰", amountWon: 236428500 },
    { announceDate: "2026-03-18", proj: "평택당진항배수로호안보강공사실시설계용역", mainPartner: "삼안", status: "타사낙찰", amountWon: 40000000 },
    { announceDate: "2026-03-24", proj: "야당동하수도정비중점관리지역도시침수대응사업기본및실시설계", mainPartner: "삼안", status: "타사낙찰", amountWon: 235280100 },
    { announceDate: "2026-03-25", proj: "평택당진항액체부두통합유지준설기본및실시설계용역", mainPartner: "삼안", status: "타사낙찰", amountWon: 84675000 },
    { announceDate: "2026-02-24", proj: "국수 공공하수처리시설 증설사업 기본 및 실시설계 용역(지명경쟁)", mainPartner: "삼안", status: "타사낙찰", amountWon: 5946600 },
    { announceDate: "2026-03-11", proj: "세종 스마트 국가산단 진입도로 건설공사 기본 및 실시설계용역", mainPartner: "한맥", status: "타사낙찰", amountWon: 104850000 },
    { announceDate: "2026-03-16", proj: "가평군소하천정비종합계획(재수립,타당성검토)및지형도면고시용역", mainPartner: "삼안", status: "타사낙찰", amountWon: 220493962 },
    { announceDate: "2026-03-23", proj: "고성군 소하천정비종합계획 재수립 및 지형도면고시 용역(동부권역)", mainPartner: "한맥", status: "타사낙찰", amountWon: 655354800 },
    { announceDate: "2026-03-23", proj: "고성군 소하천정비종합계획 재수립 및 지형도면고시 용역(서부권역)", mainPartner: "한맥", status: "타사낙찰", amountWon: 618884000 },
    { announceDate: "2026-04-16", proj: "부안군 노후상수관망 정비사업 기본 및 실시설계용역", mainPartner: "한맥", status: "불참", amountWon: 63998594 },
    { announceDate: "2026-04-07", proj: "진주시 소하천정비종합계획(변경) 및 지형도면 고시 용역", mainPartner: "한맥", status: "불참", amountWon: 713912000 },
    { announceDate: "2026-04-02", proj: "대천8지구풍수해생활권종합정비사업기본및실시설계용역(총괄분)", mainPartner: "한맥", status: "불참", amountWon: 78956900 },
    { announceDate: "2026-04-06", proj: "정암 풍수해생활권 종합정비사업 기본 및 실시설계용역", mainPartner: "한맥", status: "불참", amountWon: 210699665 },
    { announceDate: "2026-04-06", proj: "함양 자연재해위험개선지구 정비사업 기본 및 실시설계용역", mainPartner: "한맥", status: "불참", amountWon: 128803340 },
    { announceDate: "2026-04-06", proj: "합곡원문 자연재해위험개선지구 정비사업 기본 및 실시설계용역", mainPartner: "한맥", status: "불참", amountWon: 216148914 },
    { announceDate: "2026-04-02", proj: "외동 동천 자연재해위험개선지구정비사업기본및실시설계용역(총괄분)", mainPartner: "한맥", status: "불참", amountWon: 249876000 },
    { announceDate: "2026-04-29", proj: "대포지구 풍수해생활권 종합정비사업 기본 및 실시설계용역", mainPartner: "한맥", status: "불참", amountWon: 212342700 },
    { announceDate: "2026-04-03", proj: "국도46호선 남양주(왕숙지구) 도로확장공사 실시설계용역", mainPartner: "한맥", status: "타사낙찰", amountWon: 0 },
    { announceDate: "2026-04-07", proj: "검암지구 자연재해위험개선지구 기본 및 실시설계 용역", mainPartner: "한맥", status: "타사낙찰", amountWon: 635614397 },
    { announceDate: "2026-05-20", proj: "서해안로(시흥IC~대야교차로)확장공사조사설계용역", mainPartner: "삼안", status: "타사낙찰", amountWon: 43183207 },
    { announceDate: "2026-05-20", proj: "경부선(아포~구미) 오동제2교 확장공사 실시설계 엔지니어링_국가철도공단", mainPartner: "삼안", status: "타사낙찰", amountWon: 67757580 },
    { announceDate: "2026-05-20", proj: "충북선(증평~도안)횡단 보행자통로 신설공사 실시설계 엔지니어링_삼안", mainPartner: "삼안", status: "타사낙찰", amountWon: 62671488 },
    { announceDate: "2026-02-05", proj: "왕산·갈담자연재해위험개선지구정비사업기본및실시설계용역", mainPartner: "삼안", status: "당사낙찰", amountWon: 153284560 },
    { announceDate: "2026-04-30", proj: "풍납-2소구역하수관로정비 기본설및 실시설계용역", mainPartner: "삼안", status: "당사낙찰", amountWon: 63181668 },
    { announceDate: "2026-04-16", proj: "GNSS 연계 측위 장비와 BIM을 활용한 건설현장 실증 PoC", mainPartner: "바론", status: "당사낙찰", amountWon: 50600000 },
    { announceDate: "2026-04-20", proj: "암사-1,2소구역하수관로정비사업기본및실시설계용역(SOQ)", mainPartner: "삼안", status: "입찰예정", amountWon: 157080000 },
    { announceDate: "2026-04-23", proj: "남가좌3-2소구역(성산동일대)하수관로 정비사업 기본 및 실시설계 용역", mainPartner: "삼안", status: "입찰예정", amountWon: 40722000 },
    { announceDate: "2026-04-30", proj: "풍계 자연재해위험개선지구 정비사업 기본 및 실시설계용역", mainPartner: "삼안", status: "입찰예정", amountWon: 66030000 },
    { announceDate: "2026-05-06", proj: "용연지구 풍수해생활권 종합정비사업 기본 및 실시설계 용역", mainPartner: "한맥", status: "입찰예정", amountWon: 184347200 },
    { announceDate: "2026-05-18", proj: "화성시소하천정비종합계획(재수립)및지형도면고시용역", mainPartner: "삼안", status: "입찰예정", amountWon: 475200000 },
    { announceDate: "2026-05-21", proj: "신월1-13-3 소구역 하수관로 정비사업 기본 및 실시설계 용역", mainPartner: "한맥", status: "입찰예정", amountWon: 121176000 },
    { announceDate: "2026-05-15", proj: "남양주관내신설역사(왕숙,풍양)노반,궤도기본및실시설계엔지니어링", mainPartner: "삼안", status: "입찰예정", amountWon: 294599800 },
    { announceDate: "2026-05-29", proj: "강경 풍수해생활권 종합정비사업 기본 및 실시설계용역", mainPartner: "한맥", status: "입찰예정", amountWon: 701865900 }
  ],
  /* ═ 진행 프로젝트 (계약완료 및 업무협조전 기준) ═
     나중에 엑셀 데이터 받아 유형별로 채울 예정
     유형(type): 'contract'=계약완료 / 'coop'=업무협조전
  */
  activeProjects: [
    /* 예시 항목 — 데이터 수령 후 실제 데이터로 교체
    { proj: "예시 프로젝트명", client: "발주처", amountWon: 100000000, startDate: "2026-01-01", type: "contract" },
    { proj: "협조전 예시", client: "발주처", amountWon: 50000000, startDate: "2026-03-01", type: "coop" },
    */
  ]
};

// 입찰일 패치 배열 (54건 순서대로, 없으면 "")
const BID_DATES = [
  "",           // 포천천 인도교
  "2026-01-07", // 하성농어촌도로
  "2026-02-12", // 금강 하천시설
  "2026-02-12", // 청산배수지
  "2026-02-27", // 진주시 나불지구
  "2026-02-25", // 양평군 노후하수관로
  "2026-03-12", // 평택시통복천
  "2026-02-09", // 수내천
  "",           // 탄천.한강변 (불참)
  "",           // 구례군 소하천 (불참)
  "2026-03-05", // 경기북부양생동물
  "2026-03-18", // 파주시소하천
  "2026-03-23", // 안양시분류식
  "2026-03-24", // 평택시북부지역
  "2026-03-31", // 안양시 노후상수
  "2026-03-27", // 빙어호 인도교
  "2026-04-07", // 김해시 소하천
  "2026-03-25", // 정읍시 가축분뇨
  "2026-04-21", // 초월지구
  "2026-04-20", // 어사 자연재해
  "2026-04-24", // 유동 자연재해
  "2026-04-17", // 수도권광역급행철도
  "2026-04-15", // 평택당진항배수로
  "2026-04-24", // 야당동하수도
  "2026-04-21", // 평택당진항액체
  "2026-04-29", // 국수 공공하수
  "2026-04-30", // 세종 스마트
  "2026-05-08", // 가평군소하천
  "2026-05-07", // 고성군(동부)
  "2026-05-08", // 고성군(서부)
  "",           // 부안군 노후상수 (불참)
  "",           // 진주시 소하천정비 (불참)
  "",           // 대천8지구 (불참)
  "",           // 정암 풍수해 (불참)
  "",           // 함양 자연재해 (불참)
  "",           // 합곡원문 (불참)
  "",           // 외동 동천 (불참)
  "",           // 대포지구 (불참)
  "2026-05-20", // 국도46호선
  "2026-05-28", // 검암지구
  "2026-05-29", // 서해안로
  "2026-05-28", // 경부선(아포~구미)
  "2026-05-28", // 충북선
  "2026-04-29", // 왕산·갈담
  "2026-05-28", // 풍납-2소구역
  "2026-04-20", // GNSS 연계
  "2026-06-05", // 암사-1,2소구역
  "2026-06-09", // 남가좌3-2소구역
  "",           // 풍계 자연재해
  "",           // 용연지구
  "",           // 화성시소하천
  "2026-07-03", // 신월1-13-3
  "2026-06-19", // 남양주관내신설역사
  "",           // 강경 풍수해
];
defaultData.bids.forEach((b, i) => { b.bidDate = BID_DATES[i] || ""; });

// 발주처 패치 배열 (54건 순서)
const CLIENT_LIST = [
  "경기도 포천시", "경기도 김포시", "금강유역환경청", "연천군",
  "경상남도 진주시", "양평군", "평택시", "경기도 파주시",
  "서울특별시", "구례군", "경기도청(북부)", "파주시",
  "안양시", "평택시상하수도사업소", "안양시", "인제군",
  "김해시", "정읍시", "경기도 광주시", "홍성군",
  "함안군", "국가철도공단", "평택지방해양수산청", "파주시",
  "경기평택항만공사", "양평군", "세종특별자치시", "가평군",
  "경상남도 고성군", "경상남도 고성군", "부안군", "경상남도 진주시",
  "경상북도 경주시", "충청남도 부여군", "충청남도 부여군", "충청남도 부여군",
  "경상북도 경주시", "경상남도 산청군", "서울지방국토관리청", "충청남도 당진시",
  "경기도 시흥시", "국가철도공단", "국가철도공단", "경기도 용인시",
  "서울시", "ETRI", "서울시", "서울시 마포구",
  "경기도 이천시", "충청남도 당진시", "화성특례시", "서울시 양천구",
  "국가철도공단", "충청남도 논산시",
];
defaultData.bids.forEach((b, i) => { b.client = CLIENT_LIST[i] || ""; });

/* ═══════════════════════════════════════════
   구글시트 연동 설정
   ★ Apps Script 웹앱 URL을 아래에 붙여넣으세요 ★
═══════════════════════════════════════════ */
const SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbxDRnBntBRYpmIj96G183VUEiJa8omu3EjBeith-9tjF-EQSBQytust8Wuzwucs0nJ5_A/exec';

/* 배지 상태 업데이트 헬퍼 */
function setSyncStatus(status, label) {
  const badge = document.getElementById('sync-badge');
  const lbl = document.getElementById('sync-label');
  if (!badge || !lbl) return;
  badge.className = 'sync-badge sync-' + status;
  lbl.textContent = label;
}

/* 구글시트에서 데이터 로드 */
async function loadFromSheets() {
  // URL 미설정 → 로컬 데이터 사용
  if (!SHEETS_API_URL) {
    setSyncStatus('local', '로컬 데이터');
    return;
  }

  // 새로고침 버튼 애니메이션
  const btn = document.querySelector('.sync-refresh-btn');
  if (btn) { btn.classList.add('spinning'); setTimeout(() => btn.classList.remove('spinning'), 650); }

  setSyncStatus('loading', '동기화 중...');

  try {
    const res = await fetch(SHEETS_API_URL, { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();

    // 필수 필드 검증
    if (!data.monthly || !data.bids) throw new Error('데이터 형식 오류');

    appData = data;
    normalizeAppData();
    localStorage.setItem('baronDashboardData', JSON.stringify(appData));

    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    setSyncStatus('ok', `구글시트 연동 (${timeStr})`);
    render();
  } catch (err) {
    console.warn('[Sheets] 로딩 실패:', err.message);
    setSyncStatus('error', '연동 실패 — 로컬 사용');
    // 로컬 캐시 또는 기본 데이터로 폴백
    render();
  }
}

/* ── Normalization Helpers ── */
function normalizeMonthlyData(monthly) {
  if (!monthly) return {};
  const normalized = {};
  for (const key of Object.keys(monthly)) {
    if (/^\d{4}-\d{2}$/.test(key)) {
      normalized[key] = monthly[key];
      continue;
    }
    if (/^\d{4}\.\d{2}$/.test(key)) {
      const normKey = key.replace('.', '-');
      normalized[normKey] = monthly[key];
      continue;
    }
    try {
      const d = new Date(key);
      if (!isNaN(d.getTime())) {
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        normalized[`${yyyy}-${mm}`] = monthly[key];
      } else {
        normalized[key] = monthly[key];
      }
    } catch (e) {
      normalized[key] = monthly[key];
    }
  }
  return normalized;
}

function normalizeAppData() {
  if (appData && appData.monthly) {
    appData.monthly = normalizeMonthlyData(appData.monthly);
  }
}

/* ── Initialize App Data ── */
let appData = {};
try {
  const stored = localStorage.getItem('baronDashboardData');
  if (stored) {
    appData = JSON.parse(stored);
    if (appData.bids) {
      appData.bids.forEach((b, i) => {
        if (!b.bidDate) b.bidDate = BID_DATES[i] || '';
        if (!b.client) b.client = CLIENT_LIST[i] || '';
      });
    }
  } else {
    appData = JSON.parse(JSON.stringify(defaultData));
  }
} catch (e) {
  appData = JSON.parse(JSON.stringify(defaultData));
}
normalizeAppData();
localStorage.setItem('baronDashboardData', JSON.stringify(appData));


function saveAndRender() {
  localStorage.setItem('baronDashboardData', JSON.stringify(appData));
  render();
}


// Data Import/Export
function exportData() {
  const dataStr = JSON.stringify(appData, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `baron_data_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
}

function importData(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const imported = JSON.parse(ev.target.result);
      if (imported.monthly && imported.issues) {
        appData = imported;
        normalizeAppData();
        saveAndRender();
        alert('데이터 가져오기가 완료되었습니다.');
      } else {
        alert('올바른 대시보드 데이터 형식이 아닙니다.');
      }
    } catch (err) {
      alert('파일을 읽는 중 오류가 발생했습니다.');
    }
    // reset input
    e.target.value = '';
  };
  reader.readAsText(file);
}


/* ═══════════════════════════════════════
   STATE & HELPERS
═══════════════════════════════════════ */
let state = { from: "2026-01-01", to: "2026-06-30", unit: "억" };
let periodMode = 'daily'; // 'daily' | 'quarter' | 'annual'
let chartInstance = null;
let bidChartInstance = null;
let bidPeriod = 'all';
let bidStatus = 'all';

function fmtAmt(won) {
  if (state.unit === "억") return (won / 1e8).toFixed(2) + "억";
  if (state.unit === "천") return Math.round(won / 1000).toLocaleString() + "천";
  return Math.round(won).toLocaleString() + "원";
}
function unitLabel() {
  return state.unit === "억" ? "억원" : state.unit === "천" ? "천원" : "원";
}
function chartVal(won) {
  if (state.unit === "억") return won / 1e8;
  if (state.unit === "천") return won / 1000;
  return won;
}
function chartSuffix() {
  return state.unit === "억" ? "억" : state.unit === "천" ? "천" : "원";
}

/* 일별 모드: date 문자열 YYYY-MM-DD 기준으로 범위 체크 */
function inRange(dateStr) {
  return dateStr >= state.from && dateStr <= state.to;
}
/* 월별 차트용: from~to 범위 안의 YYYY-MM 배열 반환 */
function monthsInRange() {
  const result = [];
  const fromYM = state.from.slice(0, 7); // YYYY-MM
  const toYM = state.to.slice(0, 7);
  let [y, m] = fromYM.split("-").map(Number);
  const [ey, em] = toYM.split("-").map(Number);
  while (y < ey || (y === ey && m <= em)) {
    result.push(`${y}-${String(m).padStart(2, "0")}`);
    m++; if (m > 12) { m = 1; y++; }
  }
  return result;
}

/* ═══════════════════════════════════════
   RENDER
═══════════════════════════════════════ */
const barValuePlugin = {
  id: 'barValuePlugin',
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    ctx.save();
    ctx.font = '600 11px Inter, sans-serif';
    ctx.textAlign = 'center';
    
    chart.data.datasets.forEach((dataset, i) => {
      const meta = chart.getDatasetMeta(i);
      if (meta.hidden) return;
      meta.data.forEach((bar, index) => {
        const val = dataset.data[index];
        if (!val) return; // skip 0 values
        
        let displayVal = val;
        if (chart.canvas.id === 'monthChart') {
          displayVal = Number.isInteger(val) ? val : val.toFixed(1);
        }
        
        let yPos = bar.y - 4;
        ctx.textBaseline = 'bottom';
        ctx.fillStyle = '#64748b';
        
        // 그래프가 위쪽 끝에 너무 가까울 경우 (잘림 방지 -> 막대 안쪽으로 표시)
        if (bar.y < 16) {
          yPos = bar.y + 6;
          ctx.textBaseline = 'top';
          // 입찰현황 첫번째(전체) 막대는 옅은 회색이므로 진한 글씨, 나머지는 흰색
          if (chart.canvas.id === 'bidChart' && index === 0) {
            ctx.fillStyle = '#475569';
          } else {
            ctx.fillStyle = '#ffffff';
          }
        }
        
        ctx.fillText(displayVal, bar.x, yPos);
      });
    });
    ctx.restore();
  }
};


function render() {
  const months = monthsInRange();

  /* range label — 모드에 따라 다르게 표시 */
  let rangeLabel;
  if (periodMode === 'daily') {
    rangeLabel = `${state.from.replace(/-/g, '.')} ~ ${state.to.replace(/-/g, '.')}`;
  } else if (periodMode === 'quarter') {
    const yr = state.from.slice(0, 4);
    const qNum = Math.ceil(parseInt(state.from.slice(5, 7)) / 3);
    rangeLabel = `${yr}년 ${qNum}분기 (${months.length}개월)`;
  } else {
    rangeLabel = `${state.from.slice(0, 4)}년 연간 통계`;
  }
  document.getElementById("chart-range").textContent = rangeLabel;

  /* KPI */
  const totals = months.reduce((acc, m) => {
    const d = appData.monthly[m] || { 수주: 0, 매출: 0, 수금: 0 };
    acc.수주 += d.수주; acc.매출 += d.매출; acc.수금 += d.수금;
    return acc;
  }, { 수주: 0, 매출: 0, 수금: 0 });

  document.getElementById("kpi-목표").textContent = fmtAmt(appData.targetRevenue || 10000000000);
  document.getElementById("kpi-수주").textContent = fmtAmt(totals.수주);
  document.getElementById("kpi-매출").textContent = fmtAmt(totals.매출);
  document.getElementById("kpi-수금").textContent = fmtAmt(totals.수금);

  const fromStr = months[0] ? months[0].replace("-", ".") : "";
  const toStr = months[months.length - 1] ? months[months.length - 1].replace("-", ".") : "";

  // 일별일 때는 실제 날짜를 표시
  const fromLabel = (periodMode === 'daily')
    ? state.from.replace(/-/g, '.')
    : fromStr;
  const toLabel = (periodMode === 'daily')
    ? state.to.replace(/-/g, '.')
    : toStr;

  document.getElementById("kpi-수주-sub").textContent = `${fromLabel} ~ ${toLabel}`;

  // 매출·수금 서브텍스트 — 모드별 구분
  let periodSubLabel;
  if (periodMode === 'annual') {
    periodSubLabel = `${state.from.slice(0, 4)}년 연간 누계`;
  } else if (periodMode === 'quarter') {
    const qNum = Math.ceil(parseInt(state.from.slice(5, 7)) / 3);
    periodSubLabel = `${state.from.slice(0, 4)}년 ${qNum}분기 누계`;
  } else {
    periodSubLabel = months.length + "개월 누계";
  }
  document.getElementById("kpi-매출-sub").textContent = periodSubLabel;
  document.getElementById("kpi-수금-sub").textContent = periodSubLabel;

  /* 진행 프로젝트 KPI — activeProjects 기준 */
  const activeCnt = (appData.activeProjects || []).length;
  document.getElementById('kpi-진행').textContent = activeCnt > 0 ? activeCnt + '건' : '—';
  document.getElementById('kpi-진행-sub').textContent = '계약완료·협조전 기준';

  /* CHART */
  const labels = months.map(m => {
    const [, mm] = m.split("-");
    return parseInt(mm) + "월";
  });
  const dsData = key => months.map(m => chartVal((appData.monthly[m] || {})[key] || 0));

  if (chartInstance) chartInstance.destroy();
  chartInstance = new Chart(document.getElementById("monthChart"), {
    type: "bar",
    data: {
      labels,
      datasets: [
        { label: "수주", data: dsData("수주"), backgroundColor: "#2563eb", borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8 },
        { label: "매출", data: dsData("매출"), backgroundColor: "#059669", borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8 },
        { label: "수금", data: dsData("수금"), backgroundColor: "#d97706", borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8 },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.9)",
          titleFont: { family: "'Pretendard',sans-serif", size: 13 },
          bodyFont: { family: "'Inter',sans-serif", size: 14 },
          padding: 10,
          cornerRadius: 8,
          callbacks: { label: c => " " + c.dataset.label + ": " + c.parsed.y.toFixed(state.unit === "원" ? 0 : 2) + chartSuffix() }
        }
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: { family: "'Pretendard',sans-serif", size: 12, weight: 500 }, color: "#64748b" }, border: { display: false } },
        y: { grid: { color: "#f1f5f9", drawBorder: false }, ticks: { font: { family: "'Inter',sans-serif", size: 11 }, color: "#94a3b8", callback: v => v + chartSuffix() }, border: { display: false } }
      }
    },
    plugins: [barValuePlugin]
  });

  /* ISSUES */
  const iList = document.getElementById("issue-list");
  iList.innerHTML = appData.issues.map(i =>
    `<div class="issue-item${i.alert ? " alert" : ""}"><span class="itag">${i.label}</span><span class="itext">${i.text}</span></div>`
  ).join("");
  document.getElementById("issue-count").textContent = appData.issues.length + "건";

  /* CONTRACTS */
  const filtC = appData.contracts.filter(r => inRange(r.date));
  const cWrap = document.getElementById("contract-table-wrap");
  document.getElementById("contract-count").textContent = filtC.length + "건";
  if (filtC.length === 0) { cWrap.innerHTML = '<div class="nodata">해당 기간 데이터 없음</div>'; }
  else {
    cWrap.innerHTML = `<table><thead><tr><th>프로젝트명</th><th style="text-align:right;">금액(${unitLabel()})</th><th style="text-align:right;">일자</th></tr></thead><tbody>` +
      filtC.map(r => `<tr><td><div class="pn">${r.proj}</div></td><td class="mv pos" style="text-align:right;">${fmtAmt(r.amountWon)}</td><td class="dm" style="text-align:right;">${r.date.slice(5).replace("-", ".")}</td></tr>`).join("") +
      `</tbody></table>`;
  }

  /* OUTSOURCE */
  const filtO = appData.outsources.filter(r => inRange(r.date));
  const oWrap = document.getElementById("outsource-table-wrap");
  document.getElementById("outsource-count").textContent = filtO.length + "건";
  if (filtO.length === 0) { oWrap.innerHTML = '<div class="nodata">해당 기간 데이터 없음</div>'; }
  else {
    oWrap.innerHTML = `<table><thead><tr><th>협력사 / 내용</th><th style="text-align:right;">금액(${unitLabel()})</th><th style="text-align:right;">일자</th></tr></thead><tbody>` +
      filtO.map(r => `<tr><td><div class="pn">${r.partner}</div><div class="dm">${r.note}</div></td><td class="mv neg" style="text-align:right;">${fmtAmt(r.amountWon)}</td><td class="dm" style="text-align:right;">${r.date.slice(5).replace("-", ".")}</td></tr>`).join("") +
      `</tbody></table>`;
  }

  /* BILLING */
  const filtB = appData.billings.filter(r => inRange(r.date));
  const bWrap = document.getElementById("billing-table-wrap");
  document.getElementById("billing-count").textContent = filtB.length + "건";
  if (filtB.length === 0) { bWrap.innerHTML = '<div class="nodata">해당 기간 데이터 없음</div>'; }
  else {
    bWrap.innerHTML = `<table><thead><tr><th>프로젝트명</th><th>구분</th><th style="text-align:right;">금액(${unitLabel()})</th></tr></thead><tbody>` +
      filtB.map(r => {
        const pc = r.type === "수금" ? "p-ok" : "p-warn";
        return `<tr><td><div class="pn">${r.proj}</div></td><td><span class="pill ${pc}">${r.type}</span></td><td class="mv pos" style="text-align:right;">${fmtAmt(r.amountWon)}</td></tr>`;
      }).join("") +
      `</tbody></table>`;
  }
  const sumB = filtB.filter(r => r.type === "수금").reduce((s, r) => s + r.amountWon, 0);
  document.getElementById("billing-sum").textContent = fmtAmt(sumB);
  renderBids();
}

function renderBids() {
  const todayStr = "2026-06-04"; // using system current context
  const today = new Date(todayStr);
  const thisMonth = todayStr.slice(0, 7);

  // Calculate this week's start (Sunday) and end (Saturday)
  const d = new Date(today);
  const day = d.getDay();
  const diff = d.getDate() - day;
  const startOfWeek = new Date(d.setDate(diff));
  const endOfWeek = new Date(d.setDate(diff + 6));

  const startWeekStr = startOfWeek.toISOString().slice(0, 10);
  const endWeekStr = endOfWeek.toISOString().slice(0, 10);

  // Filter bids by period (include all statuses for total counts/chart)
  const filtBids = appData.bids.filter(b => {
    let passPeriod = true;
    if (bidPeriod === 'month') passPeriod = b.announceDate.startsWith(thisMonth);
    else if (bidPeriod === 'week') passPeriod = b.announceDate >= startWeekStr && b.announceDate <= endWeekStr;
    return passPeriod;
  });

  // Count by status for badges
  let wonCnt = 0, pendCnt = 0, lostCnt = 0;
  filtBids.forEach(b => {
    if (b.status === '당사낙찰') wonCnt++;
    else if (b.status === '입찰예정') pendCnt++;
    else lostCnt++;
  });
  document.getElementById('bid-total').textContent = filtBids.length;
  document.getElementById('bid-won').textContent = wonCnt;
  document.getElementById('bid-pending').textContent = pendCnt;

  // Now apply status filter
  const displayBids = filtBids.filter(b => {
    if (bidStatus === 'all') return true;
    return b.status === bidStatus;
  }).sort((a, b) => b.announceDate.localeCompare(a.announceDate));

  // Chart uses full period-filtered bids (not status-filtered)
  let won = 0, pending = 0, lost = 0;
  let samanCnt = 0, hanmaecCnt = 0, baronCnt = 0, otherCnt = 0;
  let samanWon = 0, hanmaecWon = 0, baronWon = 0;
  filtBids.forEach(b => {
    if (b.status === "당사낙찰") { won++; if (b.mainPartner === '삼안') samanWon++; if (b.mainPartner === '바론') baronWon++; }
    else if (b.status === "입찰예정") pending++;
    else lost++;
    if (b.mainPartner === '삼안') samanCnt++;
    else if (b.mainPartner === '한맥') hanmaecCnt++;
    else if (b.mainPartner === '바론') baronCnt++;
    else otherCnt++;
  });

  // Render Table (status-filtered)
  const statusClass = { "당사낙찰": "p-ok", "입찰예정": "p-bid", "타사낙찰": "p-lost", "불참": "p-lost" };
  document.getElementById("bid-table").innerHTML =
    `<thead><tr><th>과업명</th><th>발주처</th><th>주관사</th><th style="text-align:right;">바론지분(${unitLabel()})</th><th>공고일</th><th>입찰일</th><th>상태</th></tr></thead><tbody>` +
    (displayBids.length === 0 ? `<tr><td colspan="7" style="text-align:center;color:#94a3b8;padding:20px;">해당 기간 데이터가 없습니다.</td></tr>` :
      displayBids.map(b => {
        const shortProj = b.proj.length > 30 ? b.proj.substring(0, 30) + '...' : b.proj;
        return `<tr>
      <td class="pn" title="${b.proj}">${shortProj}</td>
      <td class="dm">${b.client || '-'}</td>
      <td class="dm">${b.mainPartner}</td>
      <td class="mv" style="text-align:right;">${fmtAmt(b.amountWon)}</td>
      <td class="dm">${b.announceDate.slice(5).replace("-", ".")}</td>
      <td class="dm">${b.bidDate ? b.bidDate.slice(5).replace("-", ".") : "-"}</td>
      <td><span class="pill ${statusClass[b.status] || 'p-lost'}">${b.status}</span></td>
    </tr>`;
      }).join("")) +
    `</tbody>`;


  // Chart — based on full period-filtered bids (not display-filtered)
  if (bidChartInstance) bidChartInstance.destroy();
  const totalCnt = filtBids.length;
  const chartData = [totalCnt, samanCnt, hanmaecCnt, baronCnt];
  if (otherCnt > 0) chartData.push(otherCnt);
  const chartLabels = ['전체', '삼안', '한맥', '바론'];
  if (otherCnt > 0) chartLabels.push('기타');

  bidChartInstance = new Chart(document.getElementById("bidChart"), {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [{
        label: '참여 건수',
        data: chartData,
        backgroundColor: ['#e2e8f0', '#2563eb', '#059669', '#d97706', '#94a3b8'],
        borderRadius: 4,
        barPercentage: 0.6
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.9)",
          titleFont: { family: "'Pretendard',sans-serif", size: 13 },
          bodyFont: { family: "'Inter',sans-serif", size: 14 },
          padding: 10,
          cornerRadius: 8,
          callbacks: {
            label: function (c) {
              let val = c.raw;
              let pct = totalCnt > 0 ? (val / totalCnt * 100).toFixed(1) : 0;
              return ` ${val}건 (${pct}%)`;
            }
          }
        }
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: { family: "'Pretendard',sans-serif", size: 11, weight: 500 }, color: "#64748b" }, border: { display: false } },
        y: { beginAtZero: true, grid: { color: "#f1f5f9", drawBorder: false }, ticks: { font: { family: "'Inter',sans-serif", size: 11 }, color: "#94a3b8", stepSize: Math.max(5, Math.ceil(totalCnt / 5)) }, border: { display: false } }
      }
    },
    plugins: [barValuePlugin]
  });

  // Render Summary Text
  let summaryText = `바론 입찰참여 전체 총 <b>${filtBids.length}</b>건 중 삼안 <b>${samanCnt}</b>건 / 한맥 <b>${hanmaecCnt}</b>건 / 바론 <b>${baronCnt}</b>건 참여. `;
  summaryText += `<br/>그중 삼안에서 <b>${samanWon}</b>건 / 바론 <b>${baronWon}</b>건 총 <b>${won}</b>건 당사낙찰 됨.`;
  document.getElementById("bid-summary-text").innerHTML = summaryText;
}

/* ═══════════════════════════════════════
   CONTROLS
═══════════════════════════════════════ */
/* 기간 모드 전환 */
function setPeriodMode(mode) {
  periodMode = mode;
  // 탭 UI 업데이트
  ['daily', 'quarter', 'annual'].forEach(m => {
    const tab = document.getElementById('pt-' + m);
    if (tab) tab.className = 'period-tab' + (m === mode ? ' active' : '');
    const panel = document.getElementById('period-' + m);
    if (panel) panel.style.display = (m === mode ? 'flex' : 'none');
  });
}

function applyFilter() {
  if (periodMode === 'daily') {
    const f = document.getElementById("dateFrom").value; // YYYY-MM-DD
    const t = document.getElementById("dateTo").value;
    if (!f || !t) { alert("날짜를 선택해 주세요."); return; }
    if (f > t) { alert("시작일이 종료일보다 클 수 없습니다."); return; }
    state.from = f;
    state.to = t;
  } else if (periodMode === 'quarter') {
    const yr = parseInt(document.getElementById("quarterYear").value);
    const q = parseInt(document.getElementById("quarterSel").value);
    const startMonth = (q - 1) * 3 + 1;
    const endMonth = startMonth + 2;
    state.from = `${yr}-${String(startMonth).padStart(2, '0')}-01`;
    // 마지막 달 마지막 일을 정확히 구함
    const lastDay = new Date(yr, endMonth, 0).getDate();
    state.to = `${yr}-${String(endMonth).padStart(2, '0')}-${lastDay}`;
  } else if (periodMode === 'annual') {
    const yr = parseInt(document.getElementById("annualYear").value);
    state.from = `${yr}-01-01`;
    state.to = `${yr}-12-31`;
  }
  render();
}

function setUnit(u) {
  state.unit = u;
  ["억", "천", "원"].forEach(x => {
    document.getElementById("u-" + x).className = "unit-btn" + (x === u ? " active" : "");
  });
  render();
}

function setBidPeriod(type) {
  bidPeriod = type;
  ["all", "month", "week"].forEach(x => {
    document.getElementById("b-" + x).className = "unit-btn" + (x === type ? " active" : "");
  });
  renderBids();
}

function setBidStatus(val) {
  bidStatus = val;
  // Update badge active states
  ['all', 'won', 'pend'].forEach(k => {
    const el = document.getElementById('bs-' + k);
    if (el) el.classList.remove('active');
  });
  const map = { 'all': 'bs-all', '당사낙찰': 'bs-won', '입찰예정': 'bs-pend' };
  const target = map[val];
  if (target) document.getElementById(target).classList.add('active');
  renderBids();
}

/* ═══════════════════════════════════════
   INIT
 ═══════════════════════════════════════ */
render(); // 로컬 데이터로 즉시 렌더

// 구글시트에서 최신 데이터 로드 (비동기)
loadFromSheets();

// 5분마다 자동 새로고침 (URL 설정 시에만 유효)
if (SHEETS_API_URL) {
  setInterval(loadFromSheets, 5 * 60 * 1000);
}

/* ── 진행 프로젝트 모달 열기 ── */
function openActiveProjectsModal() {
  const projects = appData.activeProjects || [];
  const tbody = document.getElementById('ap-table-body');
  const badge = document.getElementById('ap-modal-count');
  const footer = document.getElementById('ap-modal-footer');

  badge.textContent = projects.length + '건';

  if (projects.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="ap-nodata">
      현재 등록된 진행 프로젝트가 없습니다.<br>
      <span style="font-size:0.8rem;color:#94a3b8;">데이터를 받은 후 업데이트하겠습니다.</span>
    </td></tr>`;
    footer.innerHTML = '';
  } else {
    tbody.innerHTML = projects.map(p => {
      const pill = p.type === 'contract'
        ? '<span class="ap-pill-contract">계약완료</span>'
        : '<span class="ap-pill-coop">업무협조전</span>';
      return `<tr>
        <td><div class="ap-proj-name">${p.proj}</div></td>
        <td><div class="ap-client">${p.client || '-'}</div></td>
        <td class="ap-amount">${p.amountWon ? fmtAmt(p.amountWon) : '-'}</td>
        <td class="ap-date">${p.startDate ? p.startDate.replace(/-/g, '.') : '-'}</td>
        <td>${pill}</td>
      </tr>`;
    }).join('');

    const totalAmt = projects.reduce((s, p) => s + (p.amountWon || 0), 0);
    footer.innerHTML = `
      <span class="ap-footer-label">전체 계약금액 합계</span>
      <span class="ap-footer-total">${fmtAmt(totalAmt)}</span>
    `;
  }

  document.getElementById('active-modal-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeActiveProjectsModal() {
  document.getElementById('active-modal-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

// ESC 키로 닫기
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeActiveProjectsModal();
});
