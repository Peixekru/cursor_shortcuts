$(document).ready(function () {
  const tbody = $("#atalhosTable tbody");
  atalhos.forEach(({ categoria, acao, atalho }) => {
    tbody.append(
      `<tr><td>${categoria}</td><td>${acao}</td><td>${atalho}</td></tr>`
    );
  });

  const table = $("#atalhosTable").DataTable({
    language: {
      paginate: { previous: "←", next: "→" },
      info: "Mostrando _START_ a _END_ de _TOTAL_ atalhos", // Texto modificado
      //url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json",
    },
    pagingType: "simple_numbers",
    drawCallback: function () {
      const api = this.api();
      const currentPage = api.page.info().page + 1;

      $(".dataTables_paginate .paginate_button").each(function () {
        const $btn = $(this);
        const text = $btn.text().trim();
        if (!isNaN(text)) {
          const page = parseInt(text, 10);
          $btn
            .html(page === currentPage ? "◉" : "●")
            .attr("data-page", page)
            .toggleClass("current", page === currentPage);
        }
      });
    },
  });

  $("#length-select").on("change", function () {
    table.page.len(parseInt($(this).val(), 10)).draw();
  });

  $(".dataTables_filter input").on("keyup change", function () {
    table.search(this.value).draw();
  });
});
