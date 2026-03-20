document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  const accent = "#ff2d6f";
  const accentSoft = "rgba(255, 45, 111, 0.2)";

  const trainingCtx = document.getElementById("trainingChart");
  if (trainingCtx) {
    new Chart(trainingCtx, {
      type: "doughnut",
      data: {
        labels: ["2023", "2022", "2021", "2019-2020"],
        datasets: [
          {
            data: [3, 4, 4, 2],
            backgroundColor: ["#ff2d6f", "#ff5d95", "#ff87b1", "#ffd3e2"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: { position: "bottom" },
        },
      },
    });
  }

  const radarCtx = document.getElementById("skillRadar");
  if (radarCtx) {
    new Chart(radarCtx, {
      type: "radar",
      data: {
        labels: ["Automation", "Data Analytics", "Dashboard", "Web Dev", "UI/UX", "Project Coordination"],
        datasets: [
          {
            label: "Skill Level",
            data: [92, 88, 90, 84, 78, 80],
            fill: true,
            backgroundColor: accentSoft,
            borderColor: accent,
            pointBackgroundColor: accent,
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 100,
            grid: { color: "#eee" },
          },
        },
        plugins: {
          legend: { display: false },
        },
      },
    });
  }

  const rpaCtx = document.getElementById("rpaBar");
  if (rpaCtx) {
    new Chart(rpaCtx, {
      type: "bar",
      data: {
        labels: ["2024", "2025"],
        datasets: [
          {
            label: "Projects",
            data: [25, 53],
            backgroundColor: "#ff87b1",
          },
          {
            label: "Human Workdays",
            data: [144.17, 692.9],
            backgroundColor: "#ff5d95",
          },
          {
            label: "RPA Workdays",
            data: [12, 80.7],
            backgroundColor: "#ff2d6f",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom" },
        },
      },
    });
  }
});
