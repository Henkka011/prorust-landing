async function copyText(text) {
  try { await navigator.clipboard.writeText(text); }
  catch (e) {
    const ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta);
    ta.select(); document.execCommand("copy"); ta.remove();
  }
  const t = document.getElementById("toast");
  if (!t) return;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1200);
}

function filterTopics() {
  const q = (document.getElementById("topicSearch")?.value || "").toLowerCase().trim();
  const items = document.querySelectorAll("[data-topic]");
  items.forEach(li => {
    const hay = li.getAttribute("data-topic") || "";
    li.style.display = hay.includes(q) ? "" : "none";
  });
}
