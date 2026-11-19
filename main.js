(() => {
  // src/modules/data.js
  var PREFECTURES = [
    { id: 1, name: "北海道", kana: "ほっかいどう", capital: "札幌市", capitalKana: "さっぽろし", region: "北海道・東北" },
    { id: 2, name: "青森県", kana: "あおもりけん", capital: "青森市", capitalKana: "あおもりし", region: "北海道・東北" },
    { id: 3, name: "岩手県", kana: "いわてけん", capital: "盛岡市", capitalKana: "もりおかし", region: "北海道・東北" },
    { id: 4, name: "宮城県", kana: "みやぎけん", capital: "仙台市", capitalKana: "せんだいし", region: "北海道・東北" },
    { id: 5, name: "秋田県", kana: "あきたけん", capital: "秋田市", capitalKana: "あきたし", region: "北海道・東北" },
    { id: 6, name: "山形県", kana: "やまがたけん", capital: "山形市", capitalKana: "やまがたし", region: "北海道・東北" },
    { id: 7, name: "福島県", kana: "ふくしまけん", capital: "福島市", capitalKana: "ふくしまし", region: "北海道・東北" },
    { id: 8, name: "茨城県", kana: "いばらきけん", capital: "水戸市", capitalKana: "みとし", region: "関東" },
    { id: 9, name: "栃木県", kana: "とちぎけん", capital: "宇都宮市", capitalKana: "うつのみやし", region: "関東" },
    { id: 10, name: "群馬県", kana: "ぐんまけん", capital: "前橋市", capitalKana: "まえばしし", region: "関東" },
    { id: 11, name: "埼玉県", kana: "さいたまけん", capital: "さいたま市", capitalKana: "さいたまし", region: "関東" },
    { id: 12, name: "千葉県", kana: "ちばけん", capital: "千葉市", capitalKana: "ちばし", region: "関東" },
    { id: 13, name: "東京都", kana: "とうきょうと", capital: "新宿区", capitalKana: "しんじゅくく", region: "関東" },
    { id: 14, name: "神奈川県", kana: "かながわけん", capital: "横浜市", capitalKana: "よこはまし", region: "関東" },
    { id: 15, name: "新潟県", kana: "にいがたけん", capital: "新潟市", capitalKana: "にいがたし", region: "中部" },
    { id: 16, name: "富山県", kana: "とやまけん", capital: "富山市", capitalKana: "とやまし", region: "中部" },
    { id: 17, name: "石川県", kana: "いしかわけん", capital: "金沢市", capitalKana: "かなざわし", region: "中部" },
    { id: 18, name: "福井県", kana: "ふくいけん", capital: "福井市", capitalKana: "ふくいし", region: "中部" },
    { id: 19, name: "山梨県", kana: "やまなしけん", capital: "甲府市", capitalKana: "こうふし", region: "中部" },
    { id: 20, name: "長野県", kana: "ながのけん", capital: "長野市", capitalKana: "ながのし", region: "中部" },
    { id: 21, name: "岐阜県", kana: "ぎふけん", capital: "岐阜市", capitalKana: "ぎふし", region: "中部" },
    { id: 22, name: "静岡県", kana: "しずおかけん", capital: "静岡市", capitalKana: "しずおかし", region: "中部" },
    { id: 23, name: "愛知県", kana: "あいちけん", capital: "名古屋市", capitalKana: "なごやし", region: "中部" },
    { id: 24, name: "三重県", kana: "みえけん", capital: "津市", capitalKana: "つし", region: "近畿" },
    { id: 25, name: "滋賀県", kana: "しがけん", capital: "大津市", capitalKana: "おおつし", region: "近畿" },
    { id: 26, name: "京都府", kana: "きょうとふ", capital: "京都市", capitalKana: "きょうとし", region: "近畿" },
    { id: 27, name: "大阪府", kana: "おおさかふ", capital: "大阪市", capitalKana: "おおさかし", region: "近畿" },
    { id: 28, name: "兵庫県", kana: "ひょうごけん", capital: "神戸市", capitalKana: "こうべし", region: "近畿" },
    { id: 29, name: "奈良県", kana: "ならけん", capital: "奈良市", capitalKana: "ならし", region: "近畿" },
    { id: 30, name: "和歌山県", kana: "わかやまけん", capital: "和歌山市", capitalKana: "わかやまし", region: "近畿" },
    { id: 31, name: "鳥取県", kana: "とっとりけん", capital: "鳥取市", capitalKana: "とっとりし", region: "中国・四国" },
    { id: 32, name: "島根県", kana: "しまねけん", capital: "松江市", capitalKana: "まつえし", region: "中国・四国" },
    { id: 33, name: "岡山県", kana: "おかやまけん", capital: "岡山市", capitalKana: "おかやまし", region: "中国・四国" },
    { id: 34, name: "広島県", kana: "ひろしまけん", capital: "広島市", capitalKana: "ひろしまし", region: "中国・四国" },
    { id: 35, name: "山口県", kana: "やまぐちけん", capital: "山口市", capitalKana: "やまぐちし", region: "中国・四国" },
    { id: 36, name: "徳島県", kana: "とくしまけん", capital: "徳島市", capitalKana: "とくしまし", region: "中国・四国" },
    { id: 37, name: "香川県", kana: "かがわけん", capital: "高松市", capitalKana: "たかまつし", region: "中国・四国" },
    { id: 38, name: "愛媛県", kana: "えひめけん", capital: "松山市", capitalKana: "まつやまし", region: "中国・四国" },
    { id: 39, name: "高知県", kana: "こうちけん", capital: "高知市", capitalKana: "こうちし", region: "中国・四国" },
    { id: 40, name: "福岡県", kana: "ふくおかけん", capital: "福岡市", capitalKana: "ふくおかし", region: "九州・沖縄" },
    { id: 41, name: "佐賀県", kana: "さがけん", capital: "佐賀市", capitalKana: "さがし", region: "九州・沖縄" },
    { id: 42, name: "長崎県", kana: "ながさきけん", capital: "長崎市", capitalKana: "ながさきし", region: "九州・沖縄" },
    { id: 43, name: "熊本県", kana: "くまもとけん", capital: "熊本市", capitalKana: "くまもとし", region: "九州・沖縄" },
    { id: 44, name: "大分県", kana: "おおいたけん", capital: "大分市", capitalKana: "おおいたし", region: "九州・沖縄" },
    { id: 45, name: "宮崎県", kana: "みやざきけん", capital: "宮崎市", capitalKana: "みやざきし", region: "九州・沖縄" },
    { id: 46, name: "鹿児島県", kana: "かごしまけん", capital: "鹿児島市", capitalKana: "かごしまし", region: "九州・沖縄" },
    { id: 47, name: "沖縄県", kana: "おきなわけん", capital: "那覇市", capitalKana: "なはし", region: "九州・沖縄" }
  ];

  // src/modules/map.js
  var cachedSvgText = null;
  async function getJapanSvgText() {
    if (cachedSvgText) return cachedSvgText;
    const res = await fetch("https://cdn.jsdelivr.net/gh/static-166/statics@main/map.svg");
    cachedSvgText = await res.text();
    return cachedSvgText;
  }
  async function renderJapanMapToContainer($container, targetId, clearedIds = /* @__PURE__ */ new Set()) {
    const svgText = await getJapanSvgText();
    $container.html(svgText);
    const svg = $container.find("svg");
    if (!svg) return;
    svg.removeAttribute("width");
    svg.removeAttribute("height");
    svg.classList.add("japan-map-svg");
    const prefs = svg.querySelectorAll(".prefecture, [data-code]");
    let targetEl = null;
    prefs.forEach((el) => {
      const code = Number(el.getAttribute("data-code"));
      if (!code) return;
      el.classList.add("map-pref");
      el.removeAttribute("style");
      if (code === targetId) {
        el.classList.add("is-target");
        targetEl = el;
      } else if (clearedIds.has(code)) {
        el.classList.add("is-cleared");
      }
    });
    if (targetEl && typeof targetEl.getBBox === "function") {
      const bbox = targetEl.getBBox();
      const cx = bbox.x + bbox.width / 2;
      const cy = bbox.y + bbox.height / 2;
      const ns = "http://w3.org";
      const g = document.createElementNS(ns, "g");
      g.setAttribute("class", "map-pointer");
      g.setAttribute("transform", `translate(${cx}, ${cy})`);
      g.innerHTML = `
      <circle r="18" class="pointer-ring" />
      <circle r="5" class="pointer-dot" />
      <path d="M 0,-32 L -8,-16 L 8,-16 Z" class="pointer-arrow" />
    `;
      svg.appendChild(g);
    }
  }

  // src/modules/romaji.js
  var ROMAJI_MAP = {
    "あ": ["a"],
    "い": ["i"],
    "う": ["u"],
    "え": ["e"],
    "お": ["o"],
    "か": ["ka", "ca"],
    "き": ["ki"],
    "く": ["ku", "cu"],
    "け": ["ke"],
    "こ": ["ko", "co"],
    "さ": ["sa"],
    "し": ["si", "shi", "ci"],
    "す": ["su"],
    "せ": ["se"],
    "そ": ["so"],
    "た": ["ta"],
    "ち": ["ti", "chi"],
    "つ": ["tu", "tsu"],
    "て": ["te"],
    "と": ["to"],
    "な": ["na"],
    "に": ["ni"],
    "ぬ": ["nu"],
    "ね": ["ne"],
    "の": ["no"],
    "は": ["ha"],
    "ひ": ["hi"],
    "ふ": ["hu", "fu"],
    "へ": ["he"],
    "ほ": ["ho"],
    "ま": ["ma"],
    "み": ["mi"],
    "む": ["mu"],
    "め": ["me"],
    "も": ["mo"],
    "や": ["ya"],
    "ゆ": ["yu"],
    "よ": ["yo"],
    "ら": ["ra"],
    "り": ["ri"],
    "る": ["ru"],
    "れ": ["re"],
    "ろ": ["ro"],
    "わ": ["wa"],
    "を": ["wo"],
    "ん": ["nn"],
    "が": ["ga"],
    "ぎ": ["gi"],
    "ぐ": ["gu"],
    "げ": ["ge"],
    "ご": ["go"],
    "ざ": ["za"],
    "じ": ["zi", "ji"],
    "ず": ["zu"],
    "ぜ": ["ze"],
    "ぞ": ["zo"],
    "だ": ["da"],
    "ぢ": ["di"],
    "づ": ["du"],
    "で": ["de"],
    "ど": ["do"],
    "ば": ["ba"],
    "び": ["bi"],
    "ぶ": ["bu"],
    "べ": ["be"],
    "ぼ": ["bo"],
    "ぱ": ["pa"],
    "ぴ": ["pi"],
    "ぷ": ["pu"],
    "ぺ": ["pe"],
    "ぽ": ["po"],
    "きゃ": ["kya"],
    "きゅ": ["kyu"],
    "きょ": ["kyo"],
    "しゃ": ["sya", "sha"],
    "しゅ": ["syu", "shu"],
    "しょ": ["syo", "sho"],
    "ちゃ": ["tya", "cha"],
    "ちゅ": ["tyu", "chu"],
    "ちょ": ["tyo", "cho"],
    "にゃ": ["nya"],
    "にゅ": ["nyu"],
    "にょ": ["nyo"],
    "ひゃ": ["hya"],
    "ひゅ": ["hyu"],
    "ひょ": ["hyo"],
    "みゃ": ["mya"],
    "みゅ": ["myu"],
    "みょ": ["myo"],
    "りゃ": ["rya"],
    "りゅ": ["ryu"],
    "りょ": ["ryo"],
    "ぎゃ": ["gya"],
    "ぎゅ": ["gyu"],
    "ぎょ": ["gyo"],
    "じゃ": ["zya", "ja", "jya"],
    "じゅ": ["zyu", "ju", "jyu"],
    "じょ": ["zyo", "jo", "jyo"],
    "びゃ": ["bya"],
    "びゅ": ["byu"],
    "びょ": ["byo"],
    "ぴゃ": ["pya"],
    "ぴゅ": ["pyu"],
    "ぴょ": ["pyo"],
    "っ": ["xtu", "ltu", "xtsu", "ltsu"],
    "ー": ["-"]
  };
  var RomajiEngine = class {
    constructor(kana) {
      this.tokens = this.tokenize(kana);
      this.tokenIndex = 0;
      this.currentBuffer = "";
      this.typedRomaji = "";
    }
    tokenize(kana) {
      const tokens = [];
      let i = 0;
      while (i < kana.length) {
        const twoChar = kana.slice(i, i + 2);
        if (ROMAJI_MAP[twoChar]) {
          tokens.push({ kana: twoChar, patterns: [...ROMAJI_MAP[twoChar]] });
          i += 2;
          continue;
        }
        const char = kana[i];
        if (char === "っ" && i + 1 < kana.length) {
          const nextTwo = kana.slice(i + 1, i + 3);
          const nextOne = kana[i + 1];
          const nextPatterns = ROMAJI_MAP[nextTwo] || ROMAJI_MAP[nextOne];
          if (nextPatterns) {
            const sokuonPatterns = nextPatterns.map((p) => p[0]).filter((c) => !["a", "i", "u", "e", "o", "n"].includes(c));
            tokens.push({
              kana: "っ",
              patterns: [.../* @__PURE__ */ new Set([...sokuonPatterns, ...ROMAJI_MAP["っ"]])]
            });
            i += 1;
            continue;
          }
        }
        if (char === "ん") {
          const nextChar = kana[i + 1];
          const canSingleN = Boolean(nextChar) && !"あいうえおなにぬねのやゆよん".includes(nextChar);
          tokens.push({
            kana: "ん",
            canSingleN,
            patterns: ["nn"]
          });
          i += 1;
          continue;
        }
        tokens.push({ kana: char, patterns: [...ROMAJI_MAP[char] || [char]] });
        i += 1;
      }
      return tokens;
    }
    input(key) {
      if (this.isCompleted()) return { status: "completed" };
      const k = key.toLowerCase();
      const targetToken = this.tokens[this.tokenIndex];
      if (targetToken.kana === "ん" && targetToken.canSingleN && this.currentBuffer === "n" && k !== "n") {
        const nextToken = this.tokens[this.tokenIndex + 1];
        if (nextToken && nextToken.patterns.some((p) => p.startsWith(k))) {
          this.tokenIndex++;
          this.currentBuffer = "";
          return this.input(k);
        }
      }
      const candidate = this.currentBuffer + k;
      const matchedPatterns = targetToken.patterns.filter((p) => p.startsWith(candidate));
      if (matchedPatterns.length > 0) {
        this.currentBuffer = candidate;
        this.typedRomaji += k;
        if (matchedPatterns.includes(this.currentBuffer)) {
          this.tokenIndex++;
          this.currentBuffer = "";
        }
        return {
          status: this.isCompleted() ? "completed" : "hit"
        };
      }
      return { status: "miss" };
    }
    isCompleted() {
      return this.tokenIndex >= this.tokens.length;
    }
    getDisplayState() {
      let remaining = "";
      for (let i = this.tokenIndex; i < this.tokens.length; i++) {
        const token = this.tokens[i];
        if (i === this.tokenIndex && this.currentBuffer.length > 0) {
          const bestMatch = token.patterns.find((p) => p.startsWith(this.currentBuffer)) || token.patterns[0];
          remaining += bestMatch.slice(this.currentBuffer.length);
        } else {
          remaining += token.patterns[0];
        }
      }
      return {
        typed: this.typedRomaji,
        untyped: remaining
      };
    }
  };

  // src/modules/sound.js
  var SoundManager = class {
    constructor() {
      this.enabled = true;
      this.ctx = null;
    }
    init() {
      if (!this.ctx) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
    }
    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }
    playKey() {
      if (!this.enabled) return;
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(620, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, this.ctx.currentTime + 0.035);
      gain.gain.setValueAtTime(0.14, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(1e-3, this.ctx.currentTime + 0.035);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.035);
    }
    playMiss() {
      if (!this.enabled) return;
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(135, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(85, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(1e-3, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    }
    playClear(streak = 1) {
      if (!this.enabled) return;
      this.init();
      const pitchBoost = Math.min(streak * 12, 180);
      const notes = [523.25 + pitchBoost, 659.25 + pitchBoost, 783.99 + pitchBoost];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.035);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime + idx * 0.035);
        gain.gain.exponentialRampToValueAtTime(1e-3, this.ctx.currentTime + idx * 0.035 + 0.14);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.035);
        osc.stop(this.ctx.currentTime + idx * 0.035 + 0.14);
      });
    }
    playLevelUp() {
      if (!this.enabled) return;
      this.init();
      const fanfare = [523.25, 659.25, 783.99, 1046.5];
      fanfare.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.18, this.ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(1e-3, this.ctx.currentTime + idx * 0.08 + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.08);
        osc.stop(this.ctx.currentTime + idx * 0.08 + 0.3);
      });
    }
  };
  var sound = new SoundManager();

  // src/modules/storage.js
  var CACHE_NAME = "pref-typing-pro-cache-v1";
  var SAVE_PATH = "./index.html/data";
  var FALLBACK_KEY = "pref_typing_pro_save_v1";
  var DEFAULT_DATA = {
    exp: 0,
    level: 1,
    sp: 0,
    skills: {
      scoreBoost: 0,
      streakBonus: 0,
      timeExtend: 0
    },
    records: [],
    bestStreak: 0
  };
  var CHARACTER_STAGES = [
    { minLv: 1, name: "見習いタイパー", icon: "🐣", title: "駆け出しの旅人" },
    { minLv: 5, name: "高速の書記官", icon: "🦊", title: "疾風の指先" },
    { minLv: 12, name: "電脳の賢者", icon: "🦉", title: "47都道府県の覇者" },
    { minLv: 25, name: "鍵盤の龍神", icon: "🐉", title: "神速のエンターテイナー" }
  ];
  var GameStorage = class {
    constructor() {
      this.data = structuredClone(DEFAULT_DATA);
    }
    async init() {
      this.data = await this.load();
    }
    async load() {
      try {
        if ("caches" in window) {
          const cache = await caches.open(CACHE_NAME);
          const res = await cache.match(SAVE_PATH);
          if (res) {
            const parsed = await res.json();
            return this.mergeData(parsed);
          }
        }
        const raw = localStorage.getItem(FALLBACK_KEY);
        return raw ? this.mergeData(JSON.parse(raw)) : structuredClone(DEFAULT_DATA);
      } catch {
        return structuredClone(DEFAULT_DATA);
      }
    }
    mergeData(parsed) {
      return {
        ...structuredClone(DEFAULT_DATA),
        ...parsed,
        skills: { ...DEFAULT_DATA.skills, ...parsed.skills || {} }
      };
    }
    async save() {
      const body = JSON.stringify(this.data);
      if ("caches" in window) {
        const cache = await caches.open(CACHE_NAME);
        const res = new Response(body, {
          headers: { "Content-Type": "application/json; charset=utf-8" }
        });
        await cache.put(SAVE_PATH, res);
      } else {
        localStorage.setItem(FALLBACK_KEY, body);
      }
    }
    async reset() {
      this.data = structuredClone(DEFAULT_DATA);
      if ("caches" in window) {
        const cache = await caches.open(CACHE_NAME);
        await cache.delete(SAVE_PATH);
      }
      localStorage.removeItem(FALLBACK_KEY);
      await this.save();
    }
    getNextLevelExp(lv = this.data.level) {
      return Math.floor(500 * Math.pow(1.25, lv - 1));
    }
    getCharacterInfo() {
      let current = CHARACTER_STAGES;
      for (const stage of CHARACTER_STAGES) {
        if (this.data.level >= stage.minLv) current = stage;
      }
      return current;
    }
    getMultipliers() {
      return {
        scoreMult: 1 + this.data.skills.scoreBoost * 0.1,
        streakMult: 1 + this.data.skills.streakBonus * 0.15,
        extraTime: this.data.skills.timeExtend * 2
      };
    }
    async upgradeSkill(skillKey) {
      const maxLevels = { scoreBoost: 10, streakBonus: 10, timeExtend: 5 };
      if (this.data.sp <= 0) return false;
      if (this.data.skills[skillKey] >= maxLevels[skillKey]) return false;
      this.data.sp -= 1;
      this.data.skills[skillKey] += 1;
      await this.save();
      return true;
    }
    async recordGameResult(result) {
      this.data.records.push({
        date: (/* @__PURE__ */ new Date()).toLocaleDateString("ja-JP", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }),
        ...result
      });
      this.data.records.sort((a, b) => b.score - a.score);
      this.data.records = this.data.records.slice(0, 10);
      if (result.maxStreak > this.data.bestStreak) {
        this.data.bestStreak = result.maxStreak;
      }
      const gainedExp = Math.max(50, Math.round(result.score * 0.15 + result.maxStreak * 20));
      this.data.exp += gainedExp;
      let leveledUp = false;
      let nextExp = this.getNextLevelExp();
      while (this.data.exp >= nextExp) {
        this.data.exp -= nextExp;
        this.data.level += 1;
        this.data.sp += 1;
        leveledUp = true;
        nextExp = this.getNextLevelExp();
      }
      await this.save();
      return { gainedExp, leveledUp, newLevel: this.data.level };
    }
  };
  var storage = new GameStorage();

  // src/main.js
  var $ = window.jQuery;
  var state = {
    isPlaying: false,
    mode: "pref",
    timeLimit: 60,
    actualTimeLimit: 60,
    timeLeft: 60,
    timerId: null,
    pool: [],
    clearedIds: /* @__PURE__ */ new Set(),
    currentItem: null,
    currentWordMissed: false,
    engine: null,
    score: 0,
    combo: 0,
    streak: 0,
    maxStreak: 0,
    clearedCount: 0,
    totalHits: 0,
    totalMisses: 0,
    startTime: 0
  };
  $(async function() {
    initJQueryUI();
    await Promise.all([
      storage.init(),
      getJapanSvgText().catch(() => null),
      new Promise((resolve) => setTimeout(resolve, 450))
    ]);
    refreshProfileUI();
    bindEvents();
    $("#loading-screen").addClass("fade-out");
    setTimeout(() => $("#loading-screen").remove(), 400);
  });
  function initJQueryUI() {
    $("#home-tabs").tabs();
    $("#mode-select input").checkboxradio({ icon: false });
    $("#region-select input").checkboxradio({ icon: false });
    $("#time-slider").slider({
      value: 60,
      min: 30,
      max: 180,
      step: 15,
      slide: function(event, ui) {
        state.timeLimit = ui.value;
        $("#time-display").text(ui.value);
      }
    });
    $("#exp-progressbar").progressbar({ value: 0 });
    $("#time-progressbar").progressbar({ value: 100 });
    $("#result-dialog").dialog({
      autoOpen: false,
      modal: true,
      width: 460,
      resizable: false,
      draggable: false,
      buttons: {
        "もう一度プレイ": function() {
          $(this).dialog("close");
          startGame();
        },
        "ホームに戻る": function() {
          $(this).dialog("close");
          resetToSetup();
        }
      }
    });
  }
  function refreshProfileUI() {
    const { data } = storage;
    const charInfo = storage.getCharacterInfo();
    const nextExp = storage.getNextLevelExp();
    const mults = storage.getMultipliers();
    $("#char-icon").text(charInfo.icon);
    $("#char-lv").text(data.level);
    $("#char-name").text(charInfo.name);
    $("#char-title").text(charInfo.title);
    $("#exp-progressbar").progressbar("value", data.exp / nextExp * 100);
    $("#exp-text").text(`${data.exp} / ${nextExp} EXP`);
    if (data.sp > 0) {
      $("#sp-alert").removeClass("hidden");
      $("#header-sp").text(data.sp);
      $("#tab-sp-badge").removeClass("hidden").text(data.sp);
    } else {
      $("#sp-alert").addClass("hidden");
      $("#tab-sp-badge").addClass("hidden");
    }
    if (mults.extraTime > 0) {
      $("#bonus-time-label").removeClass("hidden").text(`+${mults.extraTime}秒 スキル効果`);
    } else {
      $("#bonus-time-label").addClass("hidden");
    }
    $("#upgrade-sp").text(data.sp);
    $("#sk-lv-scoreBoost").text(`Lv.${data.skills.scoreBoost} / 10`);
    $("#sk-lv-streakBonus").text(`Lv.${data.skills.streakBonus} / 10`);
    $("#sk-lv-timeExtend").text(`Lv.${data.skills.timeExtend} / 5`);
    const maxMap = { scoreBoost: 10, streakBonus: 10, timeExtend: 5 };
    $(".upgrade-btn").each(function() {
      const sk = $(this).data("skill");
      const isMax = data.skills[sk] >= maxMap[sk];
      $(this).prop("disabled", data.sp <= 0 || isMax).text(isMax ? "MAX" : "強化 (1 SP)");
    });
    $("#rec-best-streak").text(`${data.bestStreak} 問`);
    const $tbody = $("#record-tbody").empty();
    if (data.records.length === 0) {
      $tbody.append('<tr><td colspan="7" class="empty-msg">まだ記録がありません</td></tr>');
    } else {
      const modeLabels = { pref: "都道府県", capital: "県庁所在地", map: "🗺️地図クイズ" };
      data.records.forEach((rec, i) => {
        $tbody.append(`
        <tr>
          <td class="mono">#${i + 1}</td>
          <td><span class="mini-rank rank-${rec.rank}">${rec.rank}</span></td>
          <td class="mono"><strong>${rec.score.toLocaleString()}</strong></td>
          <td class="mono">${rec.maxStreak} 問</td>
          <td class="mono">${rec.kpm}</td>
          <td class="mono">${rec.accuracy}%</td>
          <td>${modeLabels[rec.mode] || "都道府県"}</td>
        </tr>
      `);
      });
    }
  }
  function bindEvents() {
    $("#btn-sound").on("click", function() {
      const isOn = sound.toggle();
      $(this).text(isOn ? "🔊 ON" : "🔇 OFF").toggleClass("muted", !isOn);
    });
    $(".upgrade-btn").on("click", async function() {
      const skillKey = $(this).data("skill");
      if (await storage.upgradeSkill(skillKey)) {
        sound.playLevelUp();
        refreshProfileUI();
      }
    });
    $("#btn-clear-save").on("click", async function() {
      if (confirm("スコア記録とキャラクター強化データを初期化しますか？")) {
        await storage.reset();
        refreshProfileUI();
      }
    });
    $("#reg-all").on("change", function() {
      if ($(this).is(":checked")) {
        $("#region-select input:not(#reg-all)").prop("checked", false).checkboxradio("refresh");
      } else if ($("#region-select input:checked").length === 0) {
        $(this).prop("checked", true).checkboxradio("refresh");
      }
    });
    $("#region-select input:not(#reg-all)").on("change", function() {
      if ($(this).is(":checked")) {
        $("#reg-all").prop("checked", false).checkboxradio("refresh");
      } else if ($("#region-select input:checked").length === 0) {
        $("#reg-all").prop("checked", true).checkboxradio("refresh");
      }
    });
    $("#btn-start").on("click", startGame);
    $(document).on("keydown", function(e) {
      if (!state.isPlaying && !$("#result-dialog").dialog("isOpen")) {
        if (e.code === "Space" && $("#home-tabs").tabs("option", "active") === 0) {
          e.preventDefault();
          startGame();
        }
        return;
      }
      if (!state.isPlaying) return;
      if (e.key === "Escape") {
        stopGame(false);
        return;
      }
      if (/^[a-zA-Z\-]$/.test(e.key)) {
        e.preventDefault();
        handleTyping(e.key);
      }
    });
  }
  function buildQuestionPool() {
    const isAll = $("#reg-all").is(":checked");
    if (isAll) return [...PREFECTURES];
    const selectedRegions = $("#region-select input:checked").map((_, el) => $(el).val()).get();
    return PREFECTURES.filter((p) => selectedRegions.includes(p.region));
  }
  async function startGame() {
    const mults = storage.getMultipliers();
    state.mode = $('input[name="mode"]:checked').val();
    state.pool = shuffleArray(buildQuestionPool());
    state.clearedIds = /* @__PURE__ */ new Set();
    state.actualTimeLimit = state.timeLimit + mults.extraTime;
    state.timeLeft = state.actualTimeLimit;
    state.score = 0;
    state.combo = 0;
    state.streak = 0;
    state.maxStreak = 0;
    state.clearedCount = 0;
    state.totalHits = 0;
    state.totalMisses = 0;
    state.isPlaying = true;
    state.startTime = Date.now();
    $("#home-tabs").addClass("hidden");
    $("#game-panel").removeClass("hidden");
    $("#time-progressbar").progressbar("value", 100);
    const isMapMode = state.mode === "map";
    $("#map-quiz-container").toggleClass("hidden", !isMapMode);
    $("#word-stage").toggleClass("is-map-mode", isMapMode);
    updateStatsUI();
    await nextQuestion();
    document.getElementById("game-panel").scrollIntoView({ behavior: "smooth", block: "center" });
    clearInterval(state.timerId);
    state.timerId = setInterval(() => {
      state.timeLeft = Math.max(0, state.timeLeft - 0.1);
      const pct = state.timeLeft / state.actualTimeLimit * 100;
      $("#time-progressbar").progressbar("value", pct);
      updateStatsUI();
      if (state.timeLeft <= 0) {
        stopGame(true);
      }
    }, 100);
  }
  async function nextQuestion() {
    if (state.pool.length === 0) {
      state.pool = shuffleArray(buildQuestionPool());
    }
    state.currentItem = state.pool.pop();
    state.currentWordMissed = false;
    const isCapital = state.mode === "capital";
    const isMap = state.mode === "map";
    const targetKanji = isCapital ? state.currentItem.capital : state.currentItem.name;
    const targetKana = isCapital ? state.currentItem.capitalKana : state.currentItem.kana;
    state.engine = new RomajiEngine(targetKana);
    $("#current-region").text(state.currentItem.region);
    if (isMap) {
      await renderJapanMapToContainer($("#map-quiz-container"), state.currentItem.id, state.clearedIds);
      $("#current-sub").text(`ヒント: 県庁所在地は「${state.currentItem.capital}」`);
      $("#current-kana").text("指し示された都道府県をタイピング！");
      $("#current-kanji").text("？？？");
    } else {
      const subText = isCapital ? `都道府県: ${state.currentItem.name}` : `県庁所在地: ${state.currentItem.capital}`;
      $("#current-sub").text(subText);
      $("#current-kana").text(targetKana);
      $("#current-kanji").text(targetKanji);
    }
    renderRomaji();
    if (isMap) {
      const stageEl = document.getElementById("word-stage");
      if (stageEl) {
        stageEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }
  function handleTyping(key) {
    const result = state.engine.input(key);
    const mults = storage.getMultipliers();
    const modeBonus = state.mode === "map" ? 1.3 : 1;
    if (result.status === "hit" || result.status === "completed") {
      state.totalHits++;
      state.combo++;
      const baseHitScore = (10 + Math.min(state.combo, 50)) * mults.scoreMult * modeBonus;
      state.score += Math.round(baseHitScore);
      if (result.status === "completed") {
        state.clearedCount++;
        state.clearedIds.add(state.currentItem.id);
        if (!state.currentWordMissed) {
          state.streak++;
          state.maxStreak = Math.max(state.maxStreak, state.streak);
        } else {
          state.streak = 0;
        }
        const streakMultiplier = 1 + state.streak * 0.2 * mults.streakMult;
        const clearBonus = Math.round(100 * mults.scoreMult * streakMultiplier * modeBonus);
        state.score += clearBonus;
        sound.playClear(state.streak);
        $("#word-stage").addClass("pop-anim");
        if (state.mode === "map") {
          $("#current-kanji").text(state.currentItem.name).addClass("revealed-text");
          renderRomaji(true);
          setTimeout(() => {
            $("#word-stage").removeClass("pop-anim");
            $("#current-kanji").removeClass("revealed-text");
            nextQuestion();
          }, 380);
        } else {
          setTimeout(() => $("#word-stage").removeClass("pop-anim"), 150);
          nextQuestion();
        }
      } else {
        sound.playKey();
        renderRomaji();
      }
    } else if (result.status === "miss") {
      sound.playMiss();
      state.totalMisses++;
      state.combo = 0;
      state.streak = 0;
      state.currentWordMissed = true;
      state.score = Math.max(0, state.score - 5);
      const $stage = $("#word-stage");
      $stage.removeClass("shake-anim");
      void $stage.offsetWidth;
      $stage.addClass("shake-anim");
    }
    updateStatsUI();
  }
  function renderRomaji(forceReveal = false) {
    const { typed, untyped } = state.engine.getDisplayState();
    $("#current-romaji .typed").text(typed);
    if (state.mode === "map" && !forceReveal) {
      $("#current-romaji .untyped").text("●".repeat(untyped.length));
    } else {
      $("#current-romaji .untyped").text(untyped);
    }
  }
  function updateStatsUI() {
    const mults = storage.getMultipliers();
    $("#stat-time").text(state.timeLeft.toFixed(1));
    $("#stat-score").text(state.score.toLocaleString());
    $("#stat-streak").text(state.streak);
    const currentStreakMult = (1 + state.streak * 0.2 * mults.streakMult).toFixed(2);
    $("#streak-mult-badge").text(`連続ボーナス x${currentStreakMult}`).toggleClass("fever", state.streak >= 5);
    const elapsedMin = Math.max((Date.now() - state.startTime) / 6e4, 0.01);
    const kpm = Math.round(state.totalHits / elapsedMin);
    $("#stat-kpm").text(kpm);
  }
  async function stopGame(showResult) {
    state.isPlaying = false;
    clearInterval(state.timerId);
    if (!showResult) {
      resetToSetup();
      return;
    }
    const elapsedMin = Math.max((state.actualTimeLimit - state.timeLeft) / 60, 0.01);
    const kpm = Math.round(state.totalHits / elapsedMin);
    const totalTypes = state.totalHits + state.totalMisses;
    const accuracy = totalTypes > 0 ? (state.totalHits / totalTypes * 100).toFixed(1) : "100.0";
    let rank = "C";
    if (kpm >= 350 && accuracy >= 95) rank = "SSS";
    else if (kpm >= 280 && accuracy >= 92) rank = "S";
    else if (kpm >= 200 && accuracy >= 88) rank = "A";
    else if (kpm >= 130) rank = "B";
    const growth = await storage.recordGameResult({
      mode: state.mode,
      score: state.score,
      kpm,
      accuracy,
      maxStreak: state.maxStreak,
      rank
    });
    if (growth.leveledUp) {
      sound.playLevelUp();
      $("#res-levelup-banner").removeClass("hidden");
      $("#res-new-lv").text(growth.newLevel);
    } else {
      $("#res-levelup-banner").addClass("hidden");
    }
    $("#res-rank").text(rank);
    $("#res-exp").text(growth.gainedExp.toLocaleString());
    $("#res-score").text(state.score.toLocaleString());
    $("#res-streak").text(`${state.maxStreak} 問`);
    $("#res-count").text(`${state.clearedCount} 問`);
    $("#res-kpm").text(`${kpm} KPM`);
    $("#res-acc").text(`${accuracy}%`);
    $("#res-miss").text(`${state.totalMisses} 回`);
    refreshProfileUI();
    $("#result-dialog").removeClass("hidden").dialog("open");
  }
  function resetToSetup() {
    $("#game-panel").addClass("hidden");
    $("#home-tabs").removeClass("hidden");
    refreshProfileUI();
  }
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
})();
