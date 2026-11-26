(() => {
  const grid = document.getElementById("grid");
  const filters = document.getElementById("filters");
  const search = document.getElementById("search");
  const count = document.getElementById("count");
  const empty = document.getElementById("empty");
  document.getElementById("year").textContent = new Date().getFullYear();

  const projects = [...PROJECTS].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  const categories = ["すべて", ...new Set(projects.map(p => p.category).filter(Boolean))];
  let current = "すべて";

  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // 画像が無い作品用：タイトルから決まる盤面の絵を生成
  function boardSvg(seed) {
    let h = 0;
    for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    const rand = () => ((h = (h * 1103515245 + 12345) >>> 0) / 2 ** 32);
    const cell = 22, cols = 16, rows = 9;
    let s = `<svg viewBox="0 0 ${cols * cell} ${rows * cell}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">`;
    s += `<rect width="100%" height="100%" fill="#1f6b45"/>`;
    for (let i = 1; i < cols; i++) s += `<line x1="${i * cell}" y1="0" x2="${i * cell}" y2="${rows * cell}" stroke="#0f3d2a"/>`;
    for (let j = 1; j < rows; j++) s += `<line x1="0" y1="${j * cell}" x2="${cols * cell}" y2="${j * cell}" stroke="#0f3d2a"/>`;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      const r = rand();
      if (r < 0.22) s += `<circle cx="${i * cell + cell / 2}" cy="${j * cell + cell / 2}" r="${cell * 0.38}" fill="${r < 0.11 ? "#111" : "#f2f2f2"}"/>`;
    }
    return s + "</svg>";
  }

  function card(p) {
    const thumb = p.image
      ? `<img src="${esc(p.image)}" alt="" loading="lazy">`
      : boardSvg(p.title);
    return `<li class="card">
      <div class="thumb">${thumb}</div>
      <div class="body">
        <div class="meta"><span class="cat">${esc(p.category)}</span><span>${esc(p.date)}</span></div>
        <h2><a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.title)}</a></h2>
        <p>${esc(p.description)}</p>
        ${p.repo ? `<a class="repo" href="${esc(p.repo)}" target="_blank" rel="noopener">ソースコード →</a>` : ""}
        <div class="tags">${(p.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </div>
    </li>`;
  }

  function render() {
    const q = search.value.trim().toLowerCase();
    const list = projects.filter(p =>
      (current === "すべて" || p.category === current) &&
      (!q || [p.title, p.description, ...(p.tags || [])].join(" ").toLowerCase().includes(q))
    );
    grid.innerHTML = list.map(card).join("");
    count.textContent = `${list.length} 件`;
    empty.hidden = list.length > 0;
  }

  filters.innerHTML = categories.map(c =>
    `<button role="tab" aria-selected="${c === current}" data-cat="${esc(c)}">${esc(c)}</button>`
  ).join("");
  filters.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    current = b.dataset.cat;
    filters.querySelectorAll("button").forEach(x => x.setAttribute("aria-selected", x === b));
    render();
  });
  search.addEventListener("input", render);
  render();
})();
