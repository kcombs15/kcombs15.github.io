(function () {
  const NEWS_DATA_PATH = "assets/data/news.json";

  async function fetchNewsData(dataPath) {
    const response = await fetch(dataPath, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`Failed to fetch news data: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error("News data must be an array.");
    }
    return data
      .map((entry) => ({
        ...entry,
        date: entry.date ?? entry.month ?? "",
      }))
      .sort((a, b) => {
        const dateA = Date.parse(a.date) || 0;
        const dateB = Date.parse(b.date) || 0;
        return dateB - dateA;
      });
  }

  function createListItem(item) {
    const listItem = document.createElement("li");

    if (item.html) {
      listItem.innerHTML = item.html;
      return listItem;
    }

    if (item.url) {
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.text ?? item.url;
      link.target = item.newTab === false ? "_self" : "_blank";
      link.rel = link.target === "_blank" ? "noopener" : "";
      listItem.appendChild(link);
      return listItem;
    }

    listItem.textContent = item.text ?? "";
    return listItem;
  }

  function getMonthTitle(entry) {
    if (entry.title) {
      return entry.title;
    }
    if (entry.month) {
      return entry.month;
    }
    if (entry.date) {
      const parsed = new Date(entry.date);
      if (!Number.isNaN(parsed.valueOf())) {
        return parsed.toLocaleDateString(undefined, { month: "long", year: "numeric" });
      }
    }
    return "";
  }

  window.renderNews = async function renderNews(options) {
    const {
      containerId,
      limit = null,
      emptyMessage = "No news available yet. Please check back soon!",
      dataPath = NEWS_DATA_PATH,
    } = options ?? {};

    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`renderNews: container with id "${containerId}" not found.`);
      return;
    }

    try {
      const newsEntries = await fetchNewsData(dataPath);
      const entriesToRender = typeof limit === "number" && limit > 0
        ? newsEntries.slice(0, limit)
        : newsEntries;

      container.innerHTML = "";

      if (!entriesToRender.length) {
        const message = document.createElement("p");
        message.textContent = emptyMessage;
        container.appendChild(message);
        return;
      }

      const fragment = document.createDocumentFragment();

      entriesToRender.forEach((entry) => {
        const wrapper = document.createElement("div");
        wrapper.className = "timeline-month";

        const monthHeading = document.createElement("p");
        monthHeading.innerHTML = `<strong>${getMonthTitle(entry)}</strong>`;
        wrapper.appendChild(monthHeading);

        if (Array.isArray(entry.items) && entry.items.length) {
          const list = document.createElement("ul");
          entry.items.forEach((item) => {
            list.appendChild(createListItem(item));
          });
          wrapper.appendChild(list);
        }

        fragment.appendChild(wrapper);
      });

      container.appendChild(fragment);
    } catch (error) {
      console.error(error);
      container.innerHTML = "";
      const message = document.createElement("p");
      message.textContent = emptyMessage;
      container.appendChild(message);
    }
  };
})();
