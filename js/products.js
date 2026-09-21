(() => {

  const cards =
    [
      ...document.querySelectorAll(
        ".product-card"
      )
    ];


  const filters =
    [
      ...document.querySelectorAll(
        ".filter"
      )
    ];


  const search =
    document.getElementById(
      "productSearch"
    );


  const empty =
    document.getElementById(
      "emptyState"
    );


  let activeFilter = "all";


  function render() {

    const query =
      (
        search?.value || ""
      )
        .trim()
        .toLowerCase();


    let visible = 0;


    cards.forEach(card => {

      const category =
        card.dataset.category;


      const name =
        card.dataset.name;


      const matchesFilter =
        activeFilter === "all" ||
        category === activeFilter;


      const matchesSearch =
        !query ||
        name.includes(query) ||
        category.includes(query);


      const show =
        matchesFilter &&
        matchesSearch;


      card.style.display =
        show ? "" : "none";


      if (show) {
        visible++;
      }

    });


    if (empty) {
      empty.hidden =
        visible !== 0;
    }

  }


  filters.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        filters.forEach(item => {
          item.classList.remove(
            "active"
          );
        });


        button.classList.add(
          "active"
        );


        activeFilter =
          button.dataset.filter;


        render();

      }
    );

  });


  search?.addEventListener(
    "input",
    render
  );


  render();

})();
