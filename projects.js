// ===========================================================
//  作品リスト — ここを編集するだけでサイトに反映されます
// ===========================================================
//  title       : 作品名（必須）
//  description : ひとこと説明（必須）
//  url         : 公開URL（必須）
//  category    : "ツール" | "ゲーム" | "学習" | "サイト" など自由
//  tags        : 小さなラベルの配列（技術名など）
//  date        : 作った時期 "YYYY-MM"（新しい順に並びます）
//  repo        : ソースコードのURL（任意）
//  image       : スクリーンショット画像のファイル名（任意。無ければ盤面の絵を自動生成）
// ===========================================================

const PROJECTS = [
  {
    title: "オセロ連盟レーティング",
    description: "大会の対局結果から選手のレーティングを算出。直近3年のランキング、大会一覧、記録を見られるサイト。",
    url: "https://azmaru99.github.io/othello-rating/?page=ranking",
    category: "サイト",
    tags: ["JavaScript", "Google Apps Script", "GitHub Pages"],
    date: "2026-10",
    repo: "https://github.com/azmaru99/othello-rating",
    image: "othello-rating.png",
  },
  {
    title: "オセロ大会運営サイト",
    description: "スイス式大会の組み合わせ作成・結果入力・順位表（勝数→BW→石数）までをまとめて行える大会運営ツール。",
    url: "https://azmaru99.github.io/othello-tournament/",
    category: "ツール",
    tags: ["JavaScript", "Google Apps Script", "GitHub Pages"],
    date: "2026-10",
    repo: "https://github.com/azmaru99/othello-tournament",
    image: "othello-tournament.png",
  },
  {
    title: "64マスの一生",
    description: "オセロと出会う人生を生きるシミュレーション。受験や就職の分かれ道を選びながら、名人戦・全日本・世界を目指す。人生は64マスの盤に年ごとに刻まれる。",
    url: "https://claude.ai/artifact/BnDwaPpjUYV6xggfTtr1hk",
    category: "ゲーム",
    tags: ["JavaScript", "Claude Artifact"],
    date: "2026-10",
    image: "life64.png",
  },
  {
    title: "オセロ ドラフトリーグ",
    description: "世界選手権の上位選手やレーティング上位者など260人から12人を指名してチームを作り、リーグ戦と決勝を戦うゲーム。能力値は実際の棋譜とレーティングから推定。",
    url: "https://claude.ai/artifact/1cNGwaDzWXXEYscKMnpmuP",
    category: "ゲーム",
    tags: ["JavaScript", "Claude Artifact"],
    date: "2026-10",
    image: "draft-league.png",
  },
  {
    title: "オセロ棋譜図メーカー",
    description: "棋譜文字列を貼るだけで、モノクロの棋譜図と途中局面図を作れるツール。対局者名や解説文も入れて画像で保存できる。",
    url: "https://claude.ai/artifact/RfETDt6yaQnAUHDtjcWsxB",
    category: "ツール",
    tags: ["JavaScript", "Claude Artifact"],
    date: "2026-10",
    image: "kifu-maker.png",
  },
];
